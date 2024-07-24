const Minio = require('minio')
const path = require('path')
const BaseController = require('./base')
const qs = require('qs')
const crypto = require('crypto')

var minioClient = new Minio.Client({
  endPoint: '127.0.0.1',
  port: 9000,
  useSSL: false,
  accessKey: 'kxt15eSp1QW61RrzDJJs',
  secretKey: 'NcW4Zd0dL8rgU0SViFSpPBxgsiT4ONTjdnymfwYr'
})

class OSSController extends BaseController {
  static async initNewMultipartUpload(ctx) {
    const headers = {
      'Content-Type': 'application/octet-stream'
    }
    let { filename } = ctx.request.body
    const uuid = crypto.randomUUID({ disableEntropyCache: true })
    const ext = filename.match(/\.([0-9a-z]+)$/i)?.[1] || ''
    const prefix = `${uuid.substring(0, 2)}/${uuid.substring(2, 4)}/${uuid.substring(4, 6)}`
    const newFilename = `${prefix}/${uuid}.${ext}`

    let oldTags
    filename = decodeURIComponent(filename)
    let uploadId
    console.log('====initNewMultipartUpload====')
    try {
      const previousUploadId = await minioClient.findUploadId('mpadmin', newFilename)
      console.log('- previousUploadId', previousUploadId)
      if (!previousUploadId) {
        uploadId = await minioClient.initiateNewMultipartUpload('mpadmin', newFilename, headers)
      } else {
        console.log('**get oldTags**')
        uploadId = previousUploadId
        oldTags = await minioClient.listParts('mpadmin', newFilename, previousUploadId)
        console.log('oldTags:', oldTags)
      }

      console.log('- uploadId:', uploadId)
      ctx.body = { uploadId, newFilename, oldTags }
    } catch (err) {
      console.log(err)
    }
  }
  static async uploadPart(ctx) {
    const chunk = ctx.request.file
    // console.log(ctx.request.body)
    let { filename, uploadId, partNumber } = ctx.request.body
    filename = decodeURIComponent(filename)

    console.log('====uploadPart====')
    console.log('- partNumber:', partNumber)
    // console.log('- hash:', hash)
    const options = {
      method: 'PUT',
      query: qs.stringify({
        partNumber: parseInt(partNumber),
        uploadId
      }),
      // headers: {
      //   'Content-Length': chunk.size,
      //   'Content-MD5': hash
      // },
      bucketName: 'mpadmin',
      objectName: filename
    }
    const response = await minioClient.makeRequestAsyncOmit(options, chunk.buffer)
    // const etag = await minioClient.uploadPart(partConfig)
    console.log('- etag', response.headers.etag)
    let etag = response.headers.etag
    if (etag) {
      etag = etag.replace(/^"/, '').replace(/"$/, '')
    } else {
      etag = ''
    }
    ctx.body = { etag: etag, part: parseInt(partNumber) }
  }

  static async completeMultipartUpload(ctx) {
    let { filename, uploadId, etags } = ctx.request.body
    filename = decodeURIComponent(filename)
    const etagsJson = JSON.parse(etags)
    console.log('====completeMultipartUpload====')
    const result = await minioClient.completeMultipartUpload('mpadmin', filename, uploadId, etagsJson)
    minioClient
    ctx.body = result
  }
}

module.exports = OSSController

import * as Minio from 'minio'
import BaseController from './base.js'
import qs from 'qs'
import crypto from 'crypto'

const minioClient = new Minio.Client({
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
    let { filename, uploadId, partNumber } = ctx.request.body
    filename = decodeURIComponent(filename)

    console.log('====uploadPart====')
    console.log('- filename:', filename)
    console.log('- uploadId:', uploadId)
    console.log('- partNumber:', partNumber)

    const options = {
      method: 'PUT',
      query: qs.stringify({
        partNumber: parseInt(partNumber),
        uploadId
      }),
      bucketName: 'mpadmin',
      objectName: filename
    }
    const response = await minioClient.makeRequestAsyncOmit(options, chunk.buffer)
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

    ctx.body = result
  }
}

export default OSSController

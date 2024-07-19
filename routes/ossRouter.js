const Router = require('@koa/router')
const authToken = require('../middlewares/authtoken')
const OSSController = require('../controllers/oss')

const multer = require('@koa/multer')

// const multer = require('multer')

// 配置multer

const upload = multer()

const ossRouter = new Router()
ossRouter.post('/oss/uploadPart', upload.single('file'), authToken, OSSController.uploadPart)

ossRouter.post('/oss/initNewMultipartUpload', OSSController.initNewMultipartUpload)
ossRouter.post('/oss/completeMultipartUpload', OSSController.completeMultipartUpload)

module.exports = ossRouter

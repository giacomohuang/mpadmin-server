const Router = require('@koa/router')
const VerificationController = require('../controllers/verification')
// const router = new Router({ prefix: '/api' });
const verificationRouter = new Router()

// Account & My
verificationRouter.post('/verification/sendcodebyemail', VerificationController.sendCodeByEmail)
verificationRouter.post('/verification/sendcodebysms', VerificationController.sendCodeBySMS)

module.exports = verificationRouter

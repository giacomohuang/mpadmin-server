const Router = require('@koa/router')
const authSign = require('../middlewares/authsign')
const authToken = require('../middlewares/authtoken')
const VerificationController = require('../controllers/verification')
// const router = new Router({ prefix: '/api' });
const verificationRouter = new Router()

// Account & My
const ts = [authSign]
verificationRouter.post('/verification/sendcodebyemail', ...ts, VerificationController.sendCodeByEmail)
verificationRouter.post('/verification/sendcodebysms', ...ts, VerificationController.sendCodeBySMS)

module.exports = verificationRouter

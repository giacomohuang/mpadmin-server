const Router = require('@koa/router')
const authToken = require('../middlewares/authtoken')
const AccountController = require('../controllers/account')

// const router = new Router({ prefix: '/api' });
const accountRouter = new Router()

// Account & My
accountRouter.post('/account/signup', AccountController.signup)
accountRouter.post('/account/signin', AccountController.signin)
accountRouter.post('/account/signin2FA', AccountController.signin2FA)
accountRouter.post('/account/signout', AccountController.signout)
accountRouter.post('/account/verifytoken', authToken, AccountController.verifyToken)
accountRouter.post('/account/generatetotpsecret', authToken, AccountController.generateTotpSecret)
accountRouter.post('/account/verifytotp', authToken, AccountController.verifyTotp)
accountRouter.post('/account/updatetotpsecret', authToken, AccountController.updateTotpSecret)
accountRouter.post('/account/hello', AccountController.hello)

accountRouter.post('/account/getauthinfo', authToken, AccountController.getAuthInfo)
accountRouter.post('/account/updatepassword', authToken, AccountController.updatePassword)
accountRouter.post('/account/initpassword', AccountController.initPassword)
accountRouter.post('/account/updateemail', authToken, AccountController.updateEmail)
accountRouter.post('/account/updatephone', authToken, AccountController.updatePhone)
accountRouter.post('/account/update2fa', authToken, AccountController.update2FA)

module.exports = accountRouter

const Router = require('@koa/router')
const authToken = require('../middlewares/authtoken')
const ResourceController = require('../controllers/resource')

// const router = new Router({ prefix: '/api' });
const accountRouter = new Router()

// Account & My
accountRouter.post('/permission/resource/list', authToken, ResourceController.list)

module.exports = accountRouter

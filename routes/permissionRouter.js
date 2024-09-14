const Router = require('@koa/router')
const authToken = require('../middlewares/authtoken')
const ResourceController = require('../controllers/resource')

// const router = new Router({ prefix: '/api' });
const accountRouter = new Router()

// Account & My
accountRouter.post('/permission/resource/list', authToken, ResourceController.list)
accountRouter.post('/permission/resource/add', authToken, ResourceController.add)
accountRouter.post('/permission/resource/remove', authToken, ResourceController.remove)
accountRouter.post('/permission/resource/update', authToken, ResourceController.update)

module.exports = accountRouter

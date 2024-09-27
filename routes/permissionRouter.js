const Router = require('@koa/router')
const authToken = require('../middlewares/authtoken')
const ResourceController = require('../controllers/resource')
const RoleController = require('../controllers/role')

// const router = new Router({ prefix: '/api' });
const permissionRouter = new Router()

// Account & My
permissionRouter.post('/permission/resource/list', authToken, ResourceController.list)
permissionRouter.post('/permission/resource/add', authToken, ResourceController.add)
permissionRouter.post('/permission/resource/remove', authToken, ResourceController.remove)
permissionRouter.post('/permission/resource/update', authToken, ResourceController.update)
permissionRouter.post('/permission/resource/reorder', authToken, ResourceController.reorder)

permissionRouter.post('/permission/role/list', authToken, RoleController.list)
permissionRouter.post('/permission/role/add', authToken, RoleController.add)
permissionRouter.post('/permission/role/remove', authToken, RoleController.remove)
permissionRouter.post('/permission/role/update', authToken, RoleController.update)
permissionRouter.post('/permission/role/reorder', authToken, RoleController.reorder)

module.exports = permissionRouter

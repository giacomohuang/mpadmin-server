import Router from '@koa/router'
import wenjuanController from '../controllers/wenjuan.js'

const wenjuanRouter = new Router()

wenjuanRouter.post('/wenjuan/list', wenjuanController.list)
wenjuanRouter.post('/wenjuan/get', wenjuanController.get)
wenjuanRouter.post('/wenjuan/update', wenjuanController.update)
wenjuanRouter.post('/wenjuan/remove', wenjuanController.remove)

export default wenjuanRouter

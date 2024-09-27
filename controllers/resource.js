const BaseController = require('./base')
const Resource = require('../models/resource')

class ResourceController extends BaseController {
  static async list(ctx) {
    // console.log('aaaa')
    const { pid, isOneLevel } = ctx.request.body
    let resource
    if (isOneLevel) {
      resource = await Resource.find({ pid: pid })
    } else if (pid == null) {
      resource = await Resource.find()
    } else {
      const regex = new RegExp(`^${pid}-`)
      resource = await Resource.find({ $or: [{ path: regex }, { id: pid }] })
      // resource = await Resource.find({ path: regex })
    }
    ctx.body = resource
  }
  static async add(ctx) {
    const item = ctx.request.body
    const nextId = await ResourceController.getNextId('resourceid')
    item.id = nextId
    item.path = item.path ? item.path + '-' + nextId : nextId
    const resource = await Resource.create(item)
    ctx.body = resource
    console.log(resource)
  }

  static async update(ctx) {
    console.log('update')
    const item = ctx.request.body
    const res = await Resource.replaceOne({ id: item.id }, item)
    ctx.body = res
    console.log(res)
  }

  static async reorder(ctx) {
    // console.log('reorder')
    const req = ctx.request.body
    const data = req.map((id, index) => {
      return {
        updateOne: {
          filter: { id: id },
          update: { order: index + 1 }
        }
      }
    })
    const res = await Resource.bulkWrite(data)
    // const data = req.map((id, index) => {
    //   return { filter: { id: id }, update: { order: index + 1 } }
    // })
    // console.log(data)

    // const res = Resource.updateMany(
    //   data.map(({ filter, update }) => {
    //     return { filter, update }
    //   }),
    //   { multi: true }
    // )

    ctx.body = res
  }

  static async remove(ctx) {
    console.log('remove')
    const ids = ctx.request.body
    let res
    if (ids.length > 1) {
      res = await Resource.deleteMany({ id: { $in: ids } })
      console.log('remove many')
    } else {
      res = await Resource.deleteOne({ id: ids[0] })
      console.log('remove one')
    }
    ctx.body = res
    console.log(res)
  }
}
module.exports = ResourceController

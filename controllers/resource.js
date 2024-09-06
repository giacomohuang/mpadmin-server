const BaseController = require('./base')
const Resource = require('../models/resource')

class ResourceController extends BaseController {
  static async list(ctx) {
    // console.log('aaaa')
    const { pid, isOneLevel } = ctx.request.body
    let resource
    if (isOneLevel) {
      resource = await Resource.find({ pid: pid })
    } else {
      const regex = new RegExp(`^${pid}-`)
      resource = await Resource.find({ $or: [{ path: regex }, { id: pid }] })
    }
    console.log(resource)
    ctx.body = resource
  }
}
module.exports = ResourceController

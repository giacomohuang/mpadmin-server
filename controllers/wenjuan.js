import BaseController from './base.js'
import Wenjuan from '../models/wenjuan.js'

class WenjuanController extends BaseController {
  static async list(ctx) {
    const { page = 1, limit = 10, query = {}, sort = { updatedAt: -1 } } = ctx.request.body
    // console.log('list params:', { page, limit, query, sort })

    const wenjuan = await Wenjuan.find(query)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(limit)
      .exec()

    const total = await Wenjuan.countDocuments(query)
    ctx.body = {
      wenjuan,
      total: total,
      pages: Math.ceil(total / limit),
      page: page,
      limit: limit
    }
  }

  static async get(ctx) {
    console.log('get')
    const { id } = ctx.request.body
    const res = await Wenjuan.findOne({ _id: id })
    ctx.body = res
    console.log(res)
  }

  static async update(ctx) {
    console.log('update')
    const { _id, ...updateData } = ctx.request.body

    // 添加 updatedAt 字段
    updateData.updatedAt = new Date()

    let res
    if (!_id) {
      // 如果没有 _id，创建新数据
      const newWenjuan = new Wenjuan(updateData)
      res = await newWenjuan.save()
    } else {
      // 如果有 _id，更新已存在的数据
      res = await Wenjuan.findOneAndUpdate({ _id: _id }, { $set: updateData }, { new: true, runValidators: true })
    }
    ctx.body = res
    // console.log(res)
  }

  // 删除问卷
  static async remove(ctx) {
    console.log('remove')
    const ids = ctx.request.body
    // console.log(ids)
    // 删除问卷及其所有子问卷
    const res = await Wenjuan.deleteMany({ _id: { $in: ids } })
    ctx.body = res
  }
}

export default WenjuanController

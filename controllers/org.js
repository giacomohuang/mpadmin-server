const BaseController = require('./base')
const Org = require('../models/org')

class OrgController extends BaseController {
  // 列出组织
  static async list(ctx) {
    const res = await Org.find()
    ctx.body = res
  }

  // 根据id获取组织信息
  static async get(ctx) {
    const { id } = ctx.request.body
    const res = await Org.findOne({ id })
    ctx.body = res
  }

  // 添加组织
  static async add(ctx) {
    const item = ctx.request.body
    const nextId = await OrgController.getNextId('orgid')
    item.id = nextId
    item.path = item.pid ? `${item.pid}-${nextId}` : `${nextId}`
    item.level = item.path.split('-').length

    const res = await Org.create(item)
    ctx.body = res
  }

  // 更新组织
  static async update(ctx) {
    const item = ctx.request.body
    const { id } = item

    // 检查是否存在
    const existingOrg = await Org.findOne({ id })
    if (!existingOrg) {
      ctx.throw(404, '组织不存在')
    }

    // 更新组织
    const res = await Org.findOneAndUpdate({ id }, item, { new: true })

    // 如果 path 发生变化，更新所有子组织的 path
    if (existingOrg.path !== item.path) {
      const oldPath = existingOrg.path
      const newPath = item.path
      await Org.updateMany({ path: new RegExp(`^${oldPath}-`) }, [
        {
          $set: {
            path: {
              $concat: [newPath, { $substr: ['$path', { $strLenCP: oldPath }, { $subtract: [{ $strLenCP: '$path' }, { $strLenCP: oldPath }] }] }]
            },
            level: { $size: { $split: ['$path', '-'] } }
          }
        }
      ])
    }

    ctx.body = res
  }

  // 删除组织
  static async remove(ctx) {
    const { path } = ctx.request.body
    // 删除组织及其所有子组织
    const res = await Org.deleteMany({ path: new RegExp(`^${path}(-\\d+)*$`) })
    ctx.body = res
  }

  // 重新排序
  static async reorder(ctx) {
    const req = ctx.request.body
    const bulkOps = req.map((id, index) => {
      return {
        updateOne: {
          filter: { id: id },
          update: { order: index + 1 }
        }
      }
    })

    const res = await Org.bulkWrite(bulkOps)
    ctx.body = res
  }
}

module.exports = OrgController

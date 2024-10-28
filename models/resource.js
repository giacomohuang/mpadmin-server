import mongoose from 'mongoose'

const resourceSchema = new mongoose.Schema({
  // id
  id: {
    type: Number,
    required: true,
    unique: true
  },
  // 资源名称
  name: {
    type: String,
    required: true,
    unique: true
  },
  // 父id
  pid: {
    type: Number,
    required: false
  },
  // 编码
  code: {
    type: String,
    required: true
  },
  // 类型
  // 1: 菜单
  // 2: 功能
  // 3: 数据
  type: {
    type: Number,
    required: true
  },
  // 路径
  path: {
    type: String,
    required: true
  },
  // 层级
  level: {
    type: Number,
    required: true
  },
  // 排序
  order: {
    type: Number,
    required: false
  },
  // 路由或外部链接，仅对菜单类型有效
  router: {
    type: String,
    required: false
  },
  // 页面跳转方式，仅对菜单类型有效
  // 1: 当前页面
  // 2: 新页面
  redirect: {
    type: String,
    required: false
  },
  // 状态：0禁用 1启用
  status: {
    type: Number,
    required: false,
    default: 1
  },
  // 创建时间
  createTime: {
    type: Date,
    required: true,
    default: Date.now
  },
  // 更新时间
  updateTime: {
    type: Date,
    required: true,
    default: Date.now
  },
  // 操作人
  operator: {
    type: String,
    required: true
  }
})

export default mongoose.model('Resource', resourceSchema)

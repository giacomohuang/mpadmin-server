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
  // 状态：0禁用 1启用
  status: {
    type: Number,
    required: false,
    default: 1
  }
})

export default mongoose.model('Resource', resourceSchema)

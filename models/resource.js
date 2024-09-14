const mongoose = require('mongoose')

const resourceSchema = new mongoose.Schema({
  // 资源名称
  name: {
    type: String,
    required: true,
    unique: true
  },
  // id
  id: {
    type: Number,
    required: true,
    unique: true
  },
  // 组织id
  pid: {
    type: Number,
    required: true
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
  }
})

module.exports = mongoose.model('Resource', resourceSchema)

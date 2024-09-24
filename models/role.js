const mongoose = require('mongoose')

const roleSchema = new mongoose.Schema({
  // 角色名称
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
  // 父id
  pid: {
    type: Number,
    required: false
  },
  // 描述
  description: {
    type: String,
    required: false
  },
  // 资源
  resources: {
    type: Array,
    required: false
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

module.exports = mongoose.model('Role', roleSchema)

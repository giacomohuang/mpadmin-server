const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
  // 账户名
  accountname: {
    type: String,
    required: true,
    unique: true
  },
  // 真实姓名
  realname: {
    type: String,
    required: true,
    unique: true
  },
  // 密码
  password: {
    type: String,
    required: true,
    encrypted: true
  },
  // 组织id
  orgId: {
    type: String,
    required: false
  },
  // 实体id
  entityId: {
    type: String,
    required: false
  },
  // 头像
  avatar: {
    type: String,
    required: false
  },
  // 电话区号
  areacode: {
    type: String,
    required: false
  },
  // 电话号码
  phone: {
    type: String,
    required: false
  },
  // 邮箱
  email: {
    type: String,
    required: false
  },
  // 账户类型
  type: {
    type: Number,
    required: false
  },
  // totp秘钥
  totpSecret: {
    type: String,
    required: false
  },
  // 是否开启2FA
  enable2FA: {
    type: Boolean,
    required: false
  },
  // 是否需要重设密码
  initPwd: {
    type: Boolean,
    required: false
  },
  // 操作人id
  OperatorId: {
    type: String,
    required: false
  },
  // 操作时间
  OperateTime: {
    type: Date,
    required: false
  }
})

module.exports = mongoose.model('Account', accountSchema)

const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
  accountname: {
    type: String,
    required: true,
    unique: true
  },
  realname: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    encrypted: true
  },
  orgId: {
    type: String,
    required: false
  },
  entityId: {
    type: String,
    required: false
  },
  avatar: {
    type: String,
    required: false
  },
  lastSiginTime: {
    type: Date,
    required: false
  },
  lastSigninIp: {
    type: String,
    required: false
  },
  areacode: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  type: {
    type: Number,
    required: false
  },
  totpSecret: {
    type: String,
    required: false
  },
  enable2FA: {
    type: Boolean,
    required: false
  },
  initPwd: {
    type: Boolean,
    required: false
  },
  OperatorId: {
    type: String,
    required: false
  },
  OperateTime: {
    type: Date,
    required: false
  }
})

module.exports = mongoose.model('Account', accountSchema)

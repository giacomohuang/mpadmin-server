import mongoose from 'mongoose'
const wenjuanVersionSchema = new mongoose.Schema({
  wenjuanId: {
    type: String
  },
  version: {
    type: Number
  },
  settings: {
    type: Object
  },
  name: {
    type: String
  },
  data: {
    type: Object
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  operatorId: {
    type: String
  }
})

export default mongoose.model('WenjuanVersion', wenjuanVersionSchema, 'wenjuanVersion')

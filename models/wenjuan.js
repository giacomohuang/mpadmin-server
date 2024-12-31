import mongoose from 'mongoose'

const wenjuanSchema = new mongoose.Schema({
  name: {
    type: String
  },
  draft: {
    type: JSON
  },
  isPublish: {
    type: Boolean,
    default: false
  },
  isDraft: {
    type: Boolean,
    default: false
  },
  settings: {
    type: Object
  },
  data: {
    type: Object
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  operatorId: {
    type: String
  }
})

export default mongoose.model('Wenjuan', wenjuanSchema, 'wenjuan')

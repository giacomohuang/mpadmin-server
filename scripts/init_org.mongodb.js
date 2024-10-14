const data = [
  {
    id: 1,
    name: '猫猫集团',
    fullname: '猫猫',
    type: 0,
    isEntity: false,
    leaderId: null,
    leaderName: '张三',
    order: 1,
    status: 1,
    pid: null,
    level: 1,
    path: '1'
  },
  {
    id: 2,
    name: '销售支持部',
    fullname: '猫猫集团-销售支持部',
    type: 0,
    isEntity: false,
    leaderId: null,
    leaderName: '周二二',
    order: 1,
    status: 1,
    pid: 1,
    level: 2,
    path: '1-2'
  },
  {
    id: 10,
    name: '销售管理部',
    fullname: '猫猫集团-销售管理部',
    type: 0,
    isEntity: false,
    leaderId: null,
    leaderName: '张四',
    order: 1,
    status: 1,
    pid: 2,
    level: 3,
    path: '1-2-10'
  },
  {
    id: 3,
    name: '市场部',
    fullname: '猫猫集团-市场部',
    type: 0,
    isEntity: false,
    leaderId: null,
    leaderName: '周二三',
    order: 2,
    status: 1,
    pid: 1,
    level: 2,
    path: '1-3'
  },
  {
    id: 4,
    name: '研发中心',
    fullname: '猫猫集团-研发中心',
    type: 0,
    isEntity: false,
    leaderId: null,
    leaderName: '陈伟',
    order: 9,
    status: 1,
    pid: 1,
    level: 2,
    path: '1-4'
  },
  {
    id: 5,
    name: '产品部',
    fullname: '猫猫集团-产品部',
    type: 0,
    isEntity: false,
    parent_id: 4,
    leaderId: null,
    leaderName: '周二二',
    order: 1,
    status: 1,
    pid: 4,
    level: 3,
    path: '1-4-5'
  },
  {
    id: 6,
    name: '技术部',
    fullname: '猫猫集团-技术部',
    type: 0,
    isEntity: false,
    leaderId: null,
    leaderName: '黄三',
    order: 2,
    status: 1,
    pid: 4,
    level: 3,
    path: '1-4-6'
  },
  {
    id: 7,
    name: '区域公司',
    fullname: '猫猫集团-区域公司',
    type: 0,
    isEntity: false,
    leaderId: null,
    leaderName: '黄五',
    order: 4,
    status: 1,
    pid: 1,
    level: 2,
    path: '1-7'
  },

  {
    id: 8,
    name: '华东区域',
    fullname: '猫猫集团-华东区域',
    type: 0,
    isEntity: false,
    leaderId: null,
    leaderName: '赵六六',
    order: 1,
    status: 1,
    pid: 7,
    level: 3,
    path: '1-7-8'
  },
  {
    id: 9,
    name: '华北区域',
    fullname: '猫猫集团-华北区域',
    type: 0,
    isEntity: false,
    leaderId: null,
    leaderName: '露琪亚诺',
    order: 2,
    status: 1,
    pid: 7,
    level: 3,
    path: '1-7-9'
  }
]

const database = 'mpadmin'
use(database)

db.orgs.deleteMany({})
db.orgs.insertMany(data)
console.log(data.length)
db.counters.findAndModify({
  query: { _id: 'orgid' },
  update: { $set: { seq: data.length } },
  new: true, // 返回更新后的文档
  upsert: true // 如果文档不存在，则插入一个新的文档
})

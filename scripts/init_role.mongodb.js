const { defineScript } = require('redis')

const roles = [
  {
    id: 1,
    name: '超级管理员',
    description: '超级管理员',
    resources: [1, 2, 3, 4, 5, 6],
    pid: null
  },
  {
    id: 2,
    name: '普通用户',
    description: '普通用户',
    resources: [1, 2],
    pid: null
  },
  {
    id: 3,
    name: '内容管理员',
    description: '负责管理所有内容相关事务',
    resources: [2, 3, 4],
    pid: null
  },
  {
    id: 4,
    name: '高级编辑',
    description: '负责审核和管理内容',
    resources: [2, 3, 4],
    pid: 3
  },
  {
    id: 5,
    name: '初级编辑',
    description: '负责创建和编辑内容',
    resources: [2, 3],
    pid: 3
  },
  {
    id: 6,
    name: '财务主管',
    description: '负责所有财务相关操作',
    resources: [3, 4, 5],
    pid: null
  },
  {
    id: 7,
    name: '会计',
    description: '负责日常财务记录和报告',
    resources: [3, 4],
    pid: 6
  },
  {
    id: 8,
    name: '客户服务经理',
    description: '管理客户服务团队',
    resources: [1, 2, 6],
    pid: null
  },
  {
    id: 9,
    name: '客户服务代表',
    description: '处理客户查询和问题',
    resources: [1, 2],
    pid: 8
  },
  {
    id: 10,
    name: '市场总监',
    description: '负责整体市场营销策略',
    resources: [2, 4, 5, 6],
    pid: null
  },
  {
    id: 11,
    name: '市场专员',
    description: '执行市场营销计划',
    resources: [2, 4],
    pid: 10
  },
  {
    id: 12,
    name: '人力资源总监',
    description: '负责整体人力资源管理',
    resources: [1, 3, 4, 5, 6],
    pid: null
  },
  {
    id: 13,
    name: '招聘专员',
    description: '负责招聘相关事务',
    resources: [1, 3],
    pid: 12
  },
  {
    id: 14,
    name: '培训专员',
    description: '负责员工培训和发展',
    resources: [1, 4],
    pid: 12
  }
]

const database = 'mpadmin'
use(database)

db.roles.deleteMany({})
db.roles.insertMany(roles)
console.log(roles.length)
db.counters.findAndModify({
  query: { _id: 'roleid' },
  update: { $set: { seq: roles.length } },
  new: true, // 返回更新后的文档
  upsert: true // 如果文档不存在，则插入一个新的文档
})

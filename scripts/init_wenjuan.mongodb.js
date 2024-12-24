const wenjuan = [
  {
    settings: {},
    name: '问卷名称',
    createdAt: new Date(),
    updatedAt: new Date(),
    isPublish: true,
    data: [
      {
        title: '题目1 多选题',
        id: '0AhjUdf84f',
        type: 'MultiChoice',
        required: true,
        options: [
          { text: '选项1', value: 0, id: '0bh7t5Hgd', fill: { show: true, length: 20, type: 'text' } },
          { text: '选项2', value: 1, id: '1Ghjsd74j' },
          { text: '选项3', value: 2, id: '2GhGjk5dM' }
        ]
      },
      {
        id: 'K9IwrM04qeJJ',
        title: '<p>请给这个产品打分</p>',
        type: 'Rate',
        required: false,
        minScore: 7,
        maxScore: 10,
        step: 1,
        value: 10,
        tips: [],
        customIcon: null,
        showLabels: true,
        minLabel: '最低',
        maxLabel: '最高'
      },
      {
        title: '题目2 单选题',
        id: '1H84jfks4',
        type: 'SingleChoice',
        required: true,
        options: [
          { text: '选项1', value: 0, id: '0bh7t5Hgd' },
          { text: '选项2', value: 1, id: '1fk4r8Hjd' },
          { text: '选项3', value: 2, id: '2YYjksd8d' },
          { text: '选项3', value: 3, id: '3Hjke834j', fill: { show: true, length: 20, type: 'text' } }
        ]
      }
    ]
  }
]
const database = 'mpadmin'
use(database)

db.wenjuan.deleteMany({})
db.wenjuan.insertMany(wenjuan)

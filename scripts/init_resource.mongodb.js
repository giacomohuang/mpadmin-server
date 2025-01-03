const data = [
  {
    _id: '67209d3d2394a4eca72b2bdd',
    id: 654,
    name: {
      'zh-CN': '账户',
      'zh-HK': '賬戶',
      en: 'Account',
      ar: 'حساب',
      ja: 'アカウント',
      ko: '계정'
    },
    pid: null,
    code: 'account',
    type: 1,
    path: '654',
    order: 3,
    linkType: null,
    router: '/404',
    link: null,
    icon: 'add',
    iconType: 1,
    isHidden: false,
    status: 1
  },
  {
    _id: '67209d532394a4eca72b2be2',
    id: 655,
    name: {
      'zh-CN': '账户列表',
      'zh-HK': '賬戶列表',
      en: 'Account List',
      ar: 'قائمة الحسابات',
      ja: 'アカウント一覧',
      ko: '계정 목록'
    },
    pid: 654,
    code: 'account.list',
    type: 1,
    path: '654-655',
    order: 1,
    linkType: 1,
    router: '/account/accountlist',
    link: '',
    target: 'self',
    isHidden: false,
    status: 1
  },
  {
    _id: '67209d6e2394a4eca72b2be6',
    id: 656,
    name: {
      'zh-CN': '账户信息',
      'zh-HK': '賬戶信息',
      en: 'Account Info',
      ar: 'معلومات الحساب',
      ja: 'アカウント情報',
      ko: '계정 정보'
    },
    pid: 654,
    code: 'account.info',
    type: 1,
    path: '654-656',
    order: 2,
    linkType: 1,
    router: '/account/account',
    link: null,
    status: 1,
    target: 'self',
    isHidden: false
  },
  {
    _id: '67209d7e2394a4eca72b2bea',
    id: 657,
    name: {
      'zh-CN': '工作台',
      'zh-HK': '工作台',
      en: 'Workspace',
      ar: 'مساحة العمل',
      ja: 'ワークスペース',
      ko: '작업대'
    },
    pid: null,
    code: 'workspace',
    type: 1,
    path: '657',
    order: 1,
    linkType: null,
    router: '/workspace/main',
    link: null,
    icon: 'data',
    iconType: 1,
    isHidden: false,
    status: 1
  },
  {
    _id: '67209d932394a4eca72b2bef',
    id: 658,
    name: {
      'zh-CN': '工作台',
      'zh-HK': '工作台',
      en: 'Workspace',
      ar: 'مساحة العمل',
      ja: 'ワークスペース',
      ko: '작업대'
    },
    pid: 657,
    code: 'workspace.workspace',
    type: 1,
    path: '657-658',
    order: 1,
    linkType: 1,
    router: '/workspace/main',
    link: '',
    icon: 'del',
    iconType: 1,
    target: 'self',
    isHidden: false,
    status: 1
  },
  {
    _id: '67209d9d2394a4eca72b2bf3',
    id: 659,
    name: {
      'zh-CN': '上传',
      'zh-HK': '上傳',
      en: 'Upload',
      ar: 'تحميل',
      ja: 'アップロード',
      ko: '업로드'
    },
    pid: 657,
    code: 'workspace.upload',
    type: 1,
    path: '657-659',
    order: 2,
    linkType: 1,
    router: '/workspace/upload',
    link: '',
    target: 'self',
    isHidden: false,
    status: 1
  },
  {
    _id: '67209daf2394a4eca72b2bf8',
    id: 660,
    name: {
      'zh-CN': '系统设置',
      'zh-HK': '系統設置',
      en: 'Settings',
      ar: 'إعدادات النظام',
      ja: 'システム設定',
      ko: '시스템 설정'
    },
    pid: null,
    code: 'settings',
    type: 1,
    path: '660',
    order: 4,
    linkType: null,
    router: null,
    link: null,
    isHidden: false,
    status: 1
  },
  {
    _id: '67209dd02394a4eca72b2bfd',
    id: 661,
    name: {
      'zh-CN': '组织架构',
      'zh-HK': '組織架構',
      en: 'Organization',
      ar: 'الهيكل التنظيمي',
      ja: '組織構造',
      ko: '조직 구조'
    },
    pid: 660,
    code: 'settings.orgs',
    type: 1,
    path: '660-661',
    order: null,
    linkType: 1,
    router: '/sys/org',
    link: '',
    target: 'self',
    isHidden: false,
    status: 1
  },
  {
    _id: '67209ddf2394a4eca72b2c01',
    id: 662,
    name: {
      'zh-CN': '权限',
      'zh-HK': '權限',
      en: 'Permission',
      ar: 'الصلاحيات',
      ja: '権限',
      ko: '권한'
    },
    pid: 660,
    code: 'settings.permission',
    type: 1,
    path: '660-662',
    order: 2,
    status: 1,

    isHidden: false
  },
  {
    _id: '67209dee2394a4eca72b2c05',
    id: 663,
    name: {
      'zh-CN': '资源',
      'zh-HK': '資源',
      en: 'Resource',
      ar: 'الموارد',
      ja: 'リソース',
      ko: '리소스'
    },
    pid: 662,
    code: 'settings.permission.resource',
    type: 1,
    path: '660-662-663',
    order: null,
    linkType: 1,
    router: '/sys/permission/resource',
    link: '',
    target: 'self',
    isHidden: false,
    status: 1
  },
  {
    _id: '67209df72394a4eca72b2c09',
    id: 664,
    name: {
      'zh-CN': '角色',
      'zh-HK': '角色',
      en: 'Role',
      ar: 'المهمة',
      ja: 'ロール',
      ko: '역할'
    },
    pid: 662,
    code: 'settings.permission.role',
    type: 1,
    path: '660-662-664',
    order: 2,
    linkType: 1,
    router: '/sys/permission/role',
    link: '',
    target: 'self',
    isHidden: false,
    status: 1
  },
  {
    _id: '67209e402394a4eca72b2c25',
    id: 666,
    name: {
      'zh-CN': '我的',
      'zh-HK': '我的',
      en: 'My',
      ar: 'من',
      ja: 'マイページ',
      ko: '내 정보'
    },
    pid: null,
    code: 'my',
    type: 1,
    path: '666',
    order: 2,
    linkType: null,
    router: '/404',
    link: null,
    icon: 'fit-center',
    iconType: 1,
    target: 1,
    isHidden: false,
    status: 1
  },
  {
    _id: '67209e4e2394a4eca72b2c2a',
    id: 667,
    name: {
      'zh-CN': '密码和身份认证',
      'zh-HK': '密碼和身份認證',
      en: 'Authentication',
      ar: 'التحقق من الهوية وكلمة المرور',
      ja: 'パスワードと認証',
      ko: '비밀번호 및 인증'
    },
    pid: 666,
    code: 'my.authentication',
    type: 1,
    path: '666-667',
    order: null,
    linkType: 1,
    router: '/my/authentication',
    link: '',
    target: 'self',
    isHidden: false,
    status: 1
  },
  {
    _id: '67209e562394a4eca72b2c2e',
    id: 668,
    name: {
      'zh-CN': '我的资料',
      'zh-HK': '我的資料',
      en: 'My Profile',
      ar: 'معلوماتي',
      ja: 'プロフィール',
      ko: '내 프로필'
    },
    pid: 666,
    code: 'my.profile',
    type: 1,
    path: '666-668',
    order: 2,
    linkType: 1,
    router: '/my/profile',
    link: '',
    icon: 'zoom-in',
    iconType: 1,
    target: 'self',
    isHidden: false,
    status: 1
  },
  {
    _id: '672891c7f48efae53bdc4e25',
    id: 672,
    name: {
      'zh-CN': 'Google',
      'zh-HK': 'Google',
      en: 'Google',
      ar: 'جوجل',
      ja: 'Google',
      ko: 'Google'
    },
    pid: null,
    code: 'google',
    type: 1,
    path: '672',
    order: 5,
    linkType: 1,
    router: '/test/google',
    link: 'https://baidu.com',
    icon: 'yZIFkU_1MB.svg',
    iconType: 2,
    target: 'self',
    isHidden: false,
    status: 1
  },
  {
    _id: '672898faf48efae53bdc4ef2',
    id: 673,
    name: {
      'zh-CN': 'Baidu',
      'zh-HK': '百度',
      en: 'Baidu',
      ar: 'بايدو',
      ja: 'バイドゥ',
      ko: '바이두'
    },
    pid: null,
    code: 'baidu',
    type: 1,
    path: '673',
    order: 6,
    linkType: 2,
    router: '',
    link: 'https://baidu.com',
    icon: 'theme-system',
    iconType: 1,
    target: '_blank',
    isHidden: false,
    status: 1
  }
]
const database = 'mpadmin'
use(database)

db.resources.deleteMany({})
db.resources.insertMany(data)
console.log(data.length)
db.counters.findAndModify({
  query: { _id: 'resourceid' },
  update: { $set: { seq: data.length } },
  new: true,
  upsert: true
})

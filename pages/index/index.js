Page({
  data: {
    brand: {
      en: 'HAPPY',
      main: 'PLAYTIME',
      cn: '欢乐时光主题乐园'
    },
    entries: [
      { label: '购票充值', icon: '票', className: 'entry-ticket' },
      { label: '预约到店', icon: '约', className: 'entry-booking' },
      { label: '活动表', icon: '表', className: 'entry-activity' },
      { label: '扫一扫', icon: '扫', className: 'entry-scan' }
    ],
    tabs: [
      { label: '首页', icon: 'home', active: true },
      { label: '商品', icon: 'shop', active: false },
      { label: '我的', icon: 'mine', active: false }
    ]
  }
})

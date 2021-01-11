const items = [
	{
		path: '/profile',
		icon: 'el-icon-user-solid',
		title: '首页',
		subs:null
	},
	{
		path: '',
		icon: 'el-icon-s-order',
		title: '订单管理',
		subs: [{
				path: '/ordercenter',
				icon: 'el-icon-s-platform',
				title: '订单中心',
//				subs: [{
//					path: '/orederCenter/smallOrder',
//					icon: 'el-icon-s-platform',
//					title: '小订单',
//				}]
			},
			{
				path: '/orderlist',
				icon: 'el-icon-s-data',
				title: '订单列表'
			}
		]
	},
	{
		path: '',
		icon: 'el-icon-s-check',
		title: '巡店管理',
		subs: [{
				path: '/checkcreate',
				icon: 'el-icon-s-ticket',
				title: '巡店创建'
			},
			{
				path: '/checklist',
				icon: 'el-icon-s-grid',
				title: '巡店列表'
			}
		]
	},
]
export default items;
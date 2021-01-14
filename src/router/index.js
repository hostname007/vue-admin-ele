import Vue from 'vue';
import Router from 'vue-router';
import profile from '@/components/common/profile.vue';
import home from '../pages/home.vue';
import Login from '../pages/Login.vue';
import ordercenter from '../pages/orderManager/ordercenter.vue';
import orderlist from '../pages/orderManager/orderlist.vue';
import checkcreate from '../pages/checkManager/checkcreate.vue';
import checklist from '../pages/checkManager/checklist.vue';
Vue.use(Router);

//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
let routes = [{
		path: '/login', //一集路由
		name: '登录页',
		component: Login,
		isshow: false,
		meta: [
			{title: '登录页'}
		],
		dropmenu: false
	},
	{
		path: '/',
		name: 'home',
		component: home,
		isshow: true,
		redirect: 'profile',
		children: [
			{
				path: 'profile',
				name: 'profile',
				icon: 'el-icon-s-data',
				component: profile,
				meta: [
				{title: '首页'}
				]
			},
			{
				icon: 'el-icon-s-platform',
				path: 'ordercenter',
				name: 'ordercenter',
				component: ordercenter,
				meta:[
				{
					title: '订单管理',
					required: true
				},
				{
					title: '订单中心',
					required: true
				}
				]
			},
			{
				icon: 'el-icon-s-promotion',
				path: 'orderlist',
				name: 'orderlist',
				component: orderlist,
				meta:[
				{
					title: '订单管理',
					required: true
				},
				{
					title: '订单列表',
					required: true
				}
				]
			},
			{
				icon: 'el-icon-s-grid',
				path: 'checkcreate',
				name: 'checkcreate',
				component: checkcreate,
				meta:[
				{
					title: '巡店管理'
				},
				{
					title: '巡店创建'
				}
				] 
			},
			{
				icon: 'el-icon-s-grid',
				path: 'checklist',
				name: 'checklist',
				component: checklist,
				meta:[
				{
					title: '巡店管理'
				},
				{
					title: '巡店列表'
				}
				] 
			}
		]
	}

]
var router = new Router({
	routes,
	mode: "history"
})
export default router;
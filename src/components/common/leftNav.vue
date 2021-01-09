<template>
	<div>
		<el-menu router :collapse="isCollapse" :default-active="$route.path" class="el-menu-vertical-demo" background-color="#394657" text-color="#fff" active-text-color="rgb(83, 199, 159)">
			<!--filterArr计算属性  已经过滤掉isshow为false的数据-->
			<template v-for="(item,index) in items">
				<!--有子集的-->
				<el-submenu v-if="item.subs" :index="index+''">
					<template slot="title">
						<i :class="item.icon"></i>
						<span slot="title">{{item.title}}</span>
					</template>
					<el-menu-item v-for="(item2,index) in item.subs" @click="addRouter(item2,item2.path)" :class="item2.path==$route.path?'is-active':''" :index="item2.path">
						<i :class="item2.icon"></i>
						<span slot="title">{{item2.title}}</span>
					</el-menu-item>
				</el-submenu>
				<el-menu-item v-else @click="addRouter(item,item.path)" :class="item.path==$route.path?'is-active':''" :index="item.path"><i :class="item.icon"></i>
					<span slot="title">{{item.title}}</span>
				</el-menu-item>
			</template>
		</el-menu>
	</div>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	export default({
		name: 'leftNav',
		data() {
			return {
				indexBreadcrumbs: [],
				items: [{
						path: '/profile',
						icon: 'el-icon-user-solid',
						title: '首页'
					},
					{
						path: '',
						icon: 'el-icon-s-order',
						title: '订单管理',
						subs: [{
								path: '/ordercenter',
								icon: 'el-icon-s-platform',
								title: '订单中心'
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
			}
		},
		methods: {
			addRouter(data, path) {
				let menuArr = this.$store.state.menuArr;
				const obj = Object.assign({}, data);
				obj.path = path;
				let _obj = {
					path: path,
					title: obj.title
				}
				let add = true;
				for(let i = 0; i < menuArr.length; i++) {
					if(menuArr[i].path == obj.path) {
						add = false;
					}
				}
				if(add) {
					this.$store.commit('add', _obj);
				}
				add = true;

			},
		},
		computed: {
			...mapState(['isCollapse']),
		},
		mounted() {}
	})
</script>

<style>
	.el-menu-vertical-demo:not(.el-menu--collapse) {
		width: 250px;
		height: 100%;
	}
	
	.item-nav a {
		color: white;
		text-decoration: none;
	}
	
	.single-menu {
		height: 40px;
		line-height: 40px;
		padding-left: 45px;
		color: #fff;
	}
	
	.leftNav {
		height: 100%;
		background: #394657;
	}
	
	.el-menu {
		border-right: none!important;
	}
</style>
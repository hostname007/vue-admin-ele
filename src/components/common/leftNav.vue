<template>
		<div>
			<div v-for="(item,index) in sideMenu">
				<el-submenu v-if="item.subs" :index="index+''">
					<template slot="title">
						<i :class="item.icon"></i>
						<span slot="title">{{item.title}}</span>
					</template>
					<leftNav :sideMenu="item.subs"></leftNav>
				</el-submenu>
				<el-menu-item v-else
					 @click="addRouter(item,item.path)"
					  :class="item.path==$route.path?'is-active':''" 
					  :index="item.path">
					<i :class="item.icon"></i>
					<span slot="title">{{item.title}}</span>
				</el-menu-item>
			</div>
		</div>
		
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	export default({
		name: 'leftNav',
		data() {
			return {
			}
		},
		props: ['sideMenu'],
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
		},
		mounted() {}
	})
</script>

<style>
	.el-menu >>> li{
		padding: 0!important;
	}
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
<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<!--很明显 首页 一定是存在的 所以这里直接写死-->
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<!--第二级菜单名称 就要看左侧组件有没有点击指定菜单，没有那就只显示首页 点击就显示当前菜单名称-->
			<el-breadcrumb-item :to="current.path" v-if="current">{{current.label}}</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>
<script>
	//js部分
	export default {
		computed: {
			//获取vuex数据的另一种写法
			...mapState({
				current: state => state.tab.currentMenu
			})
		}
	}
</script>

<style>

</style>
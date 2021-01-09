<template>
	<div class="breadDiv">
		<i :class="[
				isCollapse ? 'el-icon-s-unfold':'el-icon-s-fold','asideBtn']" @click="toggleCollapse"></i>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item v-if="$route.path!='/profile'" :to="{path: '/profile'}">首页</el-breadcrumb-item>
			<template v-for="(item, index) in $route.meta"  v-key="item.path">
				<el-breadcrumb-item>{{item.title}}</el-breadcrumb-item>
			</template>
		</el-breadcrumb>
	</div>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	export default({
		name: 'breadcrumb',
		data() {
			return {
				breadList: []
			}
		},
		methods: {
			...mapMutations(['toggleCollapse'])
		},
		computed: {
			...mapState(['isCollapse'])
		}
	})
</script>

<style scoped="scoped">
	.el-breadcrumb /deep/ .el-breadcrumb__inner {
		color: #ccc !important;
	}
	
	.el-breadcrumb {
		font-size: 16px;
	}
	
	.breadDiv {
		display: flex;
		align-items: center;
	}
	
	.el-breadcrumb__inner a,
	.el-breadcrumb__inner.is-link {
		color: red!important;
	}
	
	.asideBtn {
		font-size: 30px;
		margin: 0 5px;
		cursor: pointer;
	}
</style>
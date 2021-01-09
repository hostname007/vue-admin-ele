<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item v-for="item in levelList" :key="item.path">
				<router-link :to="item.redirect||item.path">{{item.name}}</router-link>
			</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script>
	export default({
		name: 'tab',
		data() {
			return {
				levelList: null
			}
		},
		methods: {
			getBreadcrumb() {
				let matched = this.$route.matched.filter(item => item.name)
				const first = matched[0]
				if(first && first.name !== '首页') {
					matched = [{
						path: '/home',
						meta: {
							title: '首页'
						}
					}].concat(matched)
				}
				this.levelList = matched;
			}
		},
		mounted() {
			this.getBreadcrumb();
		},
		watch: {
			$route(to, from) {
				console.log(to,from)
				this.getBreadcrumb();
			}
		}
	})
</script>

<style>

</style>
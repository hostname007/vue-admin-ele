<template>
	<div>
		<img :src="url" alt="" />
	</div>

</template>

<script>
	export default({
		name: 'profile',
		data() {
			return {
				url: require('@/assets/example.png')
			}
		},
		mounted() {
			console.log(this.$api);
			this.$api.user_api.getuser_static().then(res => {
					console.log(res);
				}).catch(res => {
					this.$message.error("出错")
				}),
				this.$api.user_api.getpage({
					status: 1
				}).then(res => {
					console.log(res);
				}),
				this.$api.user_api.senduser({
					name: 'txy'
				}).then(res => {
					console.log(res);
				})
		}
	})
</script>

<style>

</style>
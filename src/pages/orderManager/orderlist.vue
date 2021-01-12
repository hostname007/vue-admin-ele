<template>
	<div>订单列表</div>
</template>

<script>
	export default({
		name:'',
		data(){
			return {
				count:1
			}
		},
		created(){
		},
		mounted(){
			console.log(this.$api)
			this.$api.order_api.getorder({page:this.count}).then(res=>{
				console.log(res);
			}).catch(err=>{
				console.log(err);
			})
		}
	})
</script>

<style>
</style>
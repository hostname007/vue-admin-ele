<template>
	<div>
		<img :src="url" alt="" />
	</div>
	
</template>

<script>
	export default({
		name:'profile',
		data(){
			return {
			url:require('@/assets/example.png')
			}
		}
	})
</script>

<style>
</style>
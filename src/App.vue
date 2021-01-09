<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,html{
	padding: 0;
	margin: 0;
	width: 100%;
	height: 100%;
}
.container{
	width: 100%;
	height: 100%;
	box-sizing: border-box;
}
</style>

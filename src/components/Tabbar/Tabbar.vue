<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:'Tabbar'
	}
</script>

<style scoped>
	#tab-bar{
		font-size: 0.875rem;
		color: #9f9f9f;
		height: 49px;
		background-color: #f6f6f6;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		box-shadow: 0 -2px 1px rgba(100,100,100,0.2);
		z-index: 999;
	}
</style>

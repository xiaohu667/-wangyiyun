<template>
	<div id="tab-bar-item">
		<slot name="item-icon"></slot>
		<div>
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Tabbaritem'
	}
</script>

<style scoped>
	#tab-bar-item {
		flex: 1;
		text-align: center;
		height: 3.0625rem;
	}
	img{
		width: 1.25rem;
		height: 1.25rem;
		margin-top: 0.1875rem;
		margin-bottom: 0.125rem;
	}
</style>

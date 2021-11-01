<template>
	<div class="recommend-bgimg">
		<div class="box1">
			<span class="box1span">10</span>
			 <span>/16</span>
		</div>
		<div class="box2">
			<span>查看今日运势</span>
			<span>历史日推</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Recommendbgimg'
	}
</script>

<style scoped>
	.recommend-bgimg{
		height: 13.75rem;
		background-image: url(../../../assets/img/recommend/安河桥.jpg);
		background-repeat:no-repeat;
		background-size: cover;
		padding-top: 9.375rem;
		padding-left: 1.25rem;
		padding-right: 1.25rem;
	}
	.box1{
		color: white;
		font-size: 0.875rem;
		font-weight: 100;
		margin-bottom: 0.625rem;
	}
	.box1span{
		font-size: 1.125rem;
	}
	.box2{
		display: flex;
		justify-content: space-between;
		color: #dadada;
		font-size: 0.75rem;
	}
</style>

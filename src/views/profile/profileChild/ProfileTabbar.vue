<template>
	<div class="profile-tabbar">
		<div class="left">
			<img src="../../../assets/img/main/菜单.png" />
		</div>
		<div class="center"></div>
		<div class="right">
			<img src="../../../assets/img/profile/搜索.png" />
		</div>
	</div>
</template>

<script>
	export default{
		name:'ProfileTabbar'
	}
</script>

<style scoped>
	.profile-tabbar{
		display: flex;
		line-height: 2.75rem;
		/* text-align: center; */
		/* box-shadow: 0 1px 1px rgba(100,100,100,.2); */
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 999;
		padding: 0 0.3125rem;
		/* background-color: white; */
	}
	.center{
		flex: 1;
	}
	.right,.left{
		width: 1.87rem;
		text-align: center;
	}
	img{
		width: 1.25rem;
		height: 1.25rem;
		vertical-align: middle;
	}
</style>


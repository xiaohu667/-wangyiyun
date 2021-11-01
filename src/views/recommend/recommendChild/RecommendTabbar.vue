<template>
		<div class="topbar">
			<div class="left">
				<img src="../../../assets/img/recommend/返回2.png" @click="toback" />
			</div>
			<div class="center"></div>
			<div class="right">
				<img src="../../../assets/img/recommend/更多1.png" />
			</div>
		</div>
</template>

<script>
	import {EventBus} from '../../../network/eventbus.js'
	export default{
		name:'RecommendTabbar',
		methods:{
			toback(){
				this.$router.back()
				EventBus.$emit('animatetop',49)
			}
		}
	}
</script>

<style scoped>
	.topbar{
		display: flex;
		/* height: 2.75rem; */
		line-height: 2.75rem;
		text-align: center;
		/* box-shadow: 0 1px 1px rgba(100,100,100,.2); */
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 999;
		padding: 0 0.3125rem;
		/* background-color: #f3f3f3; */
	}
	.center{
		flex: 1;
	}
	.right,.left{
		width: 1.875rem;
	}
	.topbar img{
		width: 1.25rem;
		height: 1.25rem;
		vertical-align: middle
	}
</style>

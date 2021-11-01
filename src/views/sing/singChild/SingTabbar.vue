<template>
		<div class="topbar">
			<div class="left">
				<img src="../../../assets/img/among/返回.png" @click="back" />
			</div>
			<div class="center">
				<div class="topbox">{{$store.state.historysong[1]}}</div>
				<div class="bottombox">{{$store.state.historysong[2]}}</div>
			</div>
			<div class="right">
				<img src="../../../assets/img/among/更多1.png" />
			</div>
		</div>
</template>

<script>
	import {EventBus} from '../../../network/eventbus.js'
	export default{
		name:'SingTabbar',
		methods:{
			back(){
				this.$router.back(),
				EventBus.$emit('animatetop',0)
			}
		}
	}
</script>

<style scoped>
	.topbar{
		display: flex;
		/* height: 2.75rem; */
		text-align: center;
		box-shadow: 0 1px 1px rgba(100,100,100,.2);
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 999;
		padding: 0 0.3125rem;
		background-color: #afafaf;
	}
	.center{
		flex: 1;
		color: #e2e2e2;
	}
	.topbox{
		color: white;
		text-align: center;
		font-size: 0.75rem;
		font-weight: 700;
		margin-top: 0.5rem;
	}
	.bottombox{
		color: white;
		font-size: 0.75rem;
		text-align: center;
		margin-top: 0.125rem;
	}
	.right,.left{
		width: 1.875rem;
		line-height: 2.75rem;
	}
	.topbar img{
		width: 1.25rem;
		height: 1.25rem;
		vertical-align: middle
	}
</style>



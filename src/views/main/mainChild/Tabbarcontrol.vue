<template>
	<div class="tabbar-control">
		<div @click="torecommend">
			<div>
				<img src="../../../assets/img/main/rili.png" />
			</div>
			<span>每日推荐</span>
		</div>
		<div>
			<div>
				<img src="../../../assets/img/main/爱心.png" />
			</div>
			<span>私人FM</span>
		</div>
		<div>
			<div>
				<img src="../../../assets/img/main/shoucang.png" />
			</div>
			<span>歌单</span>
		</div>
		<div>
			<div>
				<img src="../../../assets/img/main/shezhi.png" />
			</div>
			<span>排行榜</span>
		</div>
	</div>
</template>

<script>
	import {EventBus} from '../../../network/eventbus.js'
	export default{
		name:'Tabbar',
		data() {
			return{
			}
		},
		methods:{
			torecommend(){
				this.$router.push('/recommend')
				EventBus.$emit('animatebottom',0)
			}
		}
	}
</script>

<style scoped>
	.tabbar-control{
		display: flex;
		padding-bottom: 0.625rem;
		border-bottom: 0.0625rem solid #d4d4d4;
	}
	.tabbar-control div{
		flex: 1;
		text-align: center;
		font-size: 0.75rem;
	}
	.tabbar-control img{
		width: 1.875rem;
		height: 1.875rem;
		margin-bottom: 0.3125rem;
	}
</style>

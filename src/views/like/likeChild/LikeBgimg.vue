<template>
	<div class="among-bgimg" v-if="$store.state.curridx[picidx]">
		<div class="left">
			<img :src="this.$store.state.curridx[picidx].coverImgUrl" />
		</div>
		<div class="right">
			<span class="top">{{$store.state.curridx[picidx].name}}</span> 
			<span class="center">让我们治愈彼此</span>
		  <span class="bottom">当初很多舍不得删掉的东西,最终...</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'LikeBgimg',
		props:{
			picidx:{
				type:Number,
				default(){
					return 0
				}
			}
		}
	}
</script>

<style scoped>
	.among-bgimg{
		height: 13.75rem;
		/* opacity: 0.4; */
		/* filter: blur(0.0625rem); */
		background-repeat:no-repeat;
		background-size: cover;
		padding-top: 4.375rem;
		padding-left: 0.625rem;
		padding-right: 0.625rem;
		display: flex;
		background-image: url(../../../assets/img/recommend/安河桥.jpg);
	}
	.left{
		flex: 1.5;
		/* margin-right: 0.625rem; */
	}
	.left img{
		width: 6.25rem;
		height: 6.25rem;
		border-radius: 0.625rem;
	}
	.right{
		flex: 2.5;
	}
	.right span{
		display: block;
	}
	.top{
		width: 11.71875rem;
		color: white;
		font-size: 0.875rem;
		margin-top: 0.3125rem;
		margin-bottom: 1.5625rem;
		white-space:nowrap;
		text-overflow: ellipsis; 
		overflow: hidden;
	}
	.center{
		color: #e1e1e1;
		font-size: 0.75rem;
		margin-bottom: 1.5625rem;
	}
	.bottom{
		color: #d1c4c4;
		font-size: 0.75rem;
	}
</style>

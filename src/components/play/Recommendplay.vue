<template>
	<div class="recommend-play">
		<img src="../../assets/img/recommend/播放.png" />
		<span class="span1">播放全部</span>
		<span class="span2">({{songscount}})</span>
	</div>
</template>

<script>
	export default{
		name:'Recommendplay',
		props:{
			songs:{
				type:Array,
				default(){
					return[]
				}
			}
		},
		computed:{
			songscount(){
				return this.songs.length
			}
		}
	}
</script>

<style scoped>
	.recommend-play{
		padding-left: 0.625rem;
		height: 2.75rem;
		/* margin-bottom: 0.375rem; */
	}
	.recommend-play img{
		width: 1.5625rem;
		height: 1.5625rem;
		vertical-align: middle;
		margin-right: 0.3125rem;
	}
	.recommend-play .span1{
		font-size: 0.875rem;
		color: #000000;
		line-height: 3.125rem;
		margin-right: 0.3125rem;
	}
	.recommend-play .span2{
		color: #cacaca;
		font-size: 0.75rem;
	}
</style>

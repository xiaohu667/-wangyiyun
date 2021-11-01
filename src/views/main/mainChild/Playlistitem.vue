<template>
	<div class="playlist-item">
		<div>
			<img :src="playlistitem.picUrl" />
		</div>
		<span>{{playlistitem.name}}</span>
	</div>
</template>

<script>
	export default{
		name:'Playlistitem',
		props:{
			playlistitem:{
				type:Object,
				default(){
					return{}
				}
			}
		}
	}
</script>

<style scoped>
	.playlist-item{
		width: 30%;
		height: 7.5rem;
		display: inline-block;
		vertical-align: top;
		/* margin-right: 0.59375rem; */
		
	}
	.playlist-item img{
		width: 100%;
		height: 100%;
		/* width: 5.625rem; */
		/* height: 5.625rem; */
		border-radius: 0.625rem;
	}
	.playlist-item span{
		letter-spacing: 0;
		overflow: hidden;
		display: -webkit-box;
		font-size: 0.75rem;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;  /*要显示的行数*/
		-webkit-box-orient: vertical;
	}
</style>

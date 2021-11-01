<template>
	<div class="search-songs-item" @click="playsong">
		<div class="left">
			<img src="../../../assets/img/search/搜索.png" />
		</div>
		<div class="right">
			<span class="songname">{{songmessage.name}}</span>
			<span class="peoname">{{songmessage.album.name}}</span>
		</div>
	</div>
</template>

<script>
	import {request} from '../../../network/request.js'
	import {EventBus} from '../../../network/eventbus.js'
	export default{
		name:'Searchsongsitem',
		data() {
			return{
				isshowre:true
			}
		},
		props:{
			songmessage:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		methods:{
			playsong(){
				this.isshowre = !this.isshowre
				request({
					url:'/song/url',
					params:{
						id:this.songmessage.id
					}
				}).then(res=>{
					if(!this.isshowre){
						this.$store.commit('addurla',res.data.data[0].url)
					};
					EventBus.$emit('changeisshow',!this.isshowre)
				})
				request({
					url:'/song/detail',
					params:{
						ids:this.songmessage.id
					}
				}).then(res=>{
					this.$store.commit('addsong',res.data.songs[0])
				})
			}
		}
	}
</script>

<style scoped>
	.search-songs-item{
		display: flex;
		height: 2.125rem;
	}
	.left{
		flex: 1;
		display: flex;
		height: 2.125rem;
		justify-content: center;
		align-items: center;
	}
	.left img{
		width: 0.875rem;
		height: 0.875rem;
	}
	.right{
		flex: 5;
		border-bottom: 0.0625rem solid #d3d3d3;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.right span{
		line-height: 2.125rem;
		font-size: 0.875rem;
	}
	.songname{
		color: #7d7d7d;
		margin-right: 0.1875rem;
	}
	.peoname{
		color: #000000;
	}
</style>

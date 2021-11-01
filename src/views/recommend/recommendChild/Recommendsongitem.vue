<template>
	<div class="recommend-songs-item">
		<div class="imgbox">
			<img :src="songs.al.picUrl" @click="imgclick" />
		</div>
		<div class="amongbox" v-show="this.ishow">
			<img src="../../../assets/img/recommend/排行榜歌曲.png" />
		</div>
		<div class="spanbox">
			<span class="top" :class="{active:this.ishow}">{{songs.name}}</span><br />
		  <span class="bottomnewname">{{songs.ar[0].name}}</span>
		  <span class="bottomoldname">{{songs.al.name}}</span>
		</div>
		<div class="morebox">
			<img src="../../../assets/img/main/mv播放.png" />
		</div>
	</div>
</template>

<script>
	import {EventBus} from '../../../network/eventbus.js'
	export default{
		name:'Recommendsongsitem',
		data() {
			return{
				isshowre:true
			}
		},
		props:{
			songs:{
				type:Object,
				default(){
					return{}
				}
			},
			idx:{
				type:Number,
				default(){
					return 0
				}
			},
			ishow:{
				type:Boolean,
				default(){
					return true
				}
			}
		},
		methods:{
			imgclick(){
				this.isshowre = !this.isshowre
				if(!this.isshowre){
					this.addnewsong()
				};
				EventBus.$emit('changeisshow',!this.isshowre)
				this.$emit('imgclk',this.idx)
			},
			addnewsong(){
			  this.$store.commit('addsong',this.songs)
				for(let item of this.$store.state.moresong){
					if(item[1] == this.songs.id){
						// console.log(item[0])
						this.$store.commit('addurla',item[0])
					}
				}
			}
		}
	}
</script>

<style scoped>
	.recommend-songs-item{
		padding: 0.3125rem 0.625rem;
		display: flex;
	}
	.imgbox{
		flex: 1;
	}
	.imgbox img{
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 0.3125rem;
	}
	.spanbox span{
		line-height: 1.375rem;
	}
	.spanbox{
		flex: 4;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space:nowrap;
	}
	.amongbox{
		flex: 0.5;
		padding-top: 0.625rem;
	}
	.amongbox img{
		width: 1.25rem%;
		height: 1.25rem;
		vertical-align: middle;
	}
	.morebox{
		flex: 1;
	}
	.top{
		font-size: 0.875rem;
		color: #000000;
	}
	.bottomnewname,.bottomoldname{
		font-size: 0.75rem;
		color: #a5a5a5;
	}
	.morebox{
		position: relative;
	}
	.morebox img{
		width: 1.25rem;
		height: 1.25rem;
		position: absolute;
		top: 0.5rem;
		right: 0.625rem;
	}
	.active{
		color: red;
	}
</style>

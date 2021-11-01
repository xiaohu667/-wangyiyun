<template>
	<div class="among-song-list-item" v-if="songmessage.name" @click="divclick">
		<div class="left">
			<span v-if="!ishow">{{songindex+1}}</span>
			<span v-else class="isshowimgelse">
				<img src="../../../assets/img/recommend/排行榜歌曲.png" />
			</span>
		</div>
		<div class="center">
			<span class="songname" :class="{active:ishow}">{{songmessage.name}}</span> <br />
			<span class="sq">SQ</span>
			<span class="peoname">{{songmessage.ar[0].name}}</span>
			<span class="mvname">- {{songmessage.al.name}}</span>
		</div>
		<div class="right">
			<img src="../../../assets/img/main/mv播放.png" />
		</div>
	</div>
</template>

<script>
	import {EventBus} from '../../../network/eventbus.js'
	export default{
		name:'Amongsonglistitem',
		data() {
			return{
				isshowre:true,
			}
		},
		props:{
			songmessage:{
				type:Object,
				default(){
					return{}
				}
			},
			songindex:{
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
			divclick(playload){
				this.isshowre = !this.isshowre
				if(!this.isshowre){
					this.addnewsong()
				};
				EventBus.$emit('changeisshow',!this.isshowre)
				this.$emit('idxclick',this.songindex)
			},
			addnewsong(){
			  this.$store.commit('addsong',this.songmessage)
				for(let item of this.$store.state.moresong){
					if(item[1] == this.songmessage.id){
						// console.log(item[0])
						this.$store.commit('addurla',item[0])
					}
				}
			}
		}
	}
</script>

<style scoped>
	.among-song-list-item{
		height: 2.25rem;
		width: 100%;
		display: flex;
		margin-bottom: 0.625rem;
	}
	.left,.right{
		width: 1.5625rem;
	}
	.center{
		flex: 1;
		line-height: 1.125rem;
		width: 14.375rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.left{
		line-height: 2.25rem;
		/* text-align: center; */
	}
	.isshowimgelse{
		display: flex;
		height: 2.25rem;
		justify-items: center;
		align-items: center;
	}
	.left img{
		width: 1.25rem;
		height: 1.25rem;
	}
	.right{
		display: flex;
		height: 2.25rem;
		align-items: center;
		justify-content: center;
	}
	.right img{
		width: 1.25rem;
		height: 1.25rem;
	}
	.songname{
		font-size: 0.875rem;
	}
	.sq{
		font-size: 0.75rem;
		color: red;
		border-radius: 0.125rem;
		border: 0.03125rem solid #ff557f;
		margin-right: 0.1875rem;
	}
	.peoname,.mvname{
		color: #A2A2A2;
		font-size: 0.75rem;
	}
	.active{
		color: red;
	}
</style>

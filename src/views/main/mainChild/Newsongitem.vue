<template>
	<div class="newsong-item">
		<img :src="newsong.picUrl" class="itemimg" />
		<img v-if="isshow1" class="showimg" src="../../../assets/img/main/bai播放.png" @click="change" />
		<img v-else class="showimg" src="../../../assets/img/main/bai暂停.png" @click="change" />
		<span class="songname">{{newsong.name}}</span>
		<span class="peopelname">--{{newsong.song.artists[0].name}}</span>
	  <img src="../../../assets/img/main/mv播放.png" class="mv" />
	</div>
</template>

<script>
	import {EventBus} from '../../../network/eventbus.js'
	import {request} from '../../../network/request.js'
	export default{
		name:'Newsongitem',
		data(){
			return{
				isshow1:true
			}
		},
		methods:{
			change(){
				this.isshow1 = !this.isshow1
				if(!this.isshow1){
					this.addnewsong()
				};
				EventBus.$emit('changeisshow',!this.isshow1)
			},
			addnewsong(){
			  this.$store.commit('addsong',this.newsong)
				for(let item of this.$store.state.moresong){
					if(item[1] == this.newsong.id){
						// console.log(item[0])
						this.$store.commit('addurla',item[0])
					}
				}
			}
		},
		props:{
			newsong:{
				type:Object,
				default(){
					return{}
				}
			}
		}
	}
</script>

<style scoped>
	.newsong-item{
		margin-bottom: 0.625rem;
		padding-bottom: 0.3125rem;
		border-bottom: 0.0625rem solid #d8d8d8;
		position: relative;
	}
	.itemimg{
		width: 3.125rem;
		height: 3.125rem;
		vertical-align: middle;
		margin-right: 0.625rem;
	}
	.songname{
		font-size: 0.875rem;
		margin-right: 0.3125rem;
	}
	.peopelname{
		font-size: 0.75rem;
	}
	.showimg{
		position: absolute;
		top: 1.0625rem;
		left: 1.0625rem;
		z-index: 999;
		width: 1.125rem;
		height: 1.125rem;
	}
	.mv{
		position: absolute;
		width: 1.25rem;
		height: 1.25rem;
		right: 0.625rem;
		top: 0.875rem;
	}
</style>

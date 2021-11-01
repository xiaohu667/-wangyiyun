<template>
	<div class="recommend-playlist">
		<div class="top">
			<span class="recommend">{{title[0]}}</span>
			<span class="more">{{title[1]}}></span>
		</div>
		<div class="bottom">
			<Playlistitem v-for="(item,index) in playlist" :playlistitem="item" class="playlist" :key="index" @click.native="playlistitemclick(index)"></Playlistitem>
		</div>
	</div>
</template>

<script>
	import {EventBus} from '../../../network/eventbus.js'
	import Playlistitem from './Playlistitem.vue'
	export default{
		name:'Reconmendplaylist',
		components:{
			Playlistitem
		},
		props:{
			playlist:{
				type:Array,
				default(){
					return[]
				}
			},
			title:{
				type:Array,
				default(){
					return[]
				}
			}
		},
		methods:{
			playlistitemclick(index){
				this.$router.push('/among/' + index)
				EventBus.$emit('animatebottom',0)
			}
		}
	}
</script>

<style scoped>
	.recommend-playlist{
		width: 100%;
		padding: 0.625rem 0.9375rem;
	}
	.top{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-bottom: 0.3125rem;
	}
	.recommend{
		font-size: 0.875rem;
		font-weight: 700;
	}
	.more{
		font-size: 0.75rem;
		padding: 0.125rem 0.3125rem;
		border: 0.0625rem solid #bebebe;
		border-radius: 0.625rem;
	}
	.bottom{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
</style>

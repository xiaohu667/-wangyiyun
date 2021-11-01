<template>
	<div class="recommend-newsong">
		<div class="top">
			<span class="recommend">{{title[0]}}</span>
			<span class="more">{{title[1]}}></span>
		</div>
		<div class="bottom">
			<Newsongitem v-for="(item,index) in newsonglist" :newsong="item" :key="index" @caiwei="caiwei"></Newsongitem>
		</div>
	</div>
</template>

<script>
	import {request} from '../../../network/request.js'
	import Newsongitem from './Newsongitem.vue'
	export default{
		name:'Recommendnewsong',
		components:{
			Newsongitem
		},
		props:{
			newsonglist:{
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
			caiwei(){
			}
		}
	}
</script>

<style scoped>
	.recommend-newsong{
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
</style>

<template>
	<div class="search-record">
		<div class="top">
			<span class="left">搜索记录</span>
			<span class="right" @click="cleanrecord">
				<img src="../../../assets/img/search/删除.png" />
			</span>
		</div>
		<div class="bottom">
			<div class="his">历史</div>
			<div v-for="(item,index) in $store.state.record" @click="addinputmessage(item)" class="box">{{item}}</div>
		</div>
		<div class="recommendrecord">
			<span class="re">推荐搜索:</span>
			<span v-for="(item,index) in songarr" :key="index" @click="addinputmessage(item)">{{item}}</span>
		</div>
	</div>
</template>

<script>
	import {EventBus} from '../../../network/eventbus.js'
	export default{
		name:'Searchrecord',
		data() {
			return{
				songarr:[
					'一起去看夕阳',
					'还是分开',
					'执迷不悟',
					'晚风'
				]
			}
		},
		methods:{
			cleanrecord(){
				this.$store.state.record = []
			},
			addinputmessage(playload){
				EventBus.$emit('changeinput',playload)
			}
		}
	}
</script>

<style scoped>
	.search-record{
		padding: 0.625rem 0.625rem;
		/* height: 6.25rem; */
	}
	.top{
		height: 1rem;
	}
	.top img{
		width: 0.875rem;
		height: 0.875rem;
	}
	.top span{
		color: #000000;
		font-size: 0.875rem;
		font-weight: 600;
		justify-content: space-between;
	}
	.bottom{
		padding-top: 0.625rem;
	}
	.his{
		color: #b8b8b8;
		font-size: 0.875rem;
		font-weight: 400;
		margin-right: 0.3125rem;
		display: inline-block;
		margin-bottom: 0.9375rem;
		margin-right: 1.5625rem;
	}
	.bottom .box{
		display: inline-block;
		padding: 0.3125rem 0.625rem;
		background-color: #f4f4f4;
		color: #000000;
		font-weight: 500;
		font-size: 0.75rem;
		border-radius: 0.625rem;
		margin-right: 0.625rem;
		margin-bottom: 0.3125rem;
	}
	.recommendrecord span{
		font-size: 0.75rem;
		margin-right: 0.3125rem;
		color: #6765b4;
	}
	.recommendrecord .re{
		color: #b8b8b8;
	}
</style>

<template>
	<div class="search-songers">
		<div class="top">
			<span class="leftspan">热搜榜</span>
			<span class="centerspan1">视频榜</span>
			<span class="centerspan">博客榜</span>
			<span class="rightspan">
				<span>播放</span>
			</span>
		</div>
		<div class="bottom">
			<Searchsongeritem v-for="(item,index) in songer" :key="index" :songer="item" :songidx="index" v-show="index<idxnum"></Searchsongeritem>
			<div class="cli" @click="more" v-show="isshow">
				<span>展开更多</span>
				<img src="../../../assets/img/search/向下.png" />
			</div>
		</div>
	</div>
</template>

<script>
	import Searchsongeritem from './Searchsongeritem.vue'
	export default{
		name:'Searchsongers',
		data() {
			return{
				idxnum:10,
				isshow:true
			}
		},
		components:{
			Searchsongeritem
		},
		props:{
			songer:{
				type:Array,
				default(){
					return[]
				}
			}
		},
		methods:{
			more(){
				this.idxnum = 20
				this.isshow = false
			}
		}
	}
</script>

<style scoped>
	.search-songers{
		padding: 0.3125rem 0.625rem;
	}
	.search-songers span{
		color: #A2A2A2;
		font-size: 0.875rem;
	}
	.search-songers .leftspan{
		color: #000000;
	}
	.centerspan1,.leftspan{
		margin-right: 1.25rem;
	}
	.centerspan{
		margin-right: 5.9375rem;
	}
	.search-songers .rightspan span{
		font-size: 0.75rem;
		line-height: 1.15rem;
	}
	.rightspan{
		padding: 0 0.3125rem;
		border: 0.0625rem solid #d5d5d5;
		border-radius: 0.625rem;
	}
	.top{
		margin-bottom: 0.625rem;
	}
	.bottom{
		padding: 0.9375rem 0.9375rem 0.3125rem 0.9375rem;
		/* height: 6.25rem; */
		border: 0.0625rem solid #e2e2e2;
		border-radius: 0.625rem;
		box-shadow: 0.0625rem 0.0625rem 0.0625rem #eaeaea;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		font-size: 0.875rem;
	}
	.cli{
		width: 100%;
		text-align: center;
	}
	.cli img{
		width: 1.25rem;
		height: 1.25rem;
		vertical-align: middle;
	}
</style>

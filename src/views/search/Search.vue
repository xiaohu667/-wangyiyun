<template>
	<div class="search">
		<SearchTabbar @spanload="spanload"></SearchTabbar>
		<Scroll class="content" ref="scroll">
			<Searchsongs v-if="isshow"></Searchsongs>
			<div v-else>
				<Searchrecord></Searchrecord>
			  <Searchsongers :songer="songer"></Searchsongers>
			</div>
		</Scroll>
	</div>
</template>

<script>
	import SearchTabbar from './searchChild/SearchTabbar.vue'
	import Searchsongs from './searchChild/Searchsongs.vue'
	import Searchrecord from './searchChild/Searchrecord.vue'
	import Scroll from '../../components/scroll/Scroll.vue'
	import {request} from '../../network/request.js'
	import Searchsongers from './searchChild/Searchsongers.vue'
	export default{
		name:'Search',
		components:{
			SearchTabbar,
			Searchsongs,
			Searchrecord,
			Scroll,
			Searchsongers
		},
		data() {
			return{
				isshow:false,
				songer:[]
			}
		},
		methods:{
			spanload(playload){
				this.$refs.scroll.scroll.refresh()
				this.isshow = playload
			}
		},
		created(){
			request({
				url:'/toplist/artist',
				limit:20,
				cookie:this.$store.state.cookies[0].cookie
			}).then(res=>{
				// console.log(res)
				for(let item in res.data.list.artists){
					if(item<20){
						this.songer.push(res.data.list.artists[item])
					}
				}
			})
		}
	}
</script>

<style scoped>
	.search{
		padding-top: 2.75rem;
	}
	.content{
		height: calc(100vh - 88px);
	}
</style>

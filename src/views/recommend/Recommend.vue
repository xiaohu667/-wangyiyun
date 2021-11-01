<template>
	<div class="recommend">
		<RecommendTabbar></RecommendTabbar>
		<Recommendplay :songs="dailySong" class="replay" v-show="isshowplay"></Recommendplay>
		<Scroll class="content" @scrollcontent="scrollcontent">
			<Recommendbgimg></Recommendbgimg>
		  <Recommendplay :songs="dailySong" ref="recommendplay"></Recommendplay>
		  <Recommendsongs :messagesongs="dailySong"></Recommendsongs>
		</Scroll>
	</div>
</template>

<script>
	import {request} from '../../network/request.js'
	import RecommendTabbar from './recommendChild/RecommendTabbar.vue'
	import Recommendbgimg from './recommendChild/Recommendbgimg.vue'
	import Recommendplay from '../../components/play/Recommendplay.vue'
	import Recommendsongs from './recommendChild/Recommendsongs.vue'
	import Scroll from '../../components/scroll/Scroll.vue'
	export default{
		name:'Recommend',
		data() {
			return{
				dailySong:[],
				isshowplay:false
			}
		},
		components:{
			RecommendTabbar,
			Recommendbgimg,
			Recommendplay,
			Recommendsongs,
			Scroll
		},
		methods:{
			scrollcontent(position){
				if(-position.y >= this.$refs.recommendplay.$el.offsetTop){
					this.isshowplay = true
				}else{
					this.isshowplay = false
				}
			}
		},
		created() {
			this.dailySong = this.$store.state.recommendsong[0]
		}
	}
</script>

<style scoped>
	.content{
		height: calc(100vh - 44px);
	}
	.replay{
		position: absolute;
		z-index: 999;
		background-color: white;
		width: 100%;
	}
</style>

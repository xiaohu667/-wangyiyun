<template>
	<div class="among">
		<AmongTabbar :centreshow="!playshow"></AmongTabbar>
		<Recommendplay :songs="songlength" class="falseplay" v-show="playshow"></Recommendplay>
		<Scroll class="content" @scrollcontent="scrollcontent">
			<Amongbgimg :picidx="$route.params.index"></Amongbgimg>
		  <Recommendplay :songs="songlength" ref="replay"></Recommendplay>
		  <Amongsonglist :songs="songmessage"></Amongsonglist>
		</Scroll>
	</div>
</template>

<script>
	import AmongTabbar from './amongChild/AmongTabbar.vue'
	import Amongbgimg from './amongChild/Amongbgimg.vue'
	import {request,songdetail,recommendsongurl} from '../../network/request.js'
	import Recommendplay from '../../components/play/Recommendplay.vue'
	import Amongsonglist from './amongChild/Amongsonglist.vue'
	import Scroll from '../../components/scroll/Scroll.vue'
	export default{
		name:'Among',
		data() {
		 return{
			 idx:this.$route.params.index,
			 songlength:[],
			 songmessage:[],
			 playshow:false
		 }
		},
		components:{
			AmongTabbar,
			Amongbgimg,
			Recommendplay,
			Amongsonglist,
			Scroll
		},
		methods:{
			scrollcontent(position){
				if(-position.y >= this.$refs.replay.$el.offsetTop){
					this.playshow = true
				}else{
					this.playshow = false
				}
			},
			getid(data){
				let song_id = ''
				for(let i=0; i<data.length; i++){
					if(i > (data.length-2)){
						song_id += data[i].id
					}else{
						song_id += data[i].id +','
					}
				}
				return song_id
			}
		},
		created() {
			request({
				url:'/playlist/detail',
				params:{
					id:this.$store.state.repic[0][this.idx].id,
					cookie:this.$store.state.cookies[0].cookie
				}
			}).then(res=>{
				this.songlength = res.data.privileges
				this.songmessage = res.data.privileges
				let cookie = this.$store.state.cookies[0].cookie
				let url = this.getid(this.songmessage)
				songdetail(url,cookie).then(res=>{
					this.songmessage = res.data.songs
				})
				recommendsongurl(url,cookie).then(res=>{
					this.$store.commit('addmoresong',res.data.data)
				})
			})
		}
	}
</script>

<style scoped>
	.content{
		height: calc(100vh - 44px);
	}
	.falseplay{
		position: absolute;
		z-index: 999;
		width: 100%;
		background-color: white;
	}
</style>

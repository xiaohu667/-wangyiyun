<template>
	<div class="like">
		<Recommendplay :songs="songmessage" class="falseplay" v-show="playshow"></Recommendplay>
		<Scroll class="content"  @scrollcontent="scrollcontent">
			<LikeBgimg :picidx="$route.params.index-6"></LikeBgimg>
		  <Recommendplay :songs="songmessage"  ref="replay"></Recommendplay>
		  <Amongsonglist :songs="songmessage"></Amongsonglist>
		</Scroll>
		
	</div>
</template>

<script>
	import {request,usersongdetail,usersongurl} from '../../network/request.js'
	import LikeBgimg from './likeChild/LikeBgimg.vue'
	import Recommendplay from '../../components/play/Recommendplay.vue'
	import Amongsonglist from '../among/amongChild/Amongsonglist.vue'
	import Scroll from '../../components/scroll/Scroll.vue'
	export default{
		name:'Like',
		components:{
			LikeBgimg,
			Recommendplay,
			Amongsonglist,
			Scroll
		},
		data() {
			return{
				song_id:'',
				songmessage:[],
				playshow:false
			}
		},
		methods:{
			getid(data){
				for(let i=0; i<data.length; i++){
					if(i > (data.length-2)){
						this.song_id += data[i].id
					}else{
						this.song_id += data[i].id +','
					}
				}
			},
			scrollcontent(position){
				if(-position.y >= this.$refs.replay.$el.offsetTop){
					this.playshow = true
				}else{
					this.playshow = false
				}
			}
		},
		created() {
			request({
				url:'/playlist/detail',
				params:{
					id:this.$store.state.curridx[this.$route.params.index-6].id,
					cookie:this.$store.state.cookies[0].cookie
				}
			}).then(res=>{
				this.getid(res.data.privileges)
				usersongdetail(this.song_id,this.$store.state.cookies[0].cookie).then(res=>{
					this.songmessage = res.data.songs
				})
				usersongurl(this.song_id,this.$store.state.cookies[0].cookie).then(res=>{
					this.$store.commit('addmoresong',res.data.data)
				})
			})
		}
	}
</script>

<style scoped>
	.content{
		height: calc(100vh - 93px);
	}
	.falseplay{
		position: absolute;
		z-index: 999;
		width: 100%;
		background-color: white;
	}
</style>

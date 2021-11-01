<template>
	<div class="sing">
		<SingTabbar></SingTabbar>
		<Singvolume></Singvolume>
		<Scroll class="content">
			<Songtxt :lyric="datarr"></Songtxt>
		</Scroll>
		<Songcontrol :songtime="datarr"></Songcontrol>
	</div>
</template>

<script>
	import SingTabbar from './singChild/SingTabbar.vue'
	import Singvolume from './singChild/Singvolume.vue'
	import {request} from '../../network/request.js'
	import Songtxt from './singChild/Songtxt.vue'
	import Songcontrol from './singChild/Songcontrol.vue'
	import Scroll from '../../components/scroll/Scroll.vue'
	export default{
		name:'Sing',
		data() {
			return{
				datarr:[]
			}
		},
		components:{
			SingTabbar,
			Singvolume,
			Songtxt,
			Songcontrol,
			Scroll
		},
		created(){
			request({
				url:'/lyric',
				params:{
					id:this.$store.state.historysong[3],
					cookie:this.$store.state.cookies[0].cookie
				}
			}).then(res=>{
				let reg = /\[(\d{2}):(\d{2}).(\d{2,3})\].*/g 
				let songTxt = res.data.lrc.lyric.match(reg)
				for(let i=0; i<songTxt.length; i++){
					let singleTxt = songTxt[i].substr(1).split(']')
					let timestr = singleTxt[0]
					let f = timestr[0] == 0 ? timestr[1] : 0
					let m = timestr[3] == 0 ? timestr[4] : timestr.substr(3,2)
					let hm = timestr[6] == 0 ? timestr[7] : timestr.substr(6,2)
					let wordtime = parseInt(f)*60 + parseInt(m)
					this.datarr.push({
						time:wordtime,
						txt:singleTxt[1],
						fz:f,
						mz:m
					})
					this.$store.commit('addfm',{
						fz:f,
						mz:m
					})
				}
			})
		}
	}
</script>

<style scoped>
	.sing{
		padding-top: 5.5rem;
		/* padding-bottom: 5rem; */
		height: 100%;
		background: linear-gradient(to bottom,#afafaf,#b8b8b8);
	}
	.content{
		height: calc(100vh - 168px);
	}
</style>

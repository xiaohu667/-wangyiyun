<template>
  <div id="app">
		<keep-alive exclude="Among,Sing,Like">
			<router-view></router-view>
		</keep-alive>
		<MainTabBar v-if="$route.meta.showTabbar"></MainTabBar>
		<PlayTabbar :controltimer="control" ref="playtabbar" @changeclick="changeclick"></PlayTabbar>
		<div class="audio1">
			<audio ref="audio3" :src="$store.state.songurl[0]" preload="auto" class="audio2" @timeupdate="timeupdata"></audio>
		</div>
  </div>
</template>

<script>
	import {EventBus} from './network/eventbus.js'
	import MainTabBar from './components/mainTabbar/MainTabBar.vue'
	import PlayTabbar from './components/playTabbar/PlayTabbar.vue'
	export default{
		name:'App.vue',
		data() {
			return{
				control:false
			}
		},
		components:{
			MainTabBar,
			PlayTabbar
		},
		methods:{
			changeclick(isshow){
				let audio = this.$refs.audio3
				setTimeout(()=>{
					if(!isshow){
						audio.play()
					}else{
						audio.pause()
					}
				})
				audio.addEventListener('ended',(isshow)=>{
					this.$refs.playtabbar.isshow = true
					this.control = !this.control
				})
			 },
			 timeupdata(){
				 let audio = this.$refs.audio3
				 this.$store.commit('addduration',audio.duration.toFixed(0))
			 }
		},
		computed:{
			urlchange(){
				return this.$store.state.songurl[0]
			}
		},
		mounted(){
			let audio = this.$refs.audio3
			EventBus.$on('getime',()=>{
				this.$store.commit('addcurrentTime',audio.currentTime)
			})
		}
	}
</script>

<style>
	@import url("./assets/css/base.css");
	.audio1{
		position: absolute;
		top: 6.25rem;
		/* z-index: 999; */
	}
</style>

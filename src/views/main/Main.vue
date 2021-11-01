<template>
	<div class="main">
		<Mainheader></Mainheader>
		<Scroll class="content">
			<Swiper v-if="bannerlist.length">
			  <swiper-slide slot="img1" v-for="(item,index) in bannerlist" :key="index">
				  <img :src="item.imageUrl" />
				</swiper-slide>
		  </Swiper>                                                                                                                                                                                                                                                                                                                                                                                                                                     
			<Tabbar></Tabbar>
			<Reconmendplaylist :playlist="playlist" :title="['推荐歌单','更多']"></Reconmendplaylist>
			<Recommendnewsong :newsonglist="newsonglist" :title="['推荐音乐','播放']"></Recommendnewsong>
		</Scroll>
		<Mainpic></Mainpic>
	</div>
</template>

<script>
	import Mainheader from './mainChild/Mainheader.vue'
	import Swiper from '../../components/swiper/Swiper.vue'
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	import {request,qingqiu,banner,playlist,personalizednewsong,recommendsongs,recommendsongurl} from '../../network/request.js'
	import axios from 'axios'
	import Tabbar from './mainChild/Tabbarcontrol.vue'
	import Reconmendplaylist from'./mainChild/Recommendplaylist.vue'
	import Recommendnewsong from './mainChild/Recommendnewsong.vue'
	import Scroll from '../../components/scroll/Scroll.vue'
	import Mainpic from './mainChild/Mainpic.vue'
 	export default{
		name:'Main',
		components:{
			Mainheader,
			Swiper,
			swiperSlide,
			Tabbar,
			Reconmendplaylist,
			Recommendnewsong,
			Scroll,
			Mainpic
		},
		data(){
			return{
				bannerlist:[],
				playlist:[],
				newsonglist:[]
			}
		},
		methods:{
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
			//请求用户cookie useid
			qingqiu().then(res=>{
				this.$store.commit('addcookies',{
					uid:res.data.account.id,
					cookie:res.data.cookie
				})
				//请求轮播图
				banner().then(res=>{
					this.bannerlist = res.data.banners
				})
				let cookie = this.$store.state.cookies[0].cookie
				//请求推荐歌单
				playlist(cookie).then(res=>{
					this.playlist = res.data.result
					this.$store.commit('addrepic',res.data.result)
				})
				//请求推荐音乐
				personalizednewsong(cookie).then(res=>{
					this.newsonglist = res.data.result
					this.$store.commit('addsong',res.data.result[0])
				})
				//请求每日推荐歌曲
				recommendsongs(cookie).then(res=>{
					this.$store.commit('addrecommendsong',res.data.data.dailySongs)
					//请求音乐id
					let url = this.getid(this.$store.state.recommendsong[0])+','+this.getid(this.newsonglist)
						recommendsongurl(url,cookie).then(res=>{
							this.$store.commit('addurla',res.data.data[0].url)
							this.$store.commit('addmoresong',res.data.data)
						})
				})
			})
		}
	}
</script>

<style scoped>
	.main{
		/* height: 100vh; */
		padding-top: 2.75rem;
		background-color: #f3f3f3;
	}
	.content{
		height: calc(100vh - 137px);
	}
</style>

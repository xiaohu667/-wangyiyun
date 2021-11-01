<template>
	<div class="profile">
		<ProfileTabbar></ProfileTabbar>
		<profileUser :usermessage="usermessage"></profileUser>
		<ProfileLike @click.native="changerouter(index)" :likesonglength="likesongslength">
			<img class="bigpic" slot="img1" src="../../assets/img/recommend/安河桥.jpg" />
			<img class="smallpic" slot="img2" src="../../assets/img/profile/爱心.png" />
			<span class="bigfont" slot="span1">我喜欢的音乐</span>
			<span slot="span2">心动模式</span>
		</ProfileLike>
		<ProfileAmong></ProfileAmong>
		<ProfileSong :userplaylist="userplaylist"></ProfileSong>
	</div>
</template>

<script>
	import {request} from '../../network/request.js'
	import ProfileTabbar from './profileChild/ProfileTabbar.vue'
	import profileUser from './profileChild/ProfileUser.vue'
	import ProfileLike from './profileChild/ProfileLike.vue'
	import ProfileAmong from './profileChild/ProfileAmong.vue'
	import {userplaylist} from '../../network/request.js'
	import ProfileSong from './profileChild/ProfileSong.vue'
	export default{
		name:'Profile',
		components:{
			ProfileTabbar,
			profileUser,
			ProfileLike,
			ProfileAmong,
			ProfileSong
		},
		data() {
			return{
				usermessage:[],
				likesongslength:0,
				userplaylist:[],
				useridlist:[],
				index:6
			}	
		},
		methods:{
			changerouter(index){
				this.$router.push('/like/'+index)
			}
		},
		created() {
			request({
				url:'/user/detail',
				params:{
					uid:this.$store.state.cookies[0].uid,
					cookie:this.$store.state.cookies[0].cookie
				}
			}).then(res=>{
				// console.log(res)
				this.usermessage.push({
					level:res.data.level,
					nickname:res.data.profile.nickname,
					avatarUrl:res.data.profile.avatarUrl
				})
			})
			request({
				url:'/likelist',
				params:{
					uid:this.$store.state.cookies[0].uid,
					cookie:this.$store.state.cookies[0].cookie
				}
			}).then(res=>{
				this.useridlist = res.data.ids
				this.likesongslength = res.data.ids.length
			})
			const usermessage = this.$store.state.cookies[0]
			userplaylist(usermessage.uid,usermessage.cookie).then(res=>{
				this.userplaylist.push(res.data.playlist)
				this.$store.commit('addcurridx',res.data.playlist)
			})
		}
	}
</script>

<style scoped>
	.profile{
		height: 100vh;
		padding-top: 2.75rem;
		padding-left: 0.625rem;
		padding-right: 0.625rem;
		background: linear-gradient(to bottom,#eeeeee,#ebebeb);
	}
</style>

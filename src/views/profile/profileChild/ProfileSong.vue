<template>
	<div class="profile-song" v-if="userplaylist[0]">
		<div class="top">
			<span>创建歌单({{userplaylist[0].length - 1}})</span>
			<img src="../../../assets/img/profile/加号1.png" />
		</div>
		<div class="bottom">
			<ProfileLike v-for="(item,index) in userplaylist[0]" v-if="index>0" :likesonglength="item.trackCount" :key="index" @click.native="changerouter(index+6)">
				<img class="bigpic" slot="img1" :src="item.coverImgUrl" />
				<span slot="span1">{{item.name}}</span>
				<span slot="span2">我的歌单</span>
			</ProfileLike>
		</div>
	</div>
</template>

<script>
	import ProfileLike from './ProfileLike.vue'
	export default{
		name:'ProfileSong',
		components:{
			ProfileLike
		},
		props:{
			userplaylist:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
			changerouter(index){
				this.$router.push('/like/'+index)
			}
		}
	}
</script>

<style scoped>
	.profile-song{
		padding: 0.625rem 0.625rem;
		background-color: #f1f1f1;
		border-radius: 0.625rem;
	}
	.top{
		display: flex;
		justify-content: space-between;
	}
	.top span{
		color: #9F9F9F;
		font-size: 0.75rem;
	}
	.top img{
		width: 1.25rem;
		height: 1.25rem;
		vertical-align: middle;
	}
</style>

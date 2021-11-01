<template>
	<div class="profile-among">
		<div v-for="(item,index) in amonglist" :key="index" @click="changebottom(index)" :class="{active:currentindex == index}">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'ProfileAmong',
		data() {
			return{
				amonglist:['创建歌单','收藏歌单','歌单助手'],
				currentindex:0
			}
		},
		methods:{
			changebottom(index){
				this.currentindex = index
			}
		}
	}
</script>

<style scoped>
	.profile-among{
		display: flex;
		height: 2.75rem;
	}
	.profile-among div{
		flex: 1;
		line-height: 2.75rem;
		text-align: center;
		font-size: 0.875rem;
		color: #a1a1a1;
	}
	.profile-among div.active{
		color: #dd233f;
	}
</style>

<template>
	<div class="profile-user" v-if="usermessage[0]">
		<img :src="usermessage[0].avatarUrl" />
		<span class="nickname">{{usermessage[0].nickname}}</span>
		<span class="level">LV:{{usermessage[0].level}}</span>
		<span>></span>
	</div>
</template>

<script>
	export default{
		name:'profileUser',
		props:{
			usermessage:{
				type:Array,
				default(){
					return[]
				}
			}
		}
	}
</script>

<style scoped>
	.profile-user{
		height: 2.75rem;
	}
	.profile-user img{
		width: 2.5rem;
		height: 2.5rem;
/* 		margin-left: 0.9375rem; */
		border-radius: 50%;
		border: 0.125rem solid #ffffff;
		margin-right: 0.625rem;
		vertical-align: middle;
	}
	.profile-user span{
		line-height: 1.375rem;
	}
	.profile-user .nickname{
		color: #000000;
		font-size: 0.875rem;
		margin-right: 0.625rem;
	}
	.profile-user .level{
		color: #747474;
		font-size: 0.75rem;
		font-style: oblique;
		font-weight: 700;
		margin-right: 5.625rem;
	}
</style>

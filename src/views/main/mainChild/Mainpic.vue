<template>
	<div class="main-pic" v-show="isshow">
		<img src="../../../assets/img/sing/网易云.jpeg" />
	</div>
</template>

<script>
	export default{
		name:'Mainpic',
		data(){
			return{
				isshow:true
			}
		},
		created(){
			setTimeout(()=>{
				this.isshow = false
			},3000)
		}
	}
</script>

<style scoped>
	.main-pic{
		width: 100%;
		height: 100vh;
		z-index: 9999;
		position: absolute;
		top: 0;
		left: 0;
	}
	.main-pic img{
		width: 100%;
		height: 100vh;
	}
</style>

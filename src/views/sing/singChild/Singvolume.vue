<template>
	<div class="sing-volume">
		<div class="left">
			<img src="../../../assets/img/sing/喇叭.png" />
		</div>
		<div class="center">
			<div class="content"  @click="move($event)">
				<div class="rate" ref="rate"></div>
			</div>
			<div class="positionbox" ref="positionbox"></div>
		</div>
		<div class="right">
			<img src="../../../assets/img/sing/电视1.png" />
		</div>
	</div>
</template>

<script>
	export default{
		name:'Singvolume',
		methods:{
			move(event){
				// console.log(event.clientX-30)
				this.$refs.rate.style.width = (event.clientX-30) + 'px'
				this.$refs.positionbox.style.left = (event.clientX-30) + 'px'
			}
		}
	}
</script>

<style scoped>
	.sing-volume{
		display: flex;
		position: fixed;
		left: 0;
		right: 0;
		top: 2.75rem;
		line-height: 2.75rem;
		text-align: center;
		background-color: #B1B1B1;
		z-index: 999;
	}
	.left,.right{
		width: 1.875rem;
	}
	.left img,.right img{
		width: 1.25rem;
		height: 1.25rem;
		vertical-align: middle;
	}
	.center{
		flex: 1;
		margin-top: 1.3125rem;
		position: relative;
	}
	.content{
		width: 100%;
		height: 0.125rem;
		background-color: #d5d5d5;
	}
	.rate{
		width: 0.625rem;
		height: 0.125rem;
		background-color: white;
	}
	.positionbox{
		position: absolute;
		left: 0.625rem;
		top: -0.25rem;
		width: 0.625rem;
		height: 0.625rem;
		border-radius: 50%;
		background-color: white;
	}
</style>

<template>
	<div class="main-header">
		<div class="left">
			<img src="../../../assets/img/main/菜单.png" />
		</div>
		<div class="center">
			<input type="text" placeholder="Dr Price的频道" @click="routersearch" />
		</div>
		<div class="right">
			<img src="../../../assets/img/main/麦克风.png" />
		</div>
	</div>
</template>

<script>
	import {EventBus} from '../../../network/eventbus.js'
	export default{
		name:'Mainheader',
		props:{
			title:{
				type:String,
				default(){
					return ''
				}
			}
		},
		methods:{
			routersearch(){
				this.$router.push('/search')
				EventBus.$emit('animatebottom',0)
			}
		}
	}
</script>

<style scoped>
	.main-header{
		display: flex;
		/* height: 2.75rem; */
		line-height: 2.75rem;
		text-align: center;
		box-shadow: 0 1px 1px rgba(100,100,100,.2);
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 999;
		padding: 0 0.3125rem;
		background-color: #f3f3f3;
	}
	.center{
		flex: 1;
	}
	.right,.left{
		width: 1.875rem;
	}
	.main-header img{
		width: 1.25rem;
		height: 1.25rem;
		vertical-align: middle
	}
	.main-header input{
		width: 15rem;
		height: 1.5625rem;
		border-radius: 1.25rem;
		border: 0;
		background-color: white;
		outline: none;
		font-size: 0.75rem;
		text-align: center;
	}
</style>

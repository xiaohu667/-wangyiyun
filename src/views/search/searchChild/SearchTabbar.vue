<template>
	<div class="search-tabbar">
		<div class="center">
			<input type="text" placeholder="Dr Price的频道" @blur="searchmessage($event)" @change="searchmessage($event)" ref="ipt" />
		</div>
		<div class="right">
			<span @click="back">取消</span>
		</div>
	</div>
</template>

<script>
	import {EventBus} from '../../../network/eventbus.js'
	import {request} from '../../../network/request.js'
	export default{
		name:'SearchTabbar',
		methods:{
			searchmessage(event){
				if(event.target.value){
					this.$store.dispatch('addrecord',event.target.value)
					this.$emit('spanload',true)
					request({
					url:'/search',
					params:{
						keywords:event.target.value,
						// limit:10
					}
				  }).then(res=>{
					  this.$store.commit('addsearchsong',res.data.result.songs)
				  })
				}else{
					this.$emit('spanload',false)
				}
			},
			back(){
				this.$router.back()
				EventBus.$emit('animatetop',49)
			}
		},
		mounted(){
			EventBus.$on('changeinput',(playload)=>{
				this.message = playload
				this.$refs.ipt.value = playload
			})
		}
	}
</script>

<style scoped>
	.search-tabbar{
		display: flex;
		line-height: 2.75rem;
		/* text-align: center; */
		box-shadow: 0 1px 1px rgba(100,100,100,.2);
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		z-index: 999;
		padding: 0 0.3125rem;
		background-color: white;
	}
	.center{
		flex: 1;
	}
	.right{
		width: 2.5rem;
		text-align: center;
	}
	.right span{
		text-align: center;
		line-height: 1.875rem;
		font-size: 0.875rem;
		color: #000000;
	}
	.search-tabbar input{
		width: 16.875rem;
		height: 1.875rem;
		/* height: 1.5625rem; */
		border-radius: 1.25rem;
		border: 0;
		background-color: white;
		outline: none;
		font-size: 0.75rem;
		padding-left: 0.625rem;
		/* text-align: center; */
		background-color: #e6e6e6;
	}
</style>
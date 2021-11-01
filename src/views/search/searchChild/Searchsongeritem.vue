<template>
	<div class="search-songers-item">
		<span class="idx" :class="{active:songidx+1<=3}">{{songidx+1}}</span>
		<span class="peoname" :class="{activepeo:songidx+1<=3}">{{songer.name}}</span>
		<span class="hot" v-show="songidx+1<=5" :class="{active:songidx+1<=5}">HOT</span>
	</div>
</template>

<script>
	export default{
		name:'Searchsongeritem',
		props:{
			songer:{
				type:Object,
				default(){
					return{}
				}
			},
			songidx:{
				type:Number,
				default(){
					return 0
				}
			}
		}
	}
</script>

<style scoped>
	.search-songers-item{
		width: 50%;
		/* text-align: left; */
		margin-bottom: 0.625rem;
		color: #808080;
	}
	.idx{
		margin-right: 0.1875rem;
	}
	.peoname{
		margin: 0.1875rem;
	}
	.hot{
		font-size: 0.75rem;
		font-style: oblique;
		font-weight: 700;
	}
	.active{
		color: red;
	}
	.activepeo{
		color: #000000;
		/* font-weight: 700; */
	}
</style>

<template>
	<Tabbar>
		<Tabbaritem @click.native="changeroute('/main')">
			<img slot="item-icon" src="../../assets/img/main/首页.png"/>
			<div slot="item-text">首页</div>
		</Tabbaritem>
		<Tabbaritem @click.native="changeroute('/rank')">
			<img slot="item-icon" src="../../assets/img/main/榜单，排行榜.png"/>
			<div slot="item-text">榜单</div>
		</Tabbaritem>
		<Tabbaritem @click.native="changeroute('/search')">
			<img slot="item-icon" src="../../assets/img/main/搜索小.png"/>
			<div slot="item-text">搜索</div>
		</Tabbaritem>
		<Tabbaritem @click.native="changeroute('/profile')">
			<img slot="item-icon" src="../../assets/img/main/我的3.png"/>
			<div slot="item-text">我的</div>
		</Tabbaritem>
	</Tabbar>
</template>

<script>
	import {EventBus} from '../../network/eventbus.js'
	import Tabbar from '../Tabbar/Tabbar.vue'
	import Tabbaritem from '../Tabbar/Tabbaritem.vue'
	export default{
		name:'MainTabBar',
		components: {
			Tabbar,
			Tabbaritem
		},
		methods:{
			changeroute(playload){
				if(playload === '/search'){
					EventBus.$emit('animatebottom',-44)
				}
				this.$router.push(playload)
			}
		}
	}
</script>

<style>
</style>

<template>
	<div class="among-song-list">
		<Amongsonglistitem v-for="(item,index) in songs" :songmessage="item" :songindex="index" @idxclick="idxclick" :ishow="currentindex===index" :key="index"></Amongsonglistitem>
	</div>
</template>

<script>
	import Amongsonglistitem from './Amongsonglistitem.vue'
	export default{
		name:'Amongsonglist',
		data() {
			return{
				currentindex:''
			}
		},
		components:{
			Amongsonglistitem
		},
		props:{
			songs:{
				type:Array,
				default(){
					return[]
				}
			}
		},
		methods:{
			idxclick(index){
				this.currentindex = index
			}
		}
	}
</script>

<style scoped>
	.among-song-list{
		padding: 0.3125rem 0.9375rem;
	}
</style>

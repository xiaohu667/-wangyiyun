<template>
	<div class="search-songs">
		<Searchsongsitem v-for="(item,index) in $store.state.searchsongs[0]" :songmessage="item" :key="index"></Searchsongsitem>
	</div>
</template>

<script>
	import Searchsongsitem from './Searchsongsitem.vue'
	export default{
		name:'Searchsongs',
		components:{
			Searchsongsitem
		}
	}
</script>

<style>
</style>

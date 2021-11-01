<template>
	<div class="recommend-songs">
		<Recommendsongsitem v-for="(item,index) in messagesongs" :songs="item" :idx="index" :ishow="currentindex===index" :key="index" @imgclk="imgclk" ></Recommendsongsitem>
	</div>
</template>

<script>
	import Recommendsongsitem from './Recommendsongitem.vue'
	export default{
		name:'Recommendsongs',
		data() {
			return{
				currentindex:''
			}
		},
		props:{
			messagesongs:{
				type:Array,
				default(){
					return[]
				}
			}
		},
		methods:{
			imgclk(index){
				this.currentindex = index
			}
		},
		components:{
			Recommendsongsitem
		}
	}
</script>

<style scoped>
</style>

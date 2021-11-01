<template>
	<div class="song-txt">
		<div class="top"></div>
		<ul class="bottom" ref="box1">
			<li v-for="(item,index) in lyric" :key="index" class="box">
			  <span class="span">{{item.txt}}</span>
		  </li>
		</ul>
	</div>
</template>

<script>
	import {EventBus} from '../../../network/eventbus.js'
	export default{
		name:'Songtxt',
		data(){
			return{
				txtimer:'',
				txtimer1:'',
				current:0,
				idx:1
			}
		},
		props:{
			lyric:{
				type:Array,
				default(){
					return[]
				}
			}
		},
		beforeDestroy() {
			clearInterval(this.txtimer)
			clearInterval(this.txtimer1)
		},
		mounted(){
			EventBus.$on('slidetop',(playload)=>{
				if(!playload && this.$refs.box1){
					this.txtimer1 = setInterval(()=>{
						document.querySelectorAll('li')[this.idx-1].style.color = 'white'
						for(let i=0;i<this.idx-1;i++){
							document.querySelectorAll('li')[i].style.color = '#dedede'
						}
						let audiotime = this.$root.$el.getElementsByClassName('audio2')[0].currentTime
						if(this.idx>=this.lyric.length){
							clearInterval(this.txtimer1)
						}else{
							let nowtime = parseInt(this.lyric[this.idx].mz) + parseInt(this.lyric[this.idx].fz*60)
							if(nowtime <= audiotime){
								this.txtimer = setInterval(()=>{
							    this.current++
							    this.$refs.box1.style.transform = 'translate(0px,'+ -this.current +'px)'
							    if(this.current >= 24*this.idx){
								    clearInterval(this.txtimer)
								    this.idx++
							    }
							  },10)
							}
						}	
					},500)
				}else{
					clearInterval(this.txtimer1)
					clearInterval(this.txtimer)
				}			
			})
			EventBus.$on('over',()=>{
				setTimeout(()=>{
					this.$refs.box1.style.transform = 'translate(0px,0px)'
					this.idx = 1
					this.current = 0
				},5000)
			})
		}
	}
</script>

<style scoped>
	.top{
		width: 100%;
		height: 11.875rem;
	}
	.song-txt .box{
		text-align: center;
		color: #dedede;
		font-size: 0.75rem;
		line-height: 1.5rem;
	}
	/* .song-txt .span{
		color: #dedede;
		font-size: 0.75rem;
		line-height: 1.5rem;
	} */
	.active{
		color: white;
	}
</style>

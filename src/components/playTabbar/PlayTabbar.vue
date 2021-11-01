<template>
	<div class="play-tabbar" v-if="$store.state.historysong[0]">
		<img :src="$store.state.historysong[0]" class="picurl" @click="routesing" ref="img" />
		<span class="songname">{{$store.state.historysong[1]}}</span>
		<span class="peoname">--{{$store.state.historysong[2]}}</span>
		<img v-if="isshow" src="../../assets/img/main/播放.png" @click="change" class="isshowimg" />
		<img v-else src="../../assets/img/main/暂停.png" @click="change" class="isshowimg" />
	</div>
</template>

<script>
	import {EventBus} from '../../network/eventbus.js'
	export default{
		name:'PlayTabbar',
		data() {
			return{
				isshow:true,
				current:0,
				timer:'',
				message:'',
				topinstance:49,
				timer1:'',
				timer2:'',
				propsboolean:true
			}
		},
		props:{
			controltimer:{
				type:Boolean,
				default(){
					return false
				}
			}
		},
		methods:{
			change(){
				this.isshow = !this.isshow
				this.$emit('changeclick',this.isshow);
				// let picurl = document.getElementsByClassName('picurl')[0];
				let picurl = this.$refs.img
				if(!this.isshow){
					clearInterval(this.timer)
						this.timer = setInterval(()=>{
						if(this.current >= 360){
							this.current = 0
						}else{
							this.current++
						}
						  picurl.style.transform = 'rotate('+this.current+'deg)'
					  },10)
				}else{
					// console.log(this.isshow)
					clearInterval(this.timer)
				}
			},
			routesing(){
				this.$router.push('/sing')
				EventBus.$emit('animatebottom',-44)
				EventBus.$emit('getime')
				this.$store.commit('addcheshow',this.isshow)
			}
		},
		updated() {
			if(this.controltimer === this.propsboolean){
				clearInterval(this.timer)
				this.propsboolean = !this.propsboolean
			}
		},
		mounted() {
			EventBus.$on('changeisshow',(message)=>{
				this.isshow = message
				this.change()
			}),
			EventBus.$on('animatebottom',(playload)=>{
				this.timer1 = setInterval(()=>{
					this.topinstance--
					document.getElementsByClassName('play-tabbar')[0].style.bottom = this.topinstance+'px'
					if(this.topinstance <= playload){
						// console.log(this.topinstance)
						clearInterval(this.timer1)
					}
				},1)
			}),
			EventBus.$on('animatetop',(playload)=>{
				this.timer2 = setInterval(()=>{
					this.topinstance++
					document.getElementsByClassName('play-tabbar')[0].style.bottom = this.topinstance+'px'
					if(this.topinstance >= playload){
						// console.log(this.topinstance)
						clearInterval(this.timer2)
					}
				},1)
			})
		}
	}
</script>

<style scoped>
	.play-tabbar{
		height: 2.75rem;
		width: 100%;
		position: fixed;
		bottom: 3.0625rem;
		left: 0;
		right: 0;
		background-color: #f3f3f3;
		border-top: 1px solid #d8d8d8;
		border-bottom: 1px solid #d8d8d8;
		padding-left: 0.9375rem;
		z-index: 999;
	}
	.picurl{
		width: 2.375rem;
		height: 2.375rem;
		/* margin-top: 0.1875rem; */
		border-radius: 50%;
		vertical-align: middle;
		margin-right: 0.9375rem;
	}
	.play-tabbar span{
		height: 2.75rem;
		line-height: 2.75rem;
	}
	.songname{
		font-size: 0.875rem;
		color: #000000;
	}
	.peoname{
		font-size: 0.75rem;
		color: #ababab;
		/* margin-right: 6.25rem; */
	}
	.isshowimg{
		position: absolute;
		right: 1.25rem;
		top: 0.625rem;
		width: 1.5625rem;
		height: 1.5625rem;
	}
</style>

<template>
	<div class="song-control" v-if="songtime[0]">
		<div class="top">
			<div class="left">0{{fenzhong}}:{{miaozhong}}</div>
		  <div class="center">
			  <div class="content">
				  <div class="rate" :style="{width:ratewth + 'px'}" ref="rate"></div>
			  </div>
			  <div class="positionbox" ref="positionbox" :style="{left:ratewth + 'px'}"></div>
		  </div>
		  <div class="right">{{rightfenzhong}}:{{rightmiaozhong}}</div>
		</div>
		<div class="bottom">
			<div class="xunhuan">
				<img src="../../../assets/img/sing/单曲循环.png" />
			</div>
			<div class="le">
				<img src="../../../assets/img/sing/向左.png" />
			</div>
			<div class="play">
				<img v-if="isshowaa" src="../../../assets/img/sing/播放.png" @click="change" />
			  <img v-else src="../../../assets/img/sing/暂停3.png"  @click="change" />
			</div>
			<div class="ri">
				<img src="../../../assets/img/sing/向右.png" />
			</div>
			<div class="caidan">
				<img src="../../../assets/img/sing/菜单.png" />
			</div>
		</div>
	</div>
</template>

<script>
	import {EventBus} from '../../../network/eventbus.js'
	export default{
		name:'Songcontrol',
		data() {
			return{
				isshowaa:this.$store.state.cheshow[0],
				timer:'',
				current:0,
				miaozhong:parseInt(this.$store.state.currentime[0].toFixed(0)),
				fenzhong:0
			}
		},
		computed:{
			ratewth(){
				return this.$store.state.currentime[0].toFixed(0)
			},
			rightfenzhong(){
				return Math.floor(this.$store.state.duration[0]/60)
			},
			rightmiaozhong(){
				return Math.ceil(this.$store.state.duration[0]%60)
			}
		},
		props:{
			songtime:{
				type:Array,
				default(){
					return[]
				}
			}
		},
		beforeDestroy() {
			clearInterval(this.timer)
		},
		methods:{
			change(){
				this.isshowaa = !this.isshowaa;
				EventBus.$emit('changeisshow',!this.isshowaa)
				EventBus.$emit('slidetop',this.isshowaa)
				if(this.isshowaa){
					clearInterval(this.timer)
				}else{
					clearInterval(this.timer)
					this.timer = setInterval(()=>{
						let totallength = parseInt(this.$store.state.duration[0])
					  this.current++
					  this.$refs.rate.style.width = (this.current)/totallength*200 +'px'
					  this.$refs.positionbox.style.left = (this.current)/totallength*200 +'px'
						this.miaozhong += 1
					  if(this.miaozhong > 59){
						  this.miaozhong = 0
						  this.fenzhong ++
					  }
						if(this.current >= totallength){
						  clearInterval(this.timer)
							this.isshowaa = !this.isshowaa
							this.$refs.rate.style.width = 0
							this.$refs.positionbox.style.left = 0
							this.fenzhong = 0
							this.miaozhong = 0
							this.current = 0
							EventBus.$emit('slidetop',true)
							EventBus.$emit('over')
						}
					},1000)
				}
			}
		},
		mounted(){
			EventBus.$emit('slidetop',this.isshowaa)
			if(!this.isshowaa){
				this.timer = setInterval(()=>{
					let totallength = parseInt(this.$store.state.duration[0])
				  this.current++
				  this.$refs.rate.style.width = (this.current + parseInt(this.ratewth))/totallength*200 +'px'
				  this.$refs.positionbox.style.left = (this.current + parseInt(this.ratewth))/totallength*200 +'px'
					this.miaozhong += 1
				  if(this.miaozhong > 59){
					  this.miaozhong = 0
					  this.fenzhong ++
				  }
				  if(this.current + parseInt(this.ratewth) >= totallength){
					  clearInterval(this.timer)
						this.isshowaa = !this.isshowaa
						this.$refs.rate.style.width = 0
						this.$refs.positionbox.style.left = 0
						this.fenzhong = 0
						this.miaozhong = 0
						this.current = 0
						EventBus.$emit('slidetop',true)
						EventBus.$emit('over')
				  }
			  },1000)
			}
		}
	}
</script>

<style scoped>
	.song-control{
		position: fixed;
		height: 5rem;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #b8b8b8;
	}
	.top{
		height: 1.25rem;
		line-height: 1.875rem;
		width: 100%;
		display: flex;
	}
	.left,.right{
		width: 3.75rem;
		text-align: center;
		font-size: 0.75rem;
		color: #eeeeee;
	}
	.center{
		flex: 1;
		height: 0.125rem;
		width: 100%;
		margin-top: 0.875rem;
		background-color: #d6d6d6;
		position: relative;
	}
	.rate{
		width: 0;
		height: 0.125rem;
		background-color: #e0e5df;
	}
	.positionbox{
		width: 0.375rem;
		height: 0.375rem;
		border-radius: 50%;
		background-color: white;
		position: absolute;
		top: -0.125rem;
		left: 0.625rem;
	}
	.bottom{
		display: flex;
		height: 3.75rem;
		justify-content: center;
		align-items: center;
	}
	.bottom div{
		display: flex;
		height: 3.125rem;
		justify-content: center;
		align-items: center;
	}
	.bottom img{
		/* display: inline-block; */
		width: 1.25rem;
		height: 1.25rem;
	}
	.bottom .play img{
		width: 2.5rem;
		height: 2.5rem;
	}
	.xunhuan,.caidan{
		flex: 2;
	}
	.le,.ri{
		flex: 1;
	}
	.play{
		flex: 1.5;
	}
</style>

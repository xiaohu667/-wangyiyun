<template>
	<div class="profile-like">
		<div class="left">
			<slot name="img1"></slot>
			<slot name="img2"></slot>
		</div>
		<div class="center">
			<slot name="span1"></slot><br />
			<span class="smallfont">{{likesonglength}}首</span>
		</div>
		<div class="right">
			<slot name="span2"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:'ProfileLike',
		data() {
			return{
			}
		},
		props:{
			likesonglength:{
				type:Number,
				default(){
					return 0
				}
			}
		},
		methods:{
		}
	}
</script>

<style scoped>
	.profile-like{
		height: 3.75rem;
		height: 3.75rem;
		padding: 0.625rem 0.625rem;
		display: flex;
		background-color: #ffffff;
		border-radius: 0.625rem;
		margin-top: 0.625rem;
		margin-bottom: 0.625rem;
	}
	.left{
		width: 2.5rem;
		height: 2.5rem;
		position: relative;
		margin-right: 0.625rem;
	}
	.left .bigpic{
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 0.3125rem;
	}
	.left .smallpic{
		width: 1.25rem;
		height: 1.25rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.center{
		flex: 1;
	}
	.center .bigfont{
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	.center .smallfont{
		font-size: 0.75rem;
		color: #9F9F9F;
		line-height: 1.25rem;
	}
	.right span{
		padding: 0.1875rem 0.3125rem;
		border: 0.0625rem solid #a3a3a3;
		border-radius: 0.3125rem;
		line-height: 2.5rem;
		font-size: 0.75rem;
	}
</style>

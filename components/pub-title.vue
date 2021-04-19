<template>
	<view class="title">
		<text class="colLine">|</text>
		<text class="content">{title}</text>
	</view>
</template>

<script>
	export default{
		props:{			
			title							
		},
		data(){				
			return{
			}
		}
	}
</script>

<style>
	.title{
		position: relative;	
	}	
	.colLine {
		height: 100rpx;
		width: 100rpx;
		margin-right: 25rpx;		
	}
	
	.content {
		font-size: 35rpx;
		color:#377EB4;		
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
</style>

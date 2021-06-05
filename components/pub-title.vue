<template>
	<view class="title">
		<text class="colLine">|</text>
		<text class="word">{{notice||dir.title}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			dir: Object,
			notice:String
		}
	}
</script>

<style>
	.title {
		margin:70rpx 0 0 30rpx;
		font-size: 35rpx;
	}

	.colLine {
		color: blue;
		font-weight: bold;
		display: inline-block;
		margin-right: 20rpx;
	}

	.word {
		margin-top: 15rpx;
	}
</style>

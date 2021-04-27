<template>
	<view class="title">
		<text class="colLine">|</text>
		<text class="word">{{title}}</text>
	</view>
</template>

<script>
	export default {
		props: {
			title: String
		}
	}
</script>

<style>
	.title {
		margin-top: 70rpx;
		font-size: 35rpx;
	}

	.colLine {
		color: blue;
		font-weight: bold;
		display: inline-block;
		margin: auto 20rpx;
	}

	.word {
		margin-top: 15rpx;
	}
</style>

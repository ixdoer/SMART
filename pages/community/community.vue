<template>
	<view>
		<view class="logo">
			<image :src="logoUrl"></image>
			<text>阳光小区</text>
		</view>

		<view class="preview">
			<swiper class="swiper" indicator-dots="true" indicator-color="blue" circular="true" autoplay="true"
			 indicator-active-color="red" interval="2000" :duration="500">
				<swiper-item v-for="item in items" :key="item.text">
					<image class="comImage" :src="item.imageUrl"></image>
				</swiper-item>
			</swiper>
		</view>

		<view class="navbar">
			<navigator v-for="(item,index) in navList" :key="index" :url="item.url">
				<view class="icon">
					<image :src="item.iconsrc"></image>
				</view>
				<text class="navtext">{{item.text}}</text>
			</navigator>
		</view>		

		<view class="hot">
			<view class="title">
				<text class="colLine">|</text>
				<text class="titleText">{{title.hot}}</text>
			</view>
			<view class="hotContent">
				<view class="box1">
					<text>a</text>
				</view>
				<view class="box2">
					<text>b</text>
				</view>
				<view class="box3">
					<text>c</text>
				</view>
			</view>
		</view>
		
		<view class="notice">
			<view class="title">
				<text class="colLine">|</text>
				<text class="titleText">{{title.notice}}</text>
			</view>
			<view class="noticeContainer">
				<view class="noticeContent">
					
				</view>
				<view class="noticeContent">
					
				</view>
				<view class="noticeContent">
					
				</view>
				<view class="noticeContent">
					
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				logoUrl: "../../static/images/logo.png",
				items: [{
					text: "A",
					imageUrl: "../../static/images/community1.png"
				}, {
					text: "B",
					imageUrl: "../../static/images/community2.png"
				}, {
					text: "C",
					imageUrl: "../../static/images/community3.png"
				}],
				navList: [{
					text: '社区商城',
					url: '../shopping/shopping',
					iconsrc: '../../static/images/商城.png'
				}, {
					text: '社区家政',
					url: '../housekeeping/housekeeping',
					iconsrc: '../../static/images/家政.png'
				}, {
					text: '社区食堂',
					url: '../canteen/canteen',
					iconsrc: '../../static/images/食堂.png'
				}, {
					text: '社区养老',
					url: '../pension/pension',
					iconsrc: '../../static/images/养老.png'
				}, {
					text: '社区教育',
					url: '../education/education',
					iconsrc: '../../static/images/教育.png'
				}, {
					text: '社区公益',
					url: '../publicWelfare/publicWelfare',
					iconsrc: '../../static/images/公益.png'
				}, {
					text: '社区文娱',
					url: '../entertainment/entertainment',
					iconsrc: '../../static/images/文娱.png'
				}, {
					text: '社区党建',
					url: '../partyBuilding/partyBuilding',
					iconsrc: '../../static/images/党建.png'
				}],
				title: {
					notice: '社区公告',										
					hot: '热门推荐'
				}
			}
		},
		methods: {

		}
	}
</script>
<style>
	.logo {
		position: relative;
		margin-left: 25rpx;
	}

	.logo image {
		height: 100rpx;
		width: 100rpx;
		margin-right: 25rpx;
	}

	.logo text {
		font-size: 35rpx;
		color: #377EB4;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	.swiper {
		height: 400rpx;
		margin: 10rpx 25rpx;
		border-radius: 30rpx;
		overflow: hidden;
		box-shadow: 10rpx 10rpx 20rpx rgba(0, 0, 0, 0.2), 10rpx 10rpx 20rpx rgba(255, 255, 255, 1);
	}

	.comImage {
		width: 100%;
		height: 100%;
	}

	.navbar {
		width: 90%;
		margin: 30rpx auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.navbar navigator {
		width: 25%;
		margin-bottom: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.navbar .icon {
		width: 110rpx;
		height: 110rpx;
		border-radius: 50%;
		position: relative;
		box-shadow: 10rpx 10rpx 20rpx rgba(0, 0, 0, 0.2), -10rpx -10rpx 20rpx rgba(255, 255, 255, 1);
	}

	.navbar image {
		width: 70%;
		height: 70%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.navbar text {
		margin-top: 10rpx;
		font-size: 30rpx;
	}

	.title {
		font-size: 35rpx;
	}

	.title .colLine {
		margin: auto 25rpx;
		color: blue;
		font-weight: bold;
	}

	.hotContent {		
		width: 94%;
		height: 400rpx;
		margin: 25rpx auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-template-areas:
			"box1 box2"
			"box1 box3";
		grid-gap: 15rpx 15rpx;
	}

	.box1 {		
		grid-area: box1;
		border: 1rpx solid red;
		border-radius: 15rpx;
	}

	.box2 {
		border: 1rpx solid red;
		border-radius: 15rpx;
		grid-area: box2;
	}

	.box3 {
		border: 1rpx solid red;
		border-radius: 15rpx;
		grid-area: box3;
	}
	.notice{
		width:95%;
		margin: 25rpx auto;
	}
	.noticeContent{
		width: 100%;
		height: 50rpx;
		margin-top: 25rpx;
		border: 1rpx solid red;
		border-radius: 15rpx;
	}
</style>

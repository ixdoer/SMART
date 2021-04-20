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
				<text class="titleText">{{hot.title}}</text>
			</view>
			<view class="hotContent">
				<navigator class="box1 box">
					<image src="../../static/images/fruit.jpg" mode=""></image>
					<text class="discribeTitle">{{hot.content.box1.headline}}</text>
					<text class="discribeDetail">{{hot.content.box1.detail}}</text>

				</navigator>
				<navigator class="box2 box">
					<image src="../../static/images/clean.jpg" mode=""></image>
					<!-- <text class="discribeTitle">{{hot.content.box2.headline}}</text>
					<text class="discribeDetail">{{hot.content.box2.detail}}</text> -->

				</navigator>
				<navigator class="box3 box">
					<image src="../../static/images/wash2.jpg" mode=""></image>
					<!-- <text class="discribeTitle">{{hot.content.box3.headline}}</text>
					<text class="discribeDetail">{{hot.content.box3.detail}}</text> -->
				</navigator>
			</view>
		</view>

		<view class="notice">
			<view class="title">
				<text class="colLine">|</text>
				<text class="titleText">{{notice.title}}</text>
			</view>
			<view class="noticeContainer">
				<navigator class="noticeContent" v-for="(item,index) in notice.content" :key=index>
					<image src="../../static/images/通知.png" mode=""></image>
					<text>{{notice.content[index].headline}}</text>
				</navigator>
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
				hot: {
					title: '热门推荐',
					content: {
						box1: {
							headline: '买一送一',
							detail: '今日秒杀，拼手速！'
						},
						box2: {
							headline: '高效保洁',
							detail: '随时上门，随时约！'
						},
						box3: {
							headline: '衣物干洗',
							detail: '上门取送，速度快！'
						},
					}
				},
				notice: {
					title: '社区公告',
					content: [{
							headline: '关于阳光小区疫情防控工作的通知',
							article: '',
							date:''
						},
						{
							headline: '关于4月1日停电的通知',
							article: '',
							date:''
						},
						{
							headline: '关于阳光小区社区乒乓球大赛的通知',
							article: '',
							date:''
						}
					]
				}
			}
		},
		methods: {

		}
	}
</script>
<style>
	.logo {
		width: 40%;
		position: relative;
		margin-left: 25rpx;
		border-radius: 25rpx;
		box-shadow: 10rpx 10rpx 20rpx rgba(0, 0, 0, 0.2), -10rpx -10rpx 20rpx rgba(255, 255, 255, 1);
	}

	.logo image {
		height: 100rpx;
		width: 100rpx;
		margin: auto 25rpx;
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
		width: 95%;
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
		position: relative;

	}

	.box {
		box-shadow: 10rpx 10rpx 20rpx rgba(0, 0, 0, 0.2), -10rpx -10rpx 20rpx rgba(255, 255, 255, 1);
		border-radius: 15rpx;
		position: absolute;
	}

	.box1 {
		width: 49%;
		height: 100%;

	}

	.box2 {
		width: 48%;
		height: 48%;
		right: 0;
	}

	.box3 {
		width: 48%;
		height: 48%;
		right: 0;
		bottom: 0;
	}


	.box image {
		width: 100%;
		height: 100%;
		border-radius: 15rpx;
	}

	.box .discribeTitle {
		position: absolute;
		font-size: 40rpx;
		font-weight: 900;
		color: #FF0000;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.box .discribeDetail {
		position: absolute;
		color: #FF0000;
		top: 230rpx;
		left: 40rpx;
	}

	.notice {
		margin-top: 50rpx;
		//为了解决页面底部在H5端被tabbar遮住
		padding-bottom: var(--window-bottom);		
	}

	.noticeContent {
		width: 94%;
		height: 60rpx;
		margin: 15rpx auto;
		border-radius: 15rpx;
		display: flex;
		align-items: center;
		background-color: #FFECEC;		
		box-shadow: 10rpx 10rpx 20rpx rgba(0, 0, 0, 0.2), 10rpx 10rpx 20rpx rgba(255, 255, 255, 1);
	}

	.noticeContent image {
		width: 50rpx;
		height: 50Rpx;
		margin: auto 10rpx;
	}
</style>

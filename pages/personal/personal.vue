<template>
	<view>
		<view class="navTitle">
			我的
		</view>
		<view class="preview">
			<image src="../../static/images/物业.jpg" mode=""></image>
		</view>

		<view class="dir" v-for="(dir,index) in dirs"  :key="index">
			<view class="title">
				<text class="colLine">|</text>
				<text class="titleText">{{dir.title}}</text>
			</view>
			<view class="content">
				<navigator class="nav" v-for="(item,index) in dir.navs" :key="index">
					<image :src="item.imgSrc" mode=""></image>
					<text class="detail">{{item.detail}}</text>
				</navigator>
			</view>
		</view>	
	</view>
</template>

<script>	
import pubTitle from "../../components/pub-title.vue"
	export default {
		components:{
			pubTitle
		},
		data() {
			return {					
				dirs: {
					pay: {
						title: "生活缴费",
						navs: [{
							detail: "水费",
							imgSrc: "../../static/images/水费.png",
							url: ""
						}, {
							detail: "电费",
							imgSrc: "../../static/images/电费.png",
							url: ""
						}, {
							detail: "燃气费",
							imgSrc: "../../static/images/燃气.png",
							url: ""
						}]
					},
					service: {
						title: "社区服务",
						navs: [{
							detail: "报修",
							imgSrc: "../../static/images/报修.png",
							url: ""
						}, {
							detail: "咨询",
							imgSrc: "../../static/images/咨询.png",
							url: ""
						}, {
							detail: "投诉",
							imgSrc: "../../static/images/投诉.png",
							url: ""
						}]
					}

				}

			}
		}
	}
</script>

<style>
		
	.navTitle{
		width:25%;
		height:40rpx;
		margin: 50rpx auto;		
		font-size: 40rpx;
		text-align: center;
		font-weight: 525;
	}
	.preview {
		height: 400rpx;
		margin: 10rpx 25rpx;
		border-radius: 30rpx;
		overflow: hidden;
		margin-bottom: 60rpx;
		box-shadow: 10rpx 10rpx 20rpx rgba(0, 0, 0, 0.2), 10rpx 10rpx 20rpx rgba(255, 255, 255, 1);
	}

	.preview image {
		width: 100%;
		height: 100%;
		
	}

	.title {
		margin-top:70rpx;
		font-size: 35rpx;
	}

	.title .colLine {
		margin: auto 25rpx;
		color: blue;
		font-weight: bold;
	}	
	
	.content{
		width: 95%;
		margin:  30rpx auto;
		height: 175rpx;		
		display:flex;
		justify-content: space-between;
	}
	.nav{
		width: 30%;
		height: 100%;
		border-radius: 15rpx;
		box-shadow: 10rpx 10rpx 20rpx rgba(0, 0, 0, 0.2), -10rpx -10rpx 20rpx rgba(255, 255, 255, 1);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.nav image{
		width: 35%;
		height: 40%;
		margin-bottom: 20rpx;
	}
</style>

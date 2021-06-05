<template>
	<view>		
		
<view class="preview">
			<swiper class="swiper" indicator-dots="true" indicator-color="#bfbfbf" circular="true" autoplay="true"
				indicator-active-color="red" interval="2000" :duration="500">
				<swiper-item v-for="item in items" :key="item.text">
					<image class="comImage" :src="item.imageUrl"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="dir" v-for="(dir,index) in dirs"  :key="index">
			<!-- 标题组件 -->
			<pub-title :dir="dir"></pub-title>			
			<view class="content">
				<navigator class="nav" v-for="(item,index) in dir.navs" :key="index">
					<image :src="item.imgSrc" mode=""></image>
					<text class="detail">{{item.detail}}</text>
				</navigator>
			</view>
		</view>	
		
		<view class="notice">
			<pub-title :notice="notice.title"></pub-title>
			<view class="noticeContainer">
				<navigator class="noticeContent" v-for="(item,index) in notice.content" :key=index>
					<image src="../../static/images/tongzhi.png" mode=""></image>
					<text>{{notice.content[index].headline}}</text>
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
				items: [{
					text: "A",
					imageUrl: "../../static/images/1.jpg"
				}, {
					text: "B",
					imageUrl: "../../static/images/2.jpg"
				}, {
					text: "C",
					imageUrl: "../../static/images/3.jpg"
				}],
				dirs: {
					pay: {
						title: "生活缴费",
						navs: [{
							detail: "水费",
							imgSrc: "../../static/images/shuifei.png",
							url: ""
						}, {
							detail: "电费",
							imgSrc: "../../static/images/dianfei.png",
							url: ""
						}, {
							detail: "燃气费",
							imgSrc: "../../static/images/ranqi.png",
							url: ""
						}]
					},
					service: {
						title: "社区服务",
						navs: [{
							detail: "报修",
							imgSrc: "../../static/images/baoxiu.png",
							url: ""
						}, {
							detail: "咨询",
							imgSrc: "../../static/images/zixun.png",
							url: ""
						}, {
							detail: "投诉",
							imgSrc: "../../static/images/toushu.png",
							url: ""
						}]
					},

				},
				notice: {
					title: '社区公告',
					content: [{
							headline: '关于阳光小区疫情防控工作的通知',
							article: '',
							date: ''
						},
						{
							headline: '关于4月1日停电的通知',
							article: '',
							date: ''
						},
						{
							headline: '关于阳光小区社区乒乓球大赛的通知',
							article: '',
							date: ''
						}
					]
				}

			}
		}
	}
</script>

<style>		
	
	
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
	
	.notice {
		margin-top: 50rpx;
	}
	
	.noticeContent {
		background-color: white;
		width: 94%;
		height: 60rpx;
		margin: 15rpx auto;
		border-radius: 15rpx;
		display: flex;
		align-items: center;
	}
	
	.noticeContent image {
		width: 50rpx;
		height: 50rpx;
		margin: auto 10rpx;
	}
</style>

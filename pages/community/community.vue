<template>
	<view>
		<view class="">
			<view class="panel">
				<view class="location">
					<image src="../../static/images/location.png" mode=""></image>
					<text>{{location}}</text>
				</view>
				<view class="weather">
					<image :src="weatherIcon"></image>
					<text class="temperature">{{temperature}}℃</text>
					<text class="weatherText">{{weatherText}}</text>
				</view>

				<view class="advice">
					<text class="T">温馨提示：</text>
					<text class="C">{{advice}}</text>
				</view>

				<view class="index">
					<text class="humidity terms">湿度 {{humidity}}%</text>
					<text class="wind terms">{{winddirection}} {{windpower}}级</text>
					<text class="air terms">空气质量 {{air}}</text>
					<text class="ultraviolet terms">紫外线 {{ultraviolet}}</text>
				</view>
			</view>
		</view>

		<view class="navbar">
			<navigator v-for="(item,index) in navList" :key="index" :url="item.url">
				<view class="icon">
					<image :src="item.iconsrc"></image>
				</view>
				<text class="navtext">{{item.text}}</text>
			</navigator>
		</view>
		<!--门禁系统 -->
		<view class="door">
			<image src="../../static/images/menjin.png" mode=""></image>
			<text>社区门禁</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//高德地图key
				gaoKey: 'e8b6f69a02c2812e7def0dceccedf35b',
				location: '',
				city: '',

				//和风天气key				
				heKey: '8bac38a17213411fb8ee5880aeae0d56',
				humidity: '',
				temperature: '',
				weatherText: '',
				winddirection: "",
				windpower: "",
				weatherIcon: '',

				air: '',
				ultraviolet: '',
				advice: '',

				navList: [{
					text: '社区商城',
					url: '../shopping/shopping',
					iconsrc: '../../static/images/shangcheng.png'
				}, {
					text: '社区家政',
					url: '../housekeeping/housekeeping',
					iconsrc: '../../static/images/jiazheng.png'
				}, {
					text: '社区食堂',
					url: '../canteen/canteen',
					iconsrc: '../../static/images/shitang.png'
				}, {
					text: '社区养老',
					url: '../pension/pension',
					iconsrc: '../../static/images/yanglao.png'
				}, {
					text: '社区教育',
					url: '../education/education',
					iconsrc: '../../static/images/jiaoyu.png'
				}, {
					text: '社区公益',
					url: '../publicWelfare/publicWelfare',
					iconsrc: '../../static/images/gonyi.png'
				}, {
					text: '社区文娱',
					url: '../entertainment/entertainment',
					iconsrc: '../../static/images/wenyu.png'
				}, {
					text: '社区党建',
					url: '../partyBuilding/partyBuilding',
					iconsrc: '../../static/images/dangjian.png'
				}]
			}
		},
		onShow() {
			let self = this;
			//使用高德地图进行定位
			let amapFile = require('../../common/amap-wx.js');
			let amapPlugin = new amapFile.AMapWX({
				key: this.gaoKey
			});
			amapPlugin.getWeather({
				success: (res) => {
					self.location = res.city.data
				},
				fail: function(info) {
					console.log("定位请求失败！")
				}
			});
			uni.getLocation({
				type: 'wgs84',
				success: function(res) {
					//获得当前位置的经度和纬度
					console.log(res)
					self.location = res.longitude + ',' + res.latitude;
					//请求和风天气数据
					uni.request({
						//地址
						url: 'https://devapi.qweather.com/v7/weather/now?',
						//参数
						data: {
							location: self.location,
							key: self.heKey
						},
						success: (res) => {
							let now = res.data.now;
							self.temperature = now.temp;
							self.humidity = now.humidity
							self.weatherText = now.text;
							self.winddirection = now.windDir;
							self.windpower = now.windScale;
							self.weatherIcon = `../../static/images/weatherImg/${now.icon}.png`;
						}
					});
					//请求空气质量数据
					uni.request({
						//地址
						url: 'https://devapi.qweather.com/v7/air/now?',
						//参数
						data: {
							location: self.location,
							key: self.heKey
						},
						success: (res) => {
							self.air = res.data.now.category;
						}
					});
					//请求生活指数数据
					uni.request({
						//地址
						url: 'https://devapi.qweather.com/v7/indices/1d?',
						//参数
						data: {
							type: '3,5',
							location: self.location,
							key: self.heKey
						},
						success: (res) => {
							console.log(res)
							self.advice = res.data.daily['0'].text;
							self.ultraviolet = res.data.daily['1'].category;
						}
					});
				}
			});
		}
	}
</script>
<style lang=scss>
	/* 学习了scss语法,很好用 */

	.panel {
		height: 400rpx;
		margin: 10rpx 25rpx;
		border-radius: 30rpx;
		overflow: hidden;
		margin-bottom: 60rpx;
		background-color: #e7effd;
		position: relative;
		box-shadow: 10rpx 10rpx 20rpx rgba(0, 0, 0, 0.2), 10rpx 10rpx 20rpx rgba(255, 255, 255, 1);

		.weather {
			position: absolute;	
			top:-20rpx;
			left:35rpx;
			image {
				width: 220rpx;
				height: 220rpx;
				position: absolute;
				top: 10rpx;
				display: block;
			}

			.temperature {
				font-size: 50rpx;
				position: absolute;
				left: 210rpx;
				top: 70rpx;
			}

			.weatherText {
				position: absolute;
				left: 220rpx;
				top: 135rpx;
				width: 90rpx;
				font-size: 30rpx;
				text-align: center;
			}
		}

		.location {
			margin-left: 20rpx;
			display: flex;
			align-items: center;
			position: absolute;
			top:20rpx;
			right:60rpx;

			image {
				width: 50rpx;
				height: 50rpx;
			}
		}

		.index {
			position: absolute;
			bottom: 40rpx;
			right: 30rpx;
			display: flex;
			width: 180rpx;
			flex-wrap: wrap;

			.terms {
				width: 180rpx;
				height: 45rpx;
				font-size: 30rpx;
				text-align: center;
				border-radius: 10rpx;
				margin-top: 25rpx;
				background-color: #f5f6fa;
				box-shadow: 10rpx 10rpx 20rpx rgba(0, 0, 0, 0.2), 10rpx 10rpx 20rpx rgba(255, 255, 255, 1);
			}
		}

		.advice {
			position: absolute;
			left: 40rpx;
			bottom: 40rpx;
			width: 400rpx;

			.T {
				font-size: 30rpx;
				color: #77B307;
				display: block;
			}

			.C {
				font-size: 30rpx;
				color: #007AFF;
				display: block;
				border-radius: 10rpx;
				border: 1rpx solid #f5f6fa;
				padding: 5rpx 5rpx;
				box-shadow: 10rpx 10rpx 20rpx rgba(0, 0, 0, 0.2), 10rpx 10rpx 20rpx rgba(255, 255, 255, 1);
			}
		}
	}

	.navbar {
		width: 95%;
		margin: 30rpx auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		navigator {
			width: 25%;
			margin-bottom: 30rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
		}

		.icon {
			width: 110rpx;
			height: 110rpx;
			border-radius: 50%;
			position: relative;
		}

		image {
			width: 70%;
			height: 70%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		text {
			margin-top: 10rpx;
			font-size: 30rpx;
		}
	}

	/* 扫一扫 */
	.door {
		width: 700rpx;
		height: 180rpx;
		margin: 25rpx auto;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10rpx;
		background-color: white;
		box-shadow: 5rpx 5rpx 5rpx rgba(0, 0, 0, 0.2), -3rpx 0rpx 5rpx rgba(0, 0, 0, 0.2);

		image {
			width: 100rpx;
			height: 100rpx;
			margin-right: 40rpx;
		}
	}
</style>

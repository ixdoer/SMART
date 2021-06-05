<template>
	<view class="preview">
		<image src="../static/images/location.png" mode=""></image>
		<text>{{address}}</text>
	</view>
</template>

<script>	
	export default {
		data() {
			return {
				address: '',				
			}
		},
		onShow() {
			var self = this;
			var amapFile = require('../common/amap-wx.js');
			var amapPlugin = new amapFile.AMapWX({
				key: "e8b6f69a02c2812e7def0dceccedf35b"
			});
			amapPlugin.getWeather({
				success: (res) => {
					self.address = res.city.data
					//成功回调
					console.log(res)
				},
				fail: function(info) {
					//失败回调
					console.log(info)
				}
			});
			amapPlugin.getWxLocation()({
				success: (res) => {					
					//成功回调
					console.log(res)
				},
				fail: function(info) {
					//失败回调
					console.log(info)
				}
			});
		}
	}
</script>

<style>
	.preview image{
		width: 50rpx;
		height:50rpx;
	}
</style>

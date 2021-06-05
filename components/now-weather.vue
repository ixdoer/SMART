<template>
	<view class="preview">	
		<view class="">
			{{humidity}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//和风天气api和key
				heUrl: 'https://devapi.qweather.com/v7/weather/now?',
				heKey: '8bac38a17213411fb8ee5880aeae0d56',
				location: '',
				city: '',
				district: '',

				humidity: '',
				temperature: '',
				weatherText: '',
				windDir: '',
				windScale: '',
			}
		},
		onLoad() {
			let self = this;
			uni.getLocation({
				type: 'wgs84',
				success: function(res) {
					//获得当前位置的经度和纬度
					self.location = res.longitude + ',' + res.latitude;					
					//请求和风天气数据
					uni.request({
						//地址
						url: self.heUrl,
						//参数
						data: {
							location: self.location,
							key: self.heKey
						},
						success: (res) => {
							console.log(res);
							let now = res.data.now;
							self.humidity = now.humidity;
							self.temperature = now.temp;
							self.weatherText = now.text;
							self.windDir = now.windDir;
							self.windScale = now.windScale;
						}
					});
				}
			});

		}
	}
</script>
<style>
.preview {
		height: 400rpx;
		margin: 10rpx 25rpx;
		border-radius: 30rpx;
		overflow: hidden;
		margin-bottom: 60rpx;
		background-color: #14FFE9;
	}
</style>

<template>
</template>

<script>
	import amap from '../../common/amap-wx.js';
	export default {
		data() {
			return {
				amapPlugin: null,
				key: 'e8b6f69a02c2812e7def0dceccedf35b',
				addressName: '',
				weather: {
					hasData: false,
					data: []
				}
			}
		},
		onShow() {
			this.amapPlugin = new amap.AMapWX({
				key: this.key
			});
			this.getRegeo();
			this.amapPlugin.getWeather({
			      success: function(data){
			        //成功回调
					console.log(data)
			      },
			      fail: function(info){
			        //失败回调
			        console.log(info)
			      }
			    })
		},
		methods: {
			getRegeo() {
				uni.showLoading({
					title: '获取信息中'
				});
				this.amapPlugin.getRegeo({
					success: (data) => {
						console.log(data)
						this.addressName = data[0].name;
						uni.hideLoading();
					}
				});
			}
		}
	}
</script>

<style>
</style>

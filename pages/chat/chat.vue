<template>
	<view class="key" @tap="">
		<view class="img" hover-class="imgpress">
			<image src=''></image>
		</view>
		<text></text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				client: {},
				Temp:0,
				Hum:0,
				Ligth:0,
				Led:false,
				Beep:false
			}
		},
		onLoad: function(e) {
			this.connect();
		},
		//下拉刷新
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
			//this.connect();
		},
		methods: {
		// 	connect() {
		// 		let self = this
		// 		let subscribe = "test"
		// 		let mqtt = require('mqtt/dist/mqtt.js')
		// 		// #ifdef H5  
		// 		let options = {
		// 			clientId: "H5_test",
		// 			connectTimeout: 600000,
		// 			clean: true
		// 		}
		// 		self.client = mqtt.connect('ws://idoer.top:8083/mqtt', options)
		// 		// #endif  
		// 		// #ifdef MP-WEIXIN||APP-PLUS  
		// 		let options = {
		// 			clientId: "APP_test",
		// 			connectTimeout: 600000,
		// 			clean: true
		// 		}
		// 		self.client = mqtt.connect('ws://idoer.top:8083/mqtt', options)
		// 		// #endif 

		// 		self.client.on('connect', function(res) {
		// 			uni.showToast({
		// 				title: "连接成功",
		// 				duration: 2000,
		// 				icon: "none"
		// 			})
		// 			self.client.subscribe(subscribe, function(err) {
		// 				if (!err) {
		// 					uni.showToast({
		// 						title: "订阅成功",
		// 						duration: 2000,
		// 						icon: "none"
		// 					})
		// 				}
		// 			})
		// 			//toppic是字符串，message是16进制字节流
		// 		}).on('message', function(topic, message) {
		// 			let msg=JSON.parse(message.toString());
		// 			console.log(msg);
		// 			self.Temp=msg.Temp;
		// 			self.Hum=msg.Hum;
		// 			self.Light=msg.Light;
		// 			self.Led=msg.Led;
		// 			self.Beep=msg.Beep;					
		// 		}).on('reconnect', function(topic, message) {
		// 			console.log("重连")
		// 		})
		// 	},

		// 	//控制开关
		// 	ledSwitch() {
		// 		let qtt = {}; //定义消息（可以为字符串，对象等）	
		// 		qtt.target = 'LED1';
		// 		qtt.cmd = '0';
		// 		this.client.publish('test', JSON.stringify(qtt), {
		// 			qos: 0,
		// 			retain: true
		// 		});
		// 		console.log("发布了一条命令");
		// 	}
		}
	}
</script>

<style>
	.ctrl {
		width: 90%;
		display: flex;
		flex-wrap: wrap;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 0 auto;
		margin-top: 60rpx;
	}

	.key {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;
		width: 100px;
		height: 120px;
		margin: 0 auto;
		cursor: pointer;
	}

	.img {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 75px;
		height: 80px;
		border-radius: 20px;
		box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2), -10px -10px 20px rgba(255, 255, 255, 1);
		transition: all 0.2s ease-out;
	}

	image {
		width: 60px;
		height: 60px;
		transition: all 0.2s ease-out;
	}

	text {
		color: #007AFF;
	}

	.imgpress {
		box-shadow: 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(255, 255, 255, 0.8), inset 18px 18px 30px rgba(0, 0, 0, 0.1), inset -18px -18px 30px rgba(255, 255, 255, 1);
	}

	.imagepress {
		width: 55px;
	}
</style>

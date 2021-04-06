<template>
	<view>
		<view class="screenBorder">
			<view class="screen">
				<view class="wrapper">
					<view class="display">
						<view id="time">
							{{time}}
						</view>
					</view>					
				</view>
				<view class="term">
					光照度: {{Light}}%
				</view>
				<view class="term">
					温度: {{Temp}}'C 湿度: {{Humi}}%
				</view>
			</view>
		</view>
		<view class="ctrl">
			<view class="key">
				<view class="img" hover-class="imgpress">
					<image src=''></image>
				</view>
				<text></text>
			</view>

			<view class="key">
				<view class="img" hover-class="imgpress">
					<image src='../../static/images/up.png'></image>
				</view>
				<text></text>
			</view>

			<view class="key">
				<view class="img" hover-class="imgpress">
					<image src=''></image>
				</view>
				<text></text>
			</view>

			<view class="key" @click="led_on()">
				<view class="img" hover-class="imgpress">
					<image src='../../static/images/left.png'></image>
				</view>
				<text></text>
			</view>

			<view class="key" @click="">
				<view class="img" hover-class="imgpress">
					<image src='../../static/images/on-off.png'></image>
				</view>
				<text>开关</text>
			</view>

			<view class="key" @click="led_off()">
				<view class="img" hover-class="imgpress">
					<image src='../../static/images/right.png'></image>
				</view>
				<text></text>
			</view>

			<view class="key">
				<view class="img" hover-class="imgpress">
					<image src=''></image>
				</view>
				<text></text>
			</view>

			<view class="key">
				<view class="img" hover-class="imgpress">
					<image src='../../static/images/down.png'></image>
				</view>
				<text></text>
			</view>

			<view class="key">
				<view class="img" hover-class="imgpress">
					<image src=''></image>
				</view>
				<text></text>
			</view>
		</view>
	</view>

</template>

<script>		
	export default {
		data() {
			return {
				//时间
				time: null,
				
				client: {},
				Temp:0,
				Humi:0,
				Light:0,
				Led:false,
				Beep:false
			}
		},
		onLoad: function(e) {
			let that = this;
			//获取时间
			setInterval(() => {
				let date = new Date();
				let hours = date.getHours();
				let minutes = date.getMinutes();
				let seconds = date.getSeconds();
				let day_night = "AM";
				if (hours > 12) {
					day_night = "PM";
					hours = hours - 12;
				}
				if (seconds < 10) {
					seconds = "0" + seconds;
				}
				if (minutes < 10) {
					minutes = "0" + minutes;
				}
				if (hours < 10) {
					hours = "0" + hours;
				}
				this.time = hours + ":" + minutes + ":" + seconds + " " + day_night;
			}, 200);
			//连接mqtt
			this.connect();
		},				
		methods: {
			connect() {
				let self = this
				let subscribe = "data"
				let mqtt = require('mqtt/dist/mqtt.js')
				// #ifdef H5  
				let options = {
					clientId: "H5_test",
					connectTimeout: 600000,
					clean: true
				}
				self.client = mqtt.connect('wss://idoer.top:8084/mqtt', options)
				// #endif  
				// #ifdef MP-WEIXIN||APP-PLUS  
				let options = {
					clientId: "APP_test",
					connectTimeout: 600000,
					clean: true
				}
				self.client = mqtt.connect('wxs://idoer.top:8084/mqtt', options)
				// #endif 
			
				self.client.on('connect', function(res) {
					console.log("服务器连接成功！")
					self.client.subscribe(subscribe, function(err) {
						if (!err) {
							uni.showToast({
								title: "订阅成功",
								duration: 2000,
								icon: "none"
							})
						}
					})
					//topic是字符串，message是16进制字节流
				}).on('message', function(topic, message) {
					let msg=JSON.parse(message.toString());
					console.log(msg);
					self.Temp=msg.Temp;
					self.Humi=msg.Humi;
					self.Light=msg.Light;
					self.Led=msg.Led;
					self.Beep=msg.Beep;					
				}).on('reconnect', function(topic, message) {
					console.log("重连")
				})
			},
			
			//控制开关
			led_on() {
				let self=this;
				let qtt = {}; //定义消息（可以为字符串，对象等）	
				qtt.LED_SW = 1;
				//qtt.cmd = 1;
				self.client.publish('ctrl', JSON.stringify(qtt), {
					qos: 0,
					retain: true
				});
				console.log("开灯");
			},
			//控制开关
			led_off() {
				let self=this;
				let qtt = {}; //定义消息（可以为字符串，对象等）	
				qtt.LED_SW = 0;
				//qtt.cmd = 0;
				self.client.publish('ctrl', JSON.stringify(qtt), {
					qos: 0,
					retain: true
				});
				console.log("关灯");
			}
		}
	}
</script>

<style>
	page {
		background-color: #efeeee;
	}

	.screenBorder {
		background-color: #14FFE9;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 95%;
		height: 400rpx;
		margin: 40rpx auto;
		border-radius: 20px;
		box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3), -10px -10px 20px rgba(255, 255, 255, 1);
		transition: all 0.2s ease-out;
	}

	.screen {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-direction: column;
		width: 95%;
		height: 90%;
		border-radius: 15px;
		background-color: black;
	}

	.wrapper {
		height: 100rpx;
		width: 360rpx;
		position: relative;
		background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
		border-radius: 10px;
		cursor: default;
		animation: animate 1.5s linear infinite;
	}

	.wrapper .display,
	.wrapper text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.wrapper .display {
		z-index: 999;
		height: 85rpx;
		width: 345rpx;
		background: #1b1b1b;
		border-radius: 6px;
		text-align: center;
	}

	#time,
	.term {
		line-height: 85rpx;
		color: #fff;
		font-size: 50rpx;
		font-weight: 600;
		letter-spacing: 1px;
		background: linear-gradient(135deg, #14ffe9, #ffeb3b, #ff00e0);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: animate 1.5s linear infinite;
	}

	@keyframes animate {
		100% {
			filter: hue-rotate(360deg);
		}
	}

	.t1,
	.t2 {
		height: 100%;
		width: 100%;
		border-radius: 10px;
		background: inherit;
	}

	.t1 {
		filter: blur(7px);
	}

	.t2 {
		filter: blur(20px);
	}

	.term {
		font-size: 45rpx;

	}

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

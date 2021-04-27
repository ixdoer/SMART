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
		<view class="selectBar">
			<view v-for="(room,index) in rooms" :key="index" :class="['option',roomNub==index?'selected':'']"
				@tap="roomNub=index">
				{{room}}
			</view>
		</view>

		<view class="roomBar">
			<view class="room" v-show="roomNub==0">

				<!--扫一扫功能 -->
				<view class="device scan">
					<image src="../../static/images/扫一扫.png" mode=""></image>
					<text>扫一扫</text>
				</view>

				<!-- 客厅 -->
				<view class="device light" v-for="(device,index) in devices" :key="index">
					<view class="deviceStatus">
						<image :src="device.status?device.onImgUrl:device.offImgUrl"></image>
						<text>{{device.name}}</text>
					</view>
					<view class="switch">
						<image class="switchImg" src="../../static/images/开关.png" mode=""></image>
						<view class="online" v-if="device.isOnline">
							<image class="onlineImg" src="../../static/images/点开.png" mode=""></image>
							<text class="onlineTxt">在线</text>
						</view>
						<view class="online" v-else>
							<image class="onlineImg" src="../../static/images/点关.png" mode=""></image>
							<text class="offlineTxt">离线</text>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 卧室 -->
		<view class="bedroom" v-show="roomNub==1">			
			<remote-ctl class="remoteCtl"></remote-ctl>
			<text>空调</text>
		</view>

		<!-- 厨房 -->
		<view class="" v-show="roomNub==2">
			C
		</view>
	</view>
	</view>

</template>

<script>
	import remoteCtl from '../../components/remote-ctl.vue'
	export default {
		components: {
			remoteCtl
		},
		data() {
			return {
				//时间
				time: null,

				client: {},
				Temp: 0,
				Humi: 0,
				Light: 0,
				Led: false,
				Beep: false,

				//房间编号
				roomNub: 0,
				rooms: ["客厅", "卧室", "厨房"],

				//客厅设备
				devices: [{
						name: '吊灯',
						status: true,
						isOnline: true,
						onImgUrl: '../../static/images/灯开.png',
						offImgUrl: '../../static/images/灯关.png',
					},
					{
						name: '音乐',
						status: false,
						isOnline: true,
						onImgUrl: '../../static/images/音乐开.png',
						offImgUrl: '../../static/images/音乐关.png',
					},
					{
						name: '电视',
						status: true,
						isOnline: false,
						onImgUrl: '../../static/images/电视关.png',
						offImgUrl: '../../static/images/电视关.png',
					},
					{
						name: '扫地机',
						status: false,
						isOnline: false,
						onImgUrl: '',
						offImgUrl: '../../static/images/扫地机.png',
					}
				]
			}
		},
		onShow: function(e) {
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
					let msg = JSON.parse(message.toString());
					console.log(msg);
					self.Temp = msg.Temp;
					self.Humi = msg.Humi;
					self.Light = msg.Light;
					self.Led = msg.Led;
					self.Beep = msg.Beep;
				}).on('reconnect', function(topic, message) {
					console.log("重连");
				})
			},

			//控制开关
			led_on() {
				let self = this;
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
				let self = this;
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
		background-color: #efefef;
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
		box-shadow: 0 10rpx 10rpx rgba(0, 0, 0, 0.3);
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
		font-size: 45rpx;
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

	.selectBar {
		background-color: white;
	}

	/* 房间选项 */
	.option {
		display: inline-block;
		margin: 35rpx 35rpx;
		padding-bottom: 10rpx;
	}

	/* 被选择的样式 */
	.selected {
		color: #455d89;
		border-bottom: 5rpx solid #364b8e;
	}

	.roomBar {}

	.room {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	/* 设备公共样式 */
	.device {
		width: 325rpx;
		height: 225rpx;
		margin: 25rpx auto;
		border-radius: 10rpx;
		background-color: white;
		box-shadow: 5rpx 5rpx 5rpx rgba(0, 0, 0, 0.2), -3rpx 0rpx 5rpx rgba(0, 0, 0, 0.2);
	}

	/* 扫一扫 */
	.scan {
		width: 700rpx;
		height: 180rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.scan image {
		width: 100rpx;
		height: 100rpx;
		margin-right: 40rpx;
	}

	/* 灯光 */
	.light {
		display: flex;
		justify-content: space-around;
	}

	.light .deviceStatus,
	.light .switch {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}


	.deviceStatus image {
		width: 100rpx;
		height: 100rpx;
		margin-bottom: 20rpx;
	}

	.switchImg {
		width: 70rpx;
		height: 70rpx;
		margin-bottom: 20rpx;
		box-shadow: 5rpx 5rpx 5rpx rgba(0, 0, 0, 0.2), -3rpx 0rpx 5rpx rgba(0, 0, 0, 0.2);
		border-radius: 20rpx;
		background-color: #eef9ff;
	}

	/* 设备在线状态 */
	.online {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.onlineImg {
		width: 15rpx;
		height: 15rpx;
		margin-right: 10rpx;
	}

	.online .onlineTxt {
		font-size: 30rpx;
		color: #d81e06;
	}

	.online .offlineTxt {
		font-size: 30rpx;
		color: #bfbfbf;
	}

	.remoteCtl {
		margin-top: 200rpx;
	}

	.bedroom text {
		display: block;
		width: 15%;
		margin: 0 auto;
		text-align: center;
	}
</style>

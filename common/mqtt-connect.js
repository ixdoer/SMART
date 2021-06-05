connect() {
	let self = this
	//订阅的主题
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
}

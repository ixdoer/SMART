<template>
	<view class="content">
		<view class="avatorWrapper">
			<view class="avator">
				<image class="img" src="../../static/images/logo.jpg" mode="widthFix"></image>
			</view>
			<text id="appname">{{title}}</text>
		</view>
		<view class="form">
			<view class="inputWrapper">
				<input class="input" type="text" value="" placeholder="请输入用户名" v-model="userName" />
			</view>
			<view class="inputWrapper">
				<input class="input" type="passWord" value="" placeholder="请输入密码" v-model="passWord" />
			</view>
			<view class="loginBtn" @tap="login">
				<text class="btnValue">登录</text>
			</view>
			<view class="forgotBtn">
				<text>找回密码?</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '智慧社区',
				userName: '',
				passWord: ''
			}
		},
		onLoad() {

		},
		methods: {
			login() {
				let userName = this.userName;
				let passWord = this.passWord;

				if (this.userName.trim() !== "Idoer" || this.passWord.trim() !== "123456") {
					uni.showToast({
						title: "用户不存在或密码错误！",
						icon: "none"
					})
				} else {
					uni.showToast({
						title: "登录成功",
						icon: "none"
					});
					setTimeout(() => {
						uni.switchTab({
							url: "../control/control"
						});						
					}, 1000);
					uni.setStorageSync("userName", this.userName);
					uni.setStorageSync("passWord", this.passWord);
				}
			}
		}
	}
</script>

<style>
	.content {
		background: #377EB4;
		width: 100vw;
		height: 100vh;
	}

	.avatorWrapper {
		height: 40vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.avator {
		width: 200upx;
		height: 200upx;
		overflow: hidden;
		border-radius: 35upx;
	}

	.avator .img {
		width: 100%
	}

	#appname {
		color: #ffaa00;
		font-size: 45rpx;

	}

	.form {
		padding: 0 100upx;
		margin-top: 25px;
	}

	.inputWrapper {
		width: 100%;
		height: 80upx;
		background: white;
		border-radius: 20px;
		box-sizing: border-box;
		padding: 0 20px;
		margin-top: 25px;
	}

	.inputWrapper .input {
		width: 100%;
		height: 100%;
		text-align: center;
		font-size: 15px;
	}

	.loginBtn {
		width: 100%;
		height: 80upx;
		background: #77B307;
		border-radius: 50upx;
		margin-top: 50px;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.loginBtn .btnValue {
		color: white;
	}

	.forgotBtn {
		text-align: center;
		color: #EAF6F9;
		font-size: 15px;
		margin-top: 20px;
	}
</style>

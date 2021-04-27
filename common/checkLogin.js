//检查用户登录
checkLogin = function(backpage, backtype) {
	let userId = uni.getStorageSync('userId');
	let userNumber = uni.getStorageSync('userNumber');
	le userName = uni.getStorageSync('userName');
	let userPhoto = uni.getStorageSync('userPhoto');
	if (userId == '' || userNumber == '' || userPhoto == '') {
		uni.redirectTo({
			url: "../login/login?backpage=" + backage + "&backtype=" + backtype
		});
		return false;
	}
	return [userId, userNumber, userName, userPhoto];
}
//服务器地址
serverUrl="http://www.idoer.top"
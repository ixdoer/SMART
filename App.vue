<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*图标库 */
	@import url("static/css/iconfont.css");

	/* 关掉滑动条 */
	::-webkit-scrollbar {
		display: none;
	}

	/*每个页面公共css */
	page {

		/* 为了解决页面底部在H5端被tabbar遮住 */
		padding-bottom: var(--window-bottom);

		/* 设置页面背景色 */
		background-color: #f5f6fa
	}
</style>

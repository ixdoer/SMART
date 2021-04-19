<template>
	<view class="tab-bar">
		<view class="tab-bar-border"></view>
		<view v-for="(item,index) in list" :key="index" class="tab-bar-item :class="item.heigher?'add':''" :data-path="item.pagePath"
		 :data-index="index" @tap="switchTab">
			<image :src="selected === index ? item.selectedIconPath : item.iconPath"></image>
			<view style="color: selected === index || item.heigher ? selectedColor : color">{{item.text}}</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				selected: 0,
				"color": "#a9b7b7",
				"selectedColor": "#000000",
				"borderStyle": "white",
				"list": [{
						"pagePath": "../community/community",
						"iconPath": "../../static/images/down.png",
						"selectedIconPath": "../../static/images/down.png",
						"text": "社区"
					}, {
						"pagePath": "../property/property",
						"iconPath": "../../static/images/down.png",
						"selectedIconPath": "../../static/images/down.png",
						"text": "物业"
					}, {
						"pagePath": "../control/control",
						"iconPath": "../../static/images/down.png",
						"selectedIconPath": "../../static/images/down.png",
						"text": "控制"
					}, {
						"pagePath": "../around/around",
						"iconPath": "../../static/images/down.png",
						"selectedIconPath": "../../static/images/down.png",
						"text": "周边"
					},
					{
						"pagePath": "pages/myinfo/myinfo",
						"iconPath": "../../static/images/down.png",
						"selectedIconPath": "../../static/images/down.png",
						"text": "我的"
					}
				]
			}

		},
		attached() {},
		methods: {
			switchTab(e) {
				const data = e.currentTarget.dataset
				const url = data.path
				this.setData({
					selected: data.index
				})
				uni.switchTab({
					url
				})
			}
		}
	}
</script>

<style>
	.tab-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 48px;
		background: white;
		display: flex;
		padding-bottom: env(safe-area-inset-bottom);
		z-index: 999;
	}

	.tab-bar-border {
		background-color: rgba(0, 0, 0, 0.205);
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 1px;
		transform: scaleY(0.5);
	}

	.tab-bar-item {
		flex: 1;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.tab-bar-item image {
		width: 27px;
		height: 27px;
	}

	.tab-bar-item view {
		font-size: 10px;
	}

	.add {
		margin-top: -20px;
	}

	.add image {
		width: 39px;
		height: 39px;
		padding: 2px;
		background-color: white;
		border-radius: 43px;
		z-index: 1000;
	}

	.add view {
		font-size: 13px;
	}
</style>

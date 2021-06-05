<template>
	<view class="container">
		<view class="circle">
			<view class="switch iconfont icon-kaiguan" >
				
			</view>
			<view class="list">
				<view class="list-item one">
					<view class="iconfont icon-shangxiazuoyouTriangle112" hover-class="press"></view>
				</view>

				<view class="list-item two">
					<view class="iconfont icon-shangxiazuoyouTriangle111" hover-class="press"></view>
				</view>

				<view class="list-item three">
					<view class="iconfont icon-shangxiazuoyouTriangle110" hover-class="press"></view>
				</view>

				<view class="list-item four">
					<view class="iconfont icon-shangxiazuoyouTriangle19" hover-class="press"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>

</script>

<style>
	/*	引入字体图标	 */
	@import url("../static/css/iconfont.css");

	.iconfont {
		color: #bfbfbf;
		font-size: 30px !important;		
	}

	.container {		
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}	

	/* 小圆环 */
	.circle {
		position: relative;
		width: 50px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.circle .switch {
		/* box-sizing: border-box; */
		width: 100%;
		height: 100%;
		border-radius: 50%;
		background-color: #fff;
		/* 用阴影实现3个px的边框 伪边框，不是真的边框 */
		box-shadow: 0 0 0 3px #000;
		z-index: 2;
		
		/* 开关字体图标大小 */
		color: #bfbfbf;		
		font-size: 40px !important;
		display: flex;
		justify-content: center;
		align-items: center;		
	}	

	/* 大圆环 */
	.circle .list {
		position: absolute;
		list-style: none;
		left: -50px;
		top: -50px;
		right: -50px;
		bottom: -50px;
		background-color: #fff;
		border-radius: 50%;
		border: 2px solid #000;
		box-shadow: 0 0 0 2px #fff;
		z-index: 1;
		overflow: hidden;
		/* 默认为旋转180度并且缩小为0 */
		transform: rotate(180deg) scale(0);
		transition: 0.3s ease-in-out;
	}
	
	/* 交叉线 */
	.circle .list::after,
	.circle .list::before {
		position: absolute;
		content: '';
		top: 50%;
		left: 50%;
		width: 110%;
		height: 2px;
		background-color: #000;
	}

	.circle .list::after {
		transform: translate(-50%, -50%) rotate(45deg);
	}

	.circle .list::before {
		transform: translate(-50%, -50%) rotate(-45deg);
	}

	/* 4个方向图标 */
	.circle .list-item {
		position: absolute;
		display: block;
		/* 这个地方需要定义一个高度宽度，又不然后面图标的变大缩小无法实现*/
		width: 30px;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.circle .one {
		left: 10px;
		top: 50%;
		transform: translateY(-50%);
	}

	.circle .two {
		top: 8px;
		left: 50%;
		transform: translateX(-50%);
	}

	.circle .three {
		right: 10px;
		top: 50%;
		transform: translateY(-50%);
	}

	.circle .four {
		bottom: 8px;
		left: 50%;
		transform: translateX(-50%);
	}

	/* 开关点击效果 */
	.circle:hover .list {
		transform: rotate(0deg) scale(1.5);
		color: #EC3E27;
	}

	/* 控制按钮点击效果 */
	.list .press {
		position: absolute;
		transform: scale(1.25);
		color: #EC3E27;
	}
</style>

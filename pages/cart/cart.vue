<template>
	<view>
		<view class="topview colonn">
			<view class="roww fs-27 p-all-30" style="color: white">
				<view>重盈服饰</view>
				<view class="allline"></view>
				<view>编辑</view>
			</view>
		</view>

		<view class="goodviwe colonn">
			<view class="roww center_center" v-for="(item,index) in 25">
				<image src="/static/check@2x.png" class="w-35 h-35"></image>
				<view class="w-25"></view>
				<image class="w-172 h-172 br-20" style="background-color: #8c9198"></image>
				<view class="w-22"></view>
				<view class="colonn m-bottom-25 m-top-25">
					<view class="goodname txtShowLength1">女装专柜代购女装专柜代购女装专柜代购女装专柜代购2021秋装新款国内 真丝衬衣女长袖桑蚕丝</view>
					<view class="h-10"></view>
					<view class="huanhang">
						<view class="spaceview">这里是显示商品的规格</view>
					</view>
					<view class="h-10"></view>
					<view class="roww">
						<view class="roww duiqi" style="font-weight: bold;">
							<view class="fs-25">￥</view>
							<view class="fs-35">29.00</view>
						</view>
						<view class="allline"></view>
						<view class="countviiew roww">
							<view class="jiajianbtn">-</view>
							<view class="fs-30 allline" style="text-align: center;">123</view>
							<view class="jiajianbtn">+</view>
						</view>
					</view>
				</view>
			</view>
		</view>
			<view class="h-150"></view>

		<view class="bottomvoew roww center_center">
			<view class="w-28"></view>
			<view class="roww center_center">
				<image src="/static/no_check@2x.png" class="w-35 h-35"></image>
				<view class="w-20"></view>
				<view class="fs-30">全选</view>
			</view>
			<view class="w-75"></view>
			<view class="hejis">合计:￥398</view>
			<view class="allline"></view>
			<view class="tosub" @click="toSuborder">去结算</view>
			<view class="w-28"></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		toSuborder(){
			uni.navigateTo({
				url:"/pages2/subOrder/subOrder"
			})
		}
	}
};
</script>

<style>
@import url(cart.css);
</style>

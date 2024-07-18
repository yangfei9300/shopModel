<template>
	<view>
		<view class="roww toptype rowsa center_center">
			<view class="pore h-78 colonn center_center" @click.stop="statusIndexClick(index)" v-for="(item, index) in orderStatus">
				<block v-if="statusIndex == index">
					<view style="line-height: 70rpx; color: #f83d47; font-weight: bold">{{ item }}</view>
					<view class="hxian"></view>
				</block>
				<block v-else>
					<view style="line-height: 70rpx">{{ item }}</view>
					<view class="hxian yincang1"></view>
				</block>
			</view>
		</view>

		<view class="orderitemview colonn">
			<view v-for="(item, index) in 4" class="roww border_bottom p-bottom-20" style="margin: 27rpx 30rpx">
				<image class="goodimg"></image>
				<view class="w-32"></view>
				<view class="colonn">
					<view class="roww w-450">
						<view class="goodname txtShowLength1">
							冬天加厚门殿子冬季保暖挡 冬天加厚门殿子冬季 冬天加厚门殿子冬季保暖挡 冬天加厚门殿子冬季保暖挡 冬天加厚门殿子冬季...
						</view>
						<view class="allline"></view>
						<view style="color: #f83d47" class="fs-30" v-if="index == 0">待付款</view>
					</view>
					<view class="roww center_center">
						<view class="spacename">所选择规格</view>
						<view class="allline"></view>
						<view class="colonn">
							<view>2900</view>
							<view class="roww">
								<view class="allline"></view>
								<view class="spacename">x1</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="roww p-all-20">
				<view class="allline"></view>
				<view class="quxiaoorder" @click="alertClick">取消订单</view>
				<view class="tomoney">去付款</view>
				<view class="tomoney" @click.stop="toOrderInfo">查看详情</view>
			</view>
		</view>

		<view class="huuibeijing colonn center_center" v-if="alert">
			<view class="shouhuoalerr colonn center_center">
				<view class="alerttitle">确认收到货了吗？</view>
				<view class="h-70"></view>
				<view class="alerttxt">为保证你的权益，请收到商品确认无误后再 确认收货</view>
				<view class="h-70"></view>
				<view class="roww rowsa w-500">
					<view class="quxiaoaa">取消</view>
					<view class="subtruebtm" @click.stop="alertClick">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			orderStatus: ['全部', '待付款', '待发货', '待收货', '已完成'],
			statusIndex: 0,
			alert:false,
		};
	},
	methods: {
		alertClick(){
			this.alert=!this.alert;
		},
		statusIndexClick(index) {
			this.statusIndex = index;
		},
		toOrderInfo() {
			uni.navigateTo({
				url: '/pages1/orderInfo/orderInfo'
			});
		}
	}
};
</script>

<style>
@import url(myOrder.css);
</style>

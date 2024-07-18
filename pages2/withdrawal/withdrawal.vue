<template>
	<view>
		<view class="colonn p-all-40">
			<view>提现方式</view>
			<view class="h-25"></view>
			<view class="roww">
				<view class=" roww rowsa center_center"
				:class="{
					'paytypeview':payType==1,
					'noselmoneview':payType==2,
				}"
				@click.stop="payTypeClick(1)"
				>
					<image src="/static/tx_wx@2x.png" class="w-42 h-42"></image>
					<view class="w-15"></view>
					<view>微信</view>
				</view>
				<view class="w-30"></view>
				<view class=" roww rowsa center_center"
				:class="{
					'paytypeview':payType==2,
					'noselmoneview':payType==1,
				}"
				@click.stop="payTypeClick(2)"
				>
					<image src="/static/tx_zfb@2x.png" class="w-42 h-42"></image>
					<view class="w-15"></view>
					<view>支付宝</view>
				</view>
			</view>
			<view class="h-60"></view>
			<view>提现金额</view>
			<view class="h-32"></view>
			<view class="roww center_center border_bottom p-bottom-20">
				<view style="font-weight: bold;font-size: 50rpx;">￥</view>
				<view class="w-25"></view>
				<input placeholder="请输入" class="allline fw-700 fs-40" />
			</view>
			<view class="h-133"></view>
			<view class="roww center_center">
				<view class="btntoxaom">立即提现</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				payType:1,
			}
		},
		methods: {
			payTypeClick(index){
				this.payType=index;
			},
		}
	}
</script>

<style>
@import url(withdrawal.css);
</style>

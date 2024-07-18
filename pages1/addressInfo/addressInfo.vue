<template>
	<view>
		<view class="colonn">
			<view class="roww border_bottom p-bottom-30" 
			style="margin:30rpx 54rpx;">
				<view>收货人：</view>
				<input placeholder="请输入收货人" />
			</view>
			<view class="roww border_bottom p-bottom-30"
			style="margin:30rpx 54rpx;">
				<view>手机号：</view>
				<input placeholder="请输入手机号" />
			</view>
			<view class="roww border_bottom p-bottom-30"
			style="margin:30rpx 54rpx;">
				<view>省市区：</view>
				<input placeholder="请输入省市区" />
			</view>
			<view class="roww border_bottom p-bottom-30"
			style="margin:30rpx 54rpx;">
				<view>详细地址：</view>
				<input placeholder="请输入详细地址" />
			</view>
			<view class="roww border_bottom p-bottom-30"
			style="margin:30rpx 54rpx;">
				<view>设为默认地址：</view>
				<view class="allline"></view>
				<image src="/static/dz_kai@2x.png" mode="widthFix" class="w-57 "></image>
			</view>
			<view class="roww center_center">
				<view class="subbtn">保存</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url(addressInfo.css);
</style>

<template>
	<view>
		<view class="colonn">
			<view class="roww border_bottom inputview center_center">
				<view>头像</view>
				<view class="allline"></view>
				<image src="/static/wd_gr@2x.png" class="w-110 h-110"></image>
			</view>
			<view class="roww border_bottom inputview">
				<view>姓名</view>
				<view class="w-20"></view>
				<input class="allline inoutal"  placeholder="请输入姓名"/>
			</view>
			<view class="roww border_bottom inputview">
				<view>手机号</view>
				<view class="w-20"></view>
				<input class="allline inoutal"  placeholder="请输入手机号"/>
			</view>
			<view class="roww w-750 background1">
				<view class="colonn  border_bottom inputview center_center">
					<view>微信收款码</view>
					<view class="h-20"></view>
					<image mode="aspectFill" src="/static/1721233392382.png" class="w-300 h-550"></image>
				</view>
				<view class="colonn border_bottom inputview center_center">
					<view>支付宝收款码</view>
					<view class="h-20"></view>
					<image mode="aspectFill"  src="/static/1721233392382.png"  class="w-300 h-550"></image>
				</view>
			</view>
		</view>
		
		<view class="roww">
			<view class="subbtnn">立即提交</view>
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
@import url(userInfo.css);
</style>

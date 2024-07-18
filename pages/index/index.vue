<template>
	<view>
		<view class="colonn w-750 h-422 pore">
			<image src="/static/tioimg.png" class="w-750"></image>
			<view class="colonn poab" style="top: 0rpx;" >
				<view class="titlee">想到商城</view>
				<view class="h-25"></view>
				<view class="roww">
					<view class="sousuo roww center_center">
						<image src="/static/home_sousuo@2x.png" class="w-35 h-35"></image>
						<view class="w-10"></view>
						<view style="color: #B2B2B2;line-height: 35rpx;">大家都在搜索数码相机</view>
					</view>
				</view>
			</view>
		</view>
		<swiper class="w-710 swipee h-240">
			<swiper-item  class="w-710 h-240">
				<image src="/static/banner@2x.png" 
				 class="w-710 h-240"> </image>
			</swiper-item>
		</swiper>
		<view class="h-15"></view>
		<view class="huanhang m-all-20 p-bottom-20 br-20" 
		style="background-color: white;">
			<view class="colonn center_center m-top-20" 
			style="width: 177.5rpx;" 
			v-for="(item,index) in 8">
				<image src="/static/imgone@2x.png" class="w-110 h-110"></image>
				<view class="h-10"></view>
				<view>上衣</view>
			</view>
		</view>
		<view class="colonn p-all-20">
			<view class="fw-600">极速推荐</view>
			<view class="colonn ">
				<goodItem v-for="(item,index) in 5"
				
				></goodItem> 
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			toInfo(){
				uni.navigateTo({
					url:"/pages2/goodInfo/goodInfo"
				})
			}
		}
	}
</script>

<style>
	@import url(index.css);
</style>

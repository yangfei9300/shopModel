<template>
	<view>
		<view class="colonn center_center">
			<view class="h-180"></view>
			<image 
			:src="BASE_IMG+shopInfo.logo"
			 mode="aspectFill" class="w-150 h-150"></image>
			<view class="h-30"></view>
			<view class="title">{{shopInfo.shopName}}</view>
			<view class="h-90"></view>
			<view class="colonn w-600">
				<!-- <view>公司名称：{{shopInfo.shopName}}</view> -->
				<!-- <view class="h-21"></view> -->
				<view>联系人：{{shopInfo.userName}}</view>
				<view class="h-21"></view>
				<view>联系电话：{{shopInfo.phone}}</view>
				<view class="h-21"></view>
				<view>公司地址：{{shopInfo.address}}</view>
				<!-- <view class="h-21"></view>
				<view>客服电话：{{shopInfo.address}}</view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shopInfo:[],
				BASE_IMG:"",
			}
		},
		onLoad() {
			this.BASE_IMG=this.$paths.BASE_IMG;
			this.getShopInfo();
		},
		methods: {
			getShopInfo(){
				var data = {
					'deptId':getApp().globalData.deptId
				};
				this.$axios
					.axios('POST', this.$paths.getShopInfo, data)
					.then(res => {
						this.shopInfo=res.data;
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
		}
	}
</script>

<style>
@import url(aboutUs.css);
</style>

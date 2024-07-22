<template>
	<view>
		<view class="colonn">
			<view class="couview roww" v-for="(item,index) in coupons">
				<view class="leftvuew colonn center_center">
					<view class="roww bottom">
						<view class="fs-30" style="position: relative; bottom: 5rpx">￥</view>
						<view class="fs-45" v-if="item.type==1">{{item.money}}</view>
						<view class="fs-45" v-if="item.type==2">{{item.discount}}折</view>
					</view>  
					<view class="fs-20" v-if="item.type==1">满减券</view>
					<view class="fs-20" v-if="item.type==2">折扣券</view>
				</view>
				<view class="colonn rowsa"
				style="padding:20rpx 0rpx;"
				>
					<view class="righttext">适用于单笔订单满{{item.minimumAmount}}元使用</view>
					<view class="rightline"></view>
					<view class="roww">
						<view class="rightbottom">{{item.endDate}}前有效</view>
						<view class="allline"></view>
						<view class="fs-25" style="color: #E70422;" @click.stop="lingqu(item)"> 点击领取 </view>
					</view>
				</view>
			</view>
			<view class="h-20"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				coupons:[]
			}
		},
		onLoad() {
			this.getCouons();
		},
		methods: {
			lingqu(item){
				var data = {
					'deptId': getApp().globalData.deptId,
					'cId':item.id,
					'cCode':item.id,
					'uId':uni.getStorageSync("userInfo").id,
				};
				this.$axios
					.axios('POST', this.$paths.addCouponById, data)
					.then(res => {
						if(res.code==200){
							this.$tools.showToast("领取成功");
						}else{
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			// 获取优惠券列表
			getCouons(){
				var data = {
					'deptId':getApp().globalData.deptId
				};
				this.$axios
					.axios('POST', this.$paths.getcouponList, data)
					.then(res => {
						this.coupons=res.data;
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			}
		}
	}
</script>

<style>
@import url(lingCOupons.css);
</style>

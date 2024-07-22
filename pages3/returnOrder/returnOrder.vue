<template>
	<view>
		<view v-for="(item1, index1) in orderInfo.orderItems" class="roww border_bottom p-bottom-20" style="margin: 27rpx 30rpx">
			<image class="goodimg" :src="BASE_IMG + item1.productImg"></image>
			<view class="w-32"></view>
			<view class="colonn">
				<view class="roww w-450">
					<view class="goodname txtShowLength1">
						{{ item1.productName }}
					</view>
					<view class="allline"></view>
					<view style="color: #f83d47" class="fs-30">
						
						<block v-if="orderInfo.status==1">待付款</block>
						<block v-if="orderInfo.status==2">待发货</block>
						<block v-if="orderInfo.status==3">待收货</block>
						<block v-if="orderInfo.status==4">待评价</block>
						<block v-if="orderInfo.status==5">已完成</block>
						<block v-if="orderInfo.status==6">已取消</block>
						<block v-if="orderInfo.status==7">退款中</block>
						<block v-if="orderInfo.status==8">退款成功</block>
					</view>
				</view>
				<view class="roww center_center">
					<view class="spacename">规格：{{ item1.specsName }}</view>
					<view class="allline"></view>
					<view class="colonn">
						<view>￥{{ item1.specsPrice }}</view>
						<view class="roww">
							<view class="allline"></view>
							<view class="spacename">x{{ item1.quantity }}</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="colonn center_center">
			<view class="colonn bottomview">
				<view class="p-all-20">
					<textarea 
					v-model="form.refundReason"
					auto-height 
					placeholder-class="fs-28" 
					class="fs-28 w-600" 
					maxlength="500" 
					placeholder="宝贝不能满足您的要求吗？您在此处写出它的不足吧！"></textarea>
				</view>
			</view>
			<view class="roww center_center">
				<view class="subbtn" @click.stop="toSubmit">提交</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			orderInfo:{},
			BASE_IMG:"",
			form:{
				'orderId':'',
				'refundReason':'',
				'uId':'',
				'deptId':'',
			}
		}
	},
	onLoad() {
		this.BASE_IMG = this.$paths.BASE_IMG;
		this.orderInfo=uni.getStorageSync("orderInfo")
	},
	methods: {
		
		isSubmit(){
			if(this.form.refundReason==""){
				this.$tools.showToast("请填写退款原因");
				return false;
			}
			return true;
		},
		toSubmit(){
			if(!this.isSubmit()){
				
				return false;
			}
			var data=this.form;
			data.uId=uni.getStorageSync("userInfo").id;
			data.orderId=this.orderInfo.id;
			this.$axios
				.axios('POST', this.$paths.returnOrderMoneyByUid, data)
				.then(res => {
					if(res.code==200){
						this.$tools.showToast(res.msg);
						setTimeout(res=>{
							uni.navigateBack({
								delta:1
							})
						},1000)
					}else{
						this.$tools.showToast(res.msg);
					}
				})
				.catch(err => {
					console.log('错误回调', err);
				});
		}
	}
}
</script>

<style>
@import url(returnOrder.css);
</style>
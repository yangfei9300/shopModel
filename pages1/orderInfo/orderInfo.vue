<template>
	<view>
		<view class="topview"></view>
		<view class="addressview roww center_center">
			<view class="w-33"></view>
			<image src="/static/dingwei.png" class="w-50 h-50"></image>
			<view class="w-20"></view>
			<view class="allline colonn">
				<view class="roww">
					<view>{{ orderInfo.addressName }}</view>
					<view class="w-30"></view>
					<view>{{ orderInfo.addressPhone }}</view>
				</view>
				<view class="h-15"></view>
				<view class="addressinfotxt">{{ orderInfo.address }} {{ orderInfo.addressInfo }}</view>
			</view>
			<image src="/static/youjiantou.png" class="w-40 h-40"></image>
			<view class="w-25"></view>
		</view>

		<view class="colonn orderview" v-if="orderInfo.params">
			<view v-for="(item, index) in orderInfo.params.ordersInfoss" class="roww border_bottom p-bottom-20" style="margin: 27rpx 30rpx">
				<image :src="BASE_IMG + item.specsImg" mode="aspectFill" class="goodimg"></image>
				<view class="w-32"></view>
				<view class="colonn rowsb">
					<view class="roww w-450">
						<view class="goodname txtShowLength1">
							{{ item.productName }}
						</view>
						<view class="allline"></view>
						<view class="fs-30 roww center_center duiqi bottom111">
							<view class="fs-20 pore" style="bottom: -10rpx">￥</view>
							<view class="fs-40">{{ item.specsPrice }}</view>
						</view>
					</view>
					<view class="roww">
						<view class="spacename fs-20">已选:{{ item.specsName }}</view>
					</view>
					<view>x{{ item.quantity }}</view>
				</view>
			</view>
		</view>

		<view class="orderinfoview colonn">
			<view class="ddtxt border_bottom" style="padding: 0rpx 32rpx 25rpx 32rpx">订单信息</view>
			<view class="roww border_bottom" style="padding: 25rpx 32rpx">
				<view>订单编号</view>
				<view class="allline1"></view>
				<view>{{ orderInfo.orderNumber }}</view>
			</view>
			<view class="roww border_bottom" style="padding: 25rpx 32rpx">
				<view>订单总金额</view>
				<view class="allline1"></view>
				<view>{{ orderInfo.totalAmount }}</view>
			</view>
			<view class="roww border_bottom" style="padding: 25rpx 32rpx">
				<view>优惠金额</view>
				<view class="allline1"></view>
				<view>{{ orderInfo.couponMoney }}</view>
			</view>
			<view class="roww border_bottom" style="padding: 25rpx 32rpx">
				<view>实际支付</view>
				<view class="allline1"></view>
				<view>{{ orderInfo.endMoney }}</view>
			</view>

			<view class="roww border_bottom" style="padding: 25rpx 32rpx">
				<view>订单状态</view>
				<view class="allline1"></view>
				<view>
					<block v-if="orderInfo.status == 1">待付款</block>
					<block v-if="orderInfo.status == 2">待发货</block>
					<block v-if="orderInfo.status == 3">待收货</block>
					<block v-if="orderInfo.status == 4">待评价</block>
					<block v-if="orderInfo.status == 5">已完成</block>
					<block v-if="orderInfo.status == 6">已取消</block>
					<block v-if="orderInfo.status == 7">退款中</block>
					<block v-if="orderInfo.status == 8">退款成功</block>
				</view>
			</view>
		</view>

		<view class="orderinfoview colonn">
			<view class="ddtxt border_bottom" style="padding: 0rpx 32rpx 25rpx 32rpx">物流信息</view>
			<view class="roww border_bottom" style="padding: 25rpx 32rpx">
				<view>物流名称</view>
				<view class="allline1"></view>
				<view>{{ orderInfo.logisticsName ? orderInfo.logisticsName : '暂无' }}</view>
			</view>
			<view class="roww border_bottom" style="padding: 25rpx 32rpx">
				<view>物流编号</view>
				<view class="allline1"></view>
				<view>{{ orderInfo.logisticsCode ? orderInfo.logisticsCode : '暂无' }}</view>
			</view>
		</view>
		
		
		<view class="orderinfoview colonn" v-if="orderInfo.params&&orderInfo.params.returnInfos">
			
			<view class="ddtxt border_bottom" 
			style="padding: 0rpx 32rpx 25rpx 32rpx">退款信息</view>
			
			<block  v-for="(item,index) in orderInfo.params.returnInfos">
				<view class="roww border_bottom" 
				style="padding: 25rpx 32rpx">
					<view>{{index+1}}.退款原因</view>
					<view class="allline1"></view>
					<view class="w-450">{{ item.refundReason  }}</view>
				</view>
				<view class="roww border_bottom" 
				style="padding: 25rpx 32rpx">
					<view>处理结果</view>
					<view class="allline1"></view>
					<view class="w-450">{{ item.return_result ? item.return_result : '还在紧急处理中' }}</view>
				</view>
			</block>
			
			
		</view>
		

		<view class="h-100"></view>

		<view class="bottomview roww center_center">
			<view class="allline"></view>
			<!-- <view class="quxiaoorder">取消订单</view>
			<view class="tomoney">去付款</view>
			<view class="tomoney">查看详情</view>
			<view class="w-20"></view>、
			 -->

			<view class="quxiaoorder" v-if="orderInfo.status == 2" @click="toRerturn(orderInfo)">退款</view>

			<view class="tomoney" v-if="orderInfo.status == 1">去付款</view>
			<view class="tomoney" @click.stop="confirmOrder(orderInfo, 5)" v-if="orderInfo.status == 3">确认收货</view>
			<view class="tomoney" @click.stop="confirmOrder(orderInfo, 6)" v-if="orderInfo.status == 1">取消订单</view>
			<view class="w-20"></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			orderInfo: {},
			BASE_IMG: ''
		};
	},
	onLoad(options) {
		this.BASE_IMG = this.$paths.BASE_IMG;
		this.options = options;
		this.getOrderInfo(options);
	},
	methods: {
		//确定订单
		confirmOrder(item, status) {
			var data = {
				uId: uni.getStorageSync('userInfo').id,
				id: item.id
			};
			data.status = status;
			this.$axios
				.axios('POST', this.$paths.confirmOrder, data)
				.then((res) => {
					if (res.code == 200) {
						this.$tools.showToast('操作成功');
						setTimeout((res) => {
							this.getOrderInfo();
						}, 1000);
					} else {
						this.$tools.showToast(res.msg);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		toRerturn(item) {
			var data = {
				id: item.id,
				uId: item.uId
			};

			this.$axios
				.axios('POST', this.$paths.returnOrderByuid, data)
				.then((res) => {
					if (res.code == 200) {
						this.$tools.showToast('退款成功');
						console.log('asd', res);
						setTimeout((res) => {
							this.getOrderInfo();
						}, 1000);
					} else {
						this.$tools.showToast(res.msg);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},

		getOrderInfo() {
			var data = {
				id: this.options.id
			};

			this.$axios
				.axios('POST', this.$paths.getordersInfo, data)
				.then((res) => {
					var orderInfo = res.data;
					this.orderInfo = orderInfo;
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		}
	}
};
</script>

<style>
@import url(orderInfo.css);
</style>

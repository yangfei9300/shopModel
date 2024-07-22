<template>
	<view>
		<view class="roww toptype rowsa center_center">
			<view class="pore h-78 colonn center_center" @click.stop="statusIndexClick(index)"
				v-for="(item, index) in orderStatus">
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
<view class="h-80"></view>
		<view class="orderitemview colonn" v-for="(item, index) in orderList"
		
		>
			<view v-for="(item1,index1) in item.orderItems" class="roww border_bottom p-bottom-20"
			
				style="margin: 27rpx 30rpx">
				<image class="goodimg" :src="BASE_IMG+item1.productImg"></image>
				<view class="w-32"></view>
				<view class="colonn">
					<view class="roww w-450">
						<view class="goodname txtShowLength1">
							{{item1.productName}}
						</view>
						<view class="allline"></view>
						<view style="color: #f83d47" class="fs-30" >
							<block v-if="item.status==1">待付款</block>
							<block v-if="item.status==2">待发货</block>
							<block v-if="item.status==3">待收货</block>
							<block v-if="item.status==4">待评价</block>
							<block v-if="item.status==5">已完成</block>
							<block v-if="item.status==6">已取消</block>
							<block v-if="item.status==7">退款中</block>
							<block v-if="item.status==8">退款成功</block>
						</view>
					</view>
					<view class="roww center_center">
						<view class="spacename">规格：{{item1.specsName}}</view>
						<view class="allline"></view>
						<view class="colonn">
							<view>￥{{item1.specsPrice}}</view>
							<view class="roww">
								<view class="allline"></view>
								<view class="spacename">x{{item1.quantity}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="roww duiqi">
				<view class="allline2"></view>
				<view>合计</view>
				<view class="roww duiqi" style="color: #CF392A;">
					<view class="fs-25">￥</view>
					<view class="fs-40">{{item.endMoney}}</view>
				</view>
				<view class="w-20"></view>
			</view>
			<view class="roww p-all-20">
				<view class="allline"></view>
				<!-- <view class="quxiaoorder" v-if="item.status==1" @click="alertClick">删除订单</view> -->
				<!-- <view class="quxiaoorder" v-if="item.status==2" @click="alertClick">取消订单</view> -->
				
				<view class="quxiaoorder" v-if="item.status==2"
				@longtap="toOrderreturn(item)"
				 @click="toRerturn(item)">申请退款</view>
				
				<view class="tomoney"  v-if="item.status==1"
				 @click.stop="payOrderByIdTo(item)">去付款</view>
				<view class="tomoney" @click.stop="confirmOrder(item,5)"  v-if="item.status==3">确认收货</view>
				<view class="tomoney" @click.stop="confirmOrder(item,6)"  v-if="item.status==1">取消订单</view>
				
				
				
				<view class="tomoney"@click.stop="orderInfoTo(item)">查看详情</view>
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
				// 1.待支付2.待发货3待收货4待评价5已完成6已取消7已退款
				orderStatus: ['全部', '待付款', '待发货', '待收货', '已完成'],
				statuctxt: ['','待付款', '待发货', '待收货','已完成','已取消','已退款'],
				statusIndex: 0,
				alert: false,
				orderList: []
			};
		},
		onLoad(options) {
			if(options.index){
				this.statusIndex=parseInt(options.index)
			}else{
				this.statusIndex=0
			}
			
			this.BASE_IMG = this.$paths.BASE_IMG;
			
		},
		onShow() {
			this.getorder();
		},
		methods: {
			toOrderreturn(item){
				uni.setStorageSync("orderInfo",item);
				uni.navigateTo({
					url:"/pages3/returnOrder/returnOrder"
				})
			},
			payOrderByIdTo(item){
				var data = {
					'uId': uni.getStorageSync("userInfo").id,
					'id':item.id
				};
				
				this.$axios
					.axios('POST', this.$paths.payOrderById, data)
					.then(res => {
						if(res.code==200){
							this.$tools.showToast("支付成功");
							setTimeout(res=>{
								this.getorder();
								console.log("支付",)
							},1000)
						}else{
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			
			orderInfoTo(item){
				uni.navigateTo({
					url:"/pages1/orderInfo/orderInfo?id="+item.id
				})
			},
			getorder() {
				var data = {
					'uId': uni.getStorageSync("userInfo").id
				};
				if (this.statusIndex != 0&&this.statusIndex!=4) {
					data.status = this.statusIndex;
				}else if(this.statusIndex==4){
					data.status = "5";
				}
				this.$axios
					.axios('POST', this.$paths.getorders, data)
					.then(res => {
						this.orderList = res.data;
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			//确定订单
			confirmOrder(item,status) {
				var data = {
					'uId': uni.getStorageSync("userInfo").id,
					'id':item.id
				};
				data.status = status;
				this.$axios
					.axios('POST', this.$paths.confirmOrder, data)
					.then(res => {
						if(res.code==200){
							this.$tools.showToast("操作成功")
							setTimeout(res=>{
								this.getorder()
							},1000)
						}else{
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			toRerturn(item){
				uni.setStorageSync("orderInfo",item);
				uni.navigateTo({
					url:"/pages3/returnOrder/returnOrder"
				})
				return false;
				
				var data = {
						id:item.id,
						'uId':item.uId
					};
					
					this.$axios
						.axios('POST', this.$paths.returnOrderByuid, data)
						.then(res => {
							if(res.code==200){
								this.$tools.showToast("退款成功")
								console.log("asd",res)
								setTimeout(res=>{
									this.getorder()
								},1000)
							}else{
								this.$tools.showToast(res.msg);
							}
						})
						.catch(err => {
							console.log('错误回调', err);
						});
			},
			


			alertClick() {
				this.alert = !this.alert;
			},
			statusIndexClick(index) {
				this.statusIndex = index;
				this.getorder();
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
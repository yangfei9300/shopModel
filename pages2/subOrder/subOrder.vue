<template>
	<view>
		<view class="topview"></view>
		<view class="addressview roww center_center"
		@click.stop="toaddress" v-if="addressInfo"
		>
			<view class="w-33"></view>
			<image src="/static/dingwei.png" class="w-50 h-50"></image>
			<view class="w-20"></view>
			<view class="allline colonn">
				<view class="roww">
					<view>{{addressInfo.name}}</view> 
					<view class="w-30"></view>
					<view>{{addressInfo.phone}}</view>
				</view>
				<view class="h-15"></view>
				<view class="addressinfotxt">
				{{addressInfo.province}}  {{addressInfo.city}}  {{addressInfo.area}}	{{addressInfo.address}}
				</view>
			</view>
			<image src="/static/youjiantou.png" class="w-40 h-40"></image>
			<view class="w-25"></view>
		</view>
		<view class="addressview roww center_center"
		@click.stop="toaddress" v-else
		>
			<view class="w-33"></view>
			<image src="/static/dingwei.png" class="w-50 h-50"></image>
			<view class="w-20"></view>
			<view class="allline colonn">
				请选择地址
			</view>
			<image src="/static/youjiantou.png" class="w-40 h-40"></image>
			<view class="w-25"></view>
		</view>
		
		<view class="goodview colonn">
			<view class="roww p-all-29" v-for="(item,index) in goodList">
				<image :src="BASE_IMG+item.productImg" mode="aspectFill" class="goodimg"></image>
				<view class="w-20"></view>
				<view class="colonn rowsb">
					<view class="goodname txtShowLength1">{{item.productName}}
					</view>
					<view class="huanhang">
						<view class="goodspaces baisee">{{item.specsName}}</view>
					</view>
					<view class="roww duiqi">
						<view style="color: #FF0000;">￥{{item.specsPrice}}</view>
						<view class="allline"></view>
						<view class="fs-25">x{{item.quantity}}</view>
					</view>
				</view>
			</view>
			<view class="roww fs-25 p-all-20" style="color: #999999;">
				<view>运费</view>
				<view class="allline"></view>
				<view>免运费</view>
			</view>
			
			<view class="roww fs-30 " 
			style="color: #999999;border-top: 1px solid #f5f5f5;padding-top:20rpx;">
				<view class="allline "></view>
				<view>共计{{countGood}}件商品</view>
				<view class="w-20"></view>
				<view>总计：</view>
				<view style="color: #FF0000;">￥{{allMoney}}</view>
				<view class="w-25"></view>
			</view>
			<view class="h-20"></view>
		</view>
		
		<view class="subpay roww center_center">
			<view>支付方式</view>
			<view class="allline"></view>
			<image src="/static/check@2x.png" 
			class="selicon"></image>
			<view class="w-20"></view>
			<view>余额支付</view>
		</view>
		<view class="subpay roww center_center" @click="toSelCOupon">
			<view>优惠券</view>
			<view class="allline"></view>
			<view v-if="couponInfo">{{couponInfo.params.NAME}} ></view>
			<view v-else>请选择优惠券 ></view>
		</view>
		<view class="subpay roww center_center">
			<view>备注</view>
			<view class="allline"></view>
			<view >
				<input class="ordrbeiz" v-model="remoake" placeholder="请输入订单备注" />
			</view>
		</view>
		
		<view class="bottomview roww center_center">
			<view class="w-20"></view>
			<view>合计</view>
			<view class="w-15"></view>
			<view style="color: #FF8F1C;">￥{{allMoneyEnd}}</view>
			<view class="allline1"></view>
			<view class="suborder" @click.stop="toOrder">提交订单</view>
			<view class="w-20"></view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodList:[],
				BASE_IMG:"",
				addressInfo:null,
				couponInfo:null,
				allMoney:0,
				allMoneyEnd:0,
				countGood:0,
				remoake:""
			}
		},
		onLoad() {
			uni.removeStorageSync("couponInfo")
			this.BASE_IMG=this.$paths.BASE_IMG
			this.goodList=uni.getStorageSync("goodList")
			var countGood=0
			for(var a=0;a<this.goodList.length;a++){
				countGood=countGood+this.goodList[a].quantity
			}
			this.countGood=countGood;
		},
		onShow() {
			this.addressInfo=uni.getStorageSync("addressInfoSel");
			this.couponInfo=uni.getStorageSync("couponInfo")
			if(this.couponInfo){
				this.totalNum();
			}else{
				this.totalNum();
			}
		},
		methods: {
			
			toOrder(){
				var addressInfo=uni.getStorageSync("addressInfoSel");
				var userInfo=uni.getStorageSync("userInfo")
				if(!addressInfo){
					this.$tools.showToast("请选择收货地址")
					return false;
				}
				if(!userInfo){
					this.$tools.showToast("请先登录")
					return false;
				}
				var data={
					'uId':uni.getStorageSync("userInfo").id,
					'addressId':uni.getStorageSync("address").id,
					'address':addressInfo.province+' '+addressInfo.city+' '+addressInfo.area,
					'addressName':addressInfo.name,
					'addressPhone':addressInfo.phone,
					'addressInfo':addressInfo.address,
					'shippingMethod':2,
					'paymentMethod':4,//余额支付
					'notes':this.remoake,
					'deptId':getApp().globalData.deptId,
					params:{
						'goodList':uni.getStorageSync("goodList"),
					}
				}
				var couponInfo=uni.getStorageSync("couponInfo");
				if(couponInfo){
					data.couponId=couponInfo.cId;
					data.params.historyCouponId=couponInfo.id;
				}
				
				this.$axios
					.axios('POST', this.$paths.addOrder, data)
					.then(res => {
						if(res.code==200){
							this.$tools.showToast("下单成功")
							
							this.toBallencePay(res.data);
						}else{
							this.$tools.showToast(res.msg)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
				
			},
			toBallencePay(orderInfo){
				var data={
					'uId':uni.getStorageSync("userInfo").id,
					'deptId':getApp().globalData.deptId,
					'orderId':orderInfo.id,
					'totalPrice':orderInfo.endMoney,
					'paymentStatus':2,
				}
				this.$axios
					.axios('POST', this.$paths.toBalancePay, data)
					.then(res => {
						if(res.code==200){
							this.$tools.showToast("支付成功");
							setTimeout(res=>{
								uni.navigateTo({
									url:"/pages1/myOrder/myOrder?index=0"
								})
							},1000)
						}else{
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
				
			},
			
			// 计算总价格
			totalNum(){
				var goodList=this.goodList;
				var allMoney=0;
				var allMoneyEnd=0;
				for(var a=0;a<goodList.length;a++){
					allMoney=allMoney+goodList[a].specsPrice*goodList[a].quantity;
				}
				var couponInfo=uni.getStorageSync("couponInfo");
				if(couponInfo){
					if(couponInfo.params.type==1){
						allMoneyEnd=allMoney-couponInfo.params.money;
					}else{
						allMoneyEnd=allMoney/10*couponInfo.params.discount;
					}
				}else{
					allMoneyEnd=allMoney;
				}
				
				this.allMoneyEnd=allMoneyEnd;
				this.allMoney=allMoney;
				console.log("总价",allMoneyEnd,allMoney);
				uni.setStorageSync("allMoney",allMoney)
			},
			toSelCOupon(){
				uni.navigateTo({
					url:"/pages2/myCoupon/myCoupon"
				})
			},
			toaddress(){
				uni.navigateTo({
					url:"/pages1/myAddress/myAddress"
				})
			},
			tomyorder(){
				uni.navigateTo({
					url:"/pages1/myOrder/myOrder"
				})
			}
		}
	}
</script>

<style>
@import url(subOrder.css);
</style>

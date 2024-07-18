<template>
	<view>
		<view class="topview"></view>
		<view class="addressview roww center_center"
		@click.stop="toaddress"
		>
			<view class="w-33"></view>
			<image src="/static/dingwei.png" class="w-50 h-50"></image>
			<view class="w-20"></view>
			<view class="allline colonn">
				<view class="roww">
					<view>张三</view> 
					<view class="w-30"></view>
					<view>18340070905</view>
				</view>
				<view class="h-15"></view>
				<view class="addressinfotxt">
					山东省济南市历下区甸柳街道经十路14380号
					海尔时代大厦1706
				</view>
			</view>
			<image src="/static/youjiantou.png" class="w-40 h-40"></image>
			<view class="w-25"></view>
		</view>
		
		<view class="goodview colonn">
			<view class="roww p-all-29" v-for="(item,index) in 3">
				<image class="goodimg"></image>
				<view class="w-20"></view>
				<view class="colonn rowsb">
					<view class="goodname txtShowLength1">2017春季新款女装潮流女装明2017春季新款女装潮流女装明2017春季新款女装潮流女装明
					</view>
					<view class="huanhang">
						<view class="goodspaces baisee">白色</view>
					</view>
					<view class="roww duiqi">
						<view style="color: #FF0000;">￥1200</view>
						<view class="allline"></view>
						<view class="fs-25">x1</view>
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
				<view>共计1件商品</view>
				<view class="w-20"></view>
				<view>总计：</view>
				<view style="color: #FF0000;">￥95560.00</view>
				<view class="w-25"></view>
			</view>
			<view class="h-20"></view>
		</view>
		
		<view class="subpay roww center_center">
			<view>支付方式</view>
			<view class="allline"></view>
			<image src="/static/check@2x.png" class="selicon"></image>
		</view>
		
		<view class="bottomview roww center_center">
			<view class="w-20"></view>
			<view>合计</view>
			<view class="w-15"></view>
			<view style="color: #FF8F1C;">￥121</view>
			<view class="allline1"></view>
			<view class="suborder" @click.stop="tomyorder">提交订单</view>
			<view class="w-20"></view>
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

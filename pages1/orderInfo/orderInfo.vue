<template>
	<view>
		
		<view class="topview">
			
		</view>
		<view class="addressview roww center_center">
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
		
		<view class="colonn orderview">
			<view
			v-for="(item,index) in 4"
			class="roww border_bottom p-bottom-20" 
			style="margin:27rpx 30rpx;">
				<image class="goodimg"></image>
				<view class="w-32"></view>
				<view class="colonn rowsb">
					<view class="roww w-450">
						<view class="goodname txtShowLength1">
							冬天加厚门殿子冬季保暖挡
							冬天加厚门殿子冬季
							冬天加厚门殿子冬季保暖挡
							冬天加厚门殿子冬季保暖挡
							冬天加厚门殿子冬季...
						</view>
						<view class="allline"></view>
						<view 
						class="fs-30 roww center_center duiqi bottom111">
							<view class="fs-20">￥</view>
							<view class="fs-40">200</view>
						</view>
					</view>
						<view class="roww ">
							<view class="spacename fs-20">已选:粉色，750ml</view>
						</view>
						<view>x1</view>
					
				</view>
			</view>
		</view>
		
		
		<view class="orderinfoview colonn">
			<view class="ddtxt border_bottom"  style="padding: 0rpx 32rpx 25rpx 32rpx;">订单信息</view>
			<view class="roww border_bottom" style="padding:25rpx 32rpx;">
				<view>订单编号</view>
				<view class="allline1"></view>
				<view>XS12001224455112</view>
			</view>
			<view class="roww border_bottom" style="padding:25rpx 32rpx;">
				<view>订单编号</view>
				<view class="allline1"></view>
				<view>XS12001224455112</view>
			</view>
		</view>
		
		<view class="h-100"></view>
		
		<view class="bottomview roww center_center">
			<view class="allline"></view>
			<view class="quxiaoorder">取消订单</view>
			<view class="tomoney">去付款</view>
			<view class="tomoney">查看详情</view>
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
			
		}
	}
</script>

<style>
@import url(orderInfo.css);
</style>

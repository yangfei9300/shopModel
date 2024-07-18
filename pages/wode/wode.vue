<template>
	<view>
		<view class="colonn">
			<view class="topview pore">
				<view class="h-100"></view>
				<view class="roww" style="padding:25rpx 36rpx;"
				@click.stop="toPage(11)"
				>
					<image src="/static/wd_gr@2x.png" class="w-132 h-132"></image>
					<view class="w-30"></view>
					<view class="colonn h-132 rowsa">
						<view class="logintxt">登录/注册</view>
						<view class="loginjiehs">新用户登录后领取福利</view>
					</view>
				</view>
				<image src="/static/vip@2x.png" 
				
				@click.stop="toPage(10)"
				class="w-690 h-195" style="position: absolute;bottom: 0rpx;left: 30rpx;"></image>
			</view>
			<view class="myorderview colonn">
				<view class="roww"
				@click.stop="toPage(12)"
				>
					<view>我的订单</view>
					<view class="allline"></view>
					<view class="roww center_center">
						<view class="fs-30 " style="color: #bfbfbf;">查看全部</view>
						<image src="/static/youjiantou.png" 
						class="w-30 h-30"></image>
					</view>
				</view>
				<view class="h-33"></view>
				<view class="roww rowsa">
					<view class="colonn center_center" v-for="(item,index) in orderStatus">
						<image :src="item.icon" class="w-56 h-56"></image>
						<view class="h-10"></view>
						<view class="fs-30">{{item.name}}</view>
					</view>
				</view>
			</view>
			
			<view class="cygoview colonn">
				<view class="chyff">常用功能</view>
				<view class="huanhang ">
					<view class="colonn center_center m-top-37"
					 style="width: 25%;"
					v-for="(item,index) in menus"
					@click.stop="toPage(index+1)"
					>
						<image :src="item.icon" 
						class="w-44 h-44"></image>
						<view class="h-25"></view>
						<view class="memnutxt">{{item.name}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderStatus:[
					{'icon':'/static/quan@2x.png','name':'全部'},
					{'icon':'/static/daifu@2x.png','name':'待付款'},
					{'icon':'/static/daifa@2x.png','name':'待发货'},
					{'icon':'/static/daishou@2x.png','name':'待收货'},
					{'icon':'/static/yiwan@2x.png','name':'已完成'}
				],
				menus:[
					{'icon':'/static/wd_tx@2x.png','name':'我的余额'},
					{'icon':'/static/wd_sh@2x.png','name':'收货地址'},
					{'icon':'/static/wd_yj@2x.png','name':'意见反馈'},
					{'icon':'/static/wd_gy@2x.png','name':'关于我们'},
					{'icon':'/static/wd_lx@2x.png','name':'联系客服'},
					{'icon':'/static/wd_hh@2x.png','name':'我的合伙人'},
					{'icon':'/static/wd_hh@2x.png','name':'合伙人招募'},
				]
			}
		},
		methods: {
			toPage(index){
				if(index==1){
					uni.navigateTo({
						url:"/pages2/myMoney/myMoney"
					})
				}else
				if(index==2){
					uni.navigateTo({
						url:"/pages1/myAddress/myAddress"
					})
				}else if(index==3){
					uni.navigateTo({
						url:"/pages1/opinionReturn/opinionReturn"
					})
				}else if(index==4){
					uni.navigateTo({
						url:"/pages1/aboutUs/aboutUs"
					})
				}else if(index==0){
					uni.navigateTo({
						url:"/pages1/vipRecharge/vipRecharge"
					})
				}else if(index==10){
					uni.navigateTo({
						url:"/pages1/vipRecharge/vipRecharge"
					})
				}else if(index==11){
					uni.navigateTo({
						url:"/pages2/userInfo/userInfo"
					})
				}else if(index==12){
					uni.navigateTo({
						url:"/pages1/myOrder/myOrder"
					})
				}else if(index==7){
					uni.navigateTo({
						url:"/pages2/hehuorenzhoamu/hehuorenzhoamu"
					})
				}else if(index==6){
					uni.navigateTo({
						url:"/pages2/hehuoren/hehuoren"
					})
				}
			},
			
		}
	}
</script>

<style>
@import url(wode.css);
</style>

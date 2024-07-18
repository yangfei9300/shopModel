<template>
	<view>
		
		<view class="colonn w-750 h-422 pore" style="z-index: 100;">
			<image src="/static/tioimg.png"
			 class="w-750" style="z-index: 10;"></image>
			<view class="colonn poab" style="top: 0rpx;z-index: 11;" >
				<view class="h-50"></view>
				<view class="roww" style="padding:25rpx 36rpx;">
					<image src="/static/wd_gr@2x.png" class="w-132 h-132"></image>
					<view class="w-30"></view>
					<view class="colonn h-132 rowsa">
						<view class="logintxt">童品直采</view>
						<view class="loginjiehs">2020-05-05到期</view>
					</view>
				</view>
			</view>
			
			<view class="vipjieshi colonn" style="z-index: 1000;">
				<view style="font-weight: bold;color: black;">会员特权</view>
				<view class="jieshi">开通会员下单可享受工厂价</view>
			</view>
			
		</view>
		<view class="h-100"></view>
		<view class="rechange colonn">
			<view>会员充值</view>
			<view class="h-20"></view>
			<view class="roww rowsa">
				<block v-for="(item,index) in vipMenu">
					<view class="noselmoneview colonn center_center"
					 v-if="index!=vipIndex"
					 @click.stop="vipIndexClick(index)"
					>
						<view>{{item.time}}</view>
						<view class="h-20"></view>
						<view class="roww bottom">
							<view>￥</view>
							<view class="moneytxt">{{item.money}}</view>
						</view>
					</view>
					
					<view class="selmoneview colonn center_center"
					v-else
					>
						<view>{{item.time}}</view>
						<view class="h-20"></view>
						<view class="roww bottom">
							<view>￥</view>
							<view class="moneytxt">{{item.money}}</view>
						</view>
					</view>
				</block>
				
			<!-- 	
				<view class="noselmoneview colonn center_center">
					<view>6个月</view>
					<view class="h-20"></view>
					<view class="roww bottom">
						<view>￥</view>
						<view class="moneytxt">60</view>
					</view>
				</view> -->
				
			</view>
			<view class="h-70"></view>
			<view class="roww center_center">
				<view class="submit">立即开通</view>
			</view>
			
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				vipMenu:[
					{'time':'6个月','money':20},
					{'time':'1年','money':1288},
					{'time':'3年','money':3688},
				],
				vipIndex:0
			}
		},
		methods: {
			vipIndexClick(index){
				this.vipIndex=index;
			}
		}
	}
</script>

<style>
@import url(vipRecharge.css);
</style>

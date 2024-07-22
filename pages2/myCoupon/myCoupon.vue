<template>
	<view>
		<view class="colonn">
			<view class="topview roww rowsa">
				<view class="colonn" @click.stop="typeClick(1)">
					<view class="fs-30 " :class="{'menutxtView':type==1,'menutxtView1':type!=1}">未使用</view>
					<view class="" :class="{'linewidt':type==1,'yincang1 linewidt':type!=1}"></view>
				</view>
				<view class="colonn" @click.stop="typeClick(2)">
					<view class="fs-30 " :class="{'menutxtView':type==2,'menutxtView1':type!=2}">已使用</view>
					<view class=" "   :class="{'linewidt':type==2,'yincang1 linewidt':type!=2}"></view>
				</view>
				<view class="colonn" @click.stop="typeClick(3)">
					<view class="fs-30 " :class="{'menutxtView':type==3,'menutxtView1':type!=3}">已过期</view>
					<view class=" "  :class="{'linewidt':type==3,'yincang1 linewidt':type!=3}"></view>
				</view>
			</view>
			<view class="h-70"></view>
			<view class="colonn">
				<block v-for="(item,index) in coupoinList">
					<view class="couview roww"  v-if="type==1"
					@click.stop="toSelCOuon(item)"
					>
						<view class="leftvuew colonn center_center">
							<view class="roww bottom">
								<view class="fs-30" style="position: relative; bottom: 5rpx">￥</view>
								<view class="fs-45" v-if="item.params.type==1">{{item.params.money}}</view>
								<view class="fs-45" v-if="item.params.type==2">{{item.params.discount}}折</view>
							</view>
							<view class="fs-20" v-if="item.params.type==1">满减券</view>
							<view class="fs-20" v-if="item.params.type==2">折扣券</view>
						</view>
						<view class="colonn rowsa"
						style="padding:20rpx 0rpx;"
						>
							<view class="righttext">适用于单笔订单满{{item.params.minimum_amount}}元使用</view>
							<view class="rightline"></view>
							<view class="roww">
								<view class="rightbottom">{{item.params.end_date}}前有效</view>
								<view class="allline"></view>
								<view class="fs-25" style="color: #E70422;"> 去使用> </view>
							</view>
						</view>
					</view>
					
					
					
					<view class="couview roww"  v-if="type>1">
						<view class="leftvuewhui colonn center_center">
							<view class="roww bottom">
								<view class="fs-30" style="position: relative; bottom: 5rpx">￥</view>
								<view class="fs-45" v-if="item.params.type==1">{{item.params.money}}</view>
								<view class="fs-45" v-if="item.params.type==2">{{item.params.discount}}折</view>
							</view>
							<view class="fs-20" v-if="item.params.type==1">满减券</view>
							<view class="fs-20" v-if="item.params.type==2">折扣券</view>
						</view>
						<view class="colonn rowsa"
						style="padding:20rpx 0rpx;"
						>
							<view class="righttext">适用于单笔订单满{{item.params.minimum_amount}}元使用</view>
							<view class="rightline"></view>
							<view class="roww">
								<view class="rightbottom">{{item.params.end_date}}前有效</view>
								<view class="allline"></view>
								<view class="fs-25" style="color: #D6D6D6;"> {{type==2?'已使用':'已过期'}} > </view>
							</view>
						</view>
					</view>
					
				</block>
				
				<!-- <view class="couview roww" >
					<view class="leftvuewhui colonn center_center">
						<view class="roww bottom">
							<view class="fs-30" style="position: relative; bottom: 5rpx">￥</view>
							<view class="fs-45">20.00</view>
						</view>
						<view class="fs-20">满减券</view>
					</view>
					<view class="colonn rowsa"
					style="padding:20rpx 0rpx;"
					>
						<view class="righttext">适用于单笔订单满10元使用</view>
						<view class="rightline"></view>
						<view class="roww">
							<view class="rightbottom">2018-10-12前有效</view>
							<view class="allline"></view>
							<view class="fs-25" style="color: #D6D6D6;"> 已过期> </view>
						</view>
					</view>
				</view> -->
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			type:1,
			coupoinList:[]
		};
	},
	onLoad() {
		this.getCoipen();
	},
	methods: {
		toSelCOuon(item){
			var allMoney=uni.getStorageSync("allMoney")
			if(allMoney>=item.params.minimum_amount){
				uni.setStorageSync("couponInfo",item);
				uni.navigateBack({
					delta:1
				})
			}else{
				this.$tools.showToast("最低消费金额不满足");
			}
			
		},
		getCoipen(){
			var data = {
				'deptId': getApp().globalData.deptId,
				'id':this.type,
				'uId':uni.getStorageSync("userInfo").id
			};
			this.$axios
				.axios('POST', this.$paths.getCouponByUid, data)
				.then(res => {
					if(res.code==200){
						this.coupoinList=res.data;
					}else{
						this.$tools.showToast(res.msg);
					}
				})
				.catch(err => {
					console.log('错误回调', err);
				});
		},
		typeClick(index){
			this.type=index;
			this.getCoipen();
		}
	}
};
</script>

<style>
@import url(myCoupon.css);
</style>

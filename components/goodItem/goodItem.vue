<template>
	<view>
		<view class="roww p-all-20 background1 br-20 m-top-20"
		@click.stop="toInfo"
		>
			<image 
			:src="BASE_IMG+info.img" 
			class="w-200 h-200 br-20"></image>
			<view class="w-20"></view>
			<view class="colonn rowsb">
				<view class="tite txtShowLength1">{{info.name}}</view>
				<view class="roww  ">
					<view class="price">优惠价：￥{{info.preferentialPrice}}元</view>
					<view class="allline"></view>
					<view class="lucun">库存：{{info.id}}</view>  
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'goodItem',
	props:{
		info:{
			type:Object,
			value:null
		}
	},
	data() {
		return {
			BASE_IMG:"",
		};
	},
	created() {
		this.BASE_IMG=this.$paths.BASE_IMG
	},
	methods:{
		toInfo(){
			uni.navigateTo({
				url:"/pages2/goodInfo/goodInfo?id="+this.info.id
			})
		}
	}
};
</script>

<style>
.tite {
	width: 445rpx;
	height: 77rpx;
	font-family: PingFang SC;
	font-weight: bold;
	font-size: 26rpx;
	color: #333333;
	line-height: 40rpx;
}
.price{
	height: 40rpx;
	background: rgba(248,61,71,1);
	border-radius: 18rpx;
	padding:0rpx 10rpx;
	font-family: PingFang SC;
	font-weight: 400;
	font-size: 20rpx;
	color: #FFFFFF;
	text-align: center;
	line-height: 40rpx;
}
.lucun{
	color: #999999;
	font-size: 30rpx;
}
</style>

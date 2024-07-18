<template>
	<view>
		<view class="colonn">
			<swiper class="swiperimg">
				<swiper-item class="swiperimg">
					<image class="swiperimg" src="../../static/daka@2x.png" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
			<view class="priveview colonn">
				<view class="h-20"></view>
				<view style="color: white">市场价格</view>
				<view class="h-20"></view>
				<view class="roww">
					<view class="roww duiqi" style="color: white; line-height: 60rpx">
						<view>￥</view>
						<view class="fs-50">29.90</view>
					</view>
					<view class="w-20"></view>
					<view class="gongchangj">工厂价：￥22.00</view>
				</view>
			</view>

			<view class="goodInfoview colonn">
				<view class="roww center_center">
					<view class="goodname txtShowLength1">秋冬款儿童羽绒服秋冬款儿童羽绒服秋冬款儿童羽绒服秋冬款儿童羽绒服</view>
					<view class="allline"></view>
					<view style="color: #999999">库存：100</view>
				</view>
				<view class="h-20"></view>
				<view class="miaoshu">2022冬款儿童羽绒服【本品实物超赞/做工考究/版型宽松】110-180#1手 8件 5-9岁百搭</view>
			</view>

			<view class="colonn spaceview">
				<view class="roww p-all-36">
					<view>规格</view>
					<view class="w-50"></view>
					<view>请选择规格</view>
					<view class="allline"></view>
					<image src="../../static/youjiantou.png" class="w-40 h-40"></image>
				</view>
				<view class="roww p-all-36">
					<view>服务</view>
					<view class="w-50"></view>
					<view>包邮</view>
				</view>
			</view>
			<view class="h-49"></view>
			<view class="colonn center_center" style="color: #e81249">
				<view>商品详情</view>
				<view class="h-10"></view>
				<view class="hongxian"></view>
			</view>
			<view class="h-20"></view>
			<image src="/static/1721233392382.png" v-for="(item, index) in 5" class="w-750" mode="aspectFill"></image>
		</view>
		<view class="h-120"></view>
		<view class="bottomview roww rowsa center_center">
			<view class="w-20"></view>
			<view class="colonn center_center">
				<image src="/static/details_shou@2x.png" class="w-36 h-36"></image>
				<view class="fs-22">首页</view>
			</view>
			<view class="w-20"></view>
			<view class="colonn center_center">
				<image src="/static/details_gou@2x.png" class="w-36 h-36"></image>
				<view class="fs-22">购物车</view>
			</view>
			<view class="w-20"></view>

			<view class="addcartbtn" @click="spaceALertShowClick">加入购物车</view>
			<view class="w-20"></view>
			<view class="lijigoum" @click="spaceALertShowClick">立即购买</view>
			<view class="w-20"></view>
		</view>
		
		<view class="huuibeijing" v-if="spaceALertShow"
		 @click="spaceALertShowClick"
		>
			<view class="goodspace colonn" @click.stop="a">
				<view class="roww">
					<view class="allline"></view>
					<image src="/static/closee.png" 
					@click="spaceALertShowClick"
					class="w-50 h-50 "></image>
				</view>
				<view class="roww">
					<image class="goodspaceunmg"></image>
					<view class="colonn rowsb">
						<view class="goodnamee txtShowLength1">我是商品名称我是商品名称我是商品名称我是商品名称我是商品名称我是商品名称我是商品名称我是商品名称我是商品名称我是商品名称</view>
						<view style="color: #666666;font-size: 24rpx;margin-left: 22rpx;">规格：白色</view>
						<view class="roww duiqi">
							<view class="roww duiqi m-left-20" 
							style="color: #F13244;font-weight: bold;">
								<view class="fs-25">￥</view>
								<view class="fs-35">28.88</view>
							</view>
							<view class="allline"></view>
							<view class="kucunaa">库存：88</view>
						</view>
					</view>
				</view>
				<view class="h-41"></view>
				<view class="colonn border_bottom p-bottom-30">
					<view style="font-weight:bold;">颜色分类</view>
					<view class="h-25"></view>
					<view class="huanhang">
						<view class="guoge" v-for="(item,index) in 3">白色</view>
						<view class="noselspace">黑色</view>
					</view>
				</view>
				
				<view class="h-61"></view>
				<view class="roww">
					<view>数量</view>
					<view class="allline"></view>
					<view class="jiajian roww">
						<view class="jiajianbtn">-</view>
						<view class="allline numvew" >1</view>
						<view class="jiajianbtn">+</view>
					</view>
				</view>
				<view class="h-50"></view>
				<view class="roww rowsa">
					<view class="addcartbtnm" @click="toOrderInfo">加入购物车</view>
					<view class="submitbtn"  @click="toOrderInfo">立即购买</view>
				</view>
			</view>
		</view>
		
		
	</view>
</template>

<script>
export default {
	data() {
		return {
			spaceALertShow:false,
		};
	},
	methods: {
		spaceALertShowClick(){
			this.spaceALertShow=!this.spaceALertShow;
		},
		toOrderInfo(){
			uni.navigateTo({
				url:"/pages2/subOrder/subOrder"
			})
		},
	}
};
</script>

<style>
@import url(goodInfo.css);
</style>

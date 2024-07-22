<template>
	<view>
		<view class="colonn w-750 h-422 pore">
			<image src="/static/tioimg.png" class="w-750"></image>
			<view class="colonn poab" style="top: 0rpx;" >
				<view class="titlee">{{shopInfo.shopName}}</view>
				<view class="h-25"></view>
				<view class="roww">
					<view class="sousuo roww center_center">
						<image src="/static/home_sousuo@2x.png" class="w-35 h-35"></image>
						<view class="w-10"></view>
						<view style="color: #B2B2B2;line-height: 35rpx;">大家都在搜索数码相机</view>
					</view>
				</view>
			</view>
		</view>
		<swiper class="w-710 swipee h-240">
			<swiper-item v-for="(item,index) in banners"  class="w-710 h-240">
				<image :src="BASE_IMG+item.img"  mode="aspectFill"
				 class="w-710 br-10 h-240"> </image>
			</swiper-item>
		</swiper>
		<view class="h-15"></view>
		<view class="huanhang m-all-20 p-bottom-20 br-20" 
		style="background-color: white;">
			<view class="colonn center_center m-top-20" 
			style="width: 177.5rpx;" 
			v-for="(item,index) in goodType"
			@click.stop="goodTypeItem(item)"
			>
				<image :src="BASE_IMG+item.typeImg" class="w-110 br-20 h-110"></image>
				<view class="h-10"></view>
				<view class="txtShowLength w-110">{{item.typeName}}</view>
			</view>
		</view>
		<view class="colonn p-all-20">
			<view class="fw-600">极速推荐</view>
			<view class="colonn ">
				<block v-for="(item,index) in goodTypeList">
					<goodItem :info="item"
					></goodItem> 
				</block>
				
			</view>
			
		</view>
		
		<view @click="toLing">去领取优惠券</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodTypeList:[],
				BASE_IMG:"",
				goodType:[],
				banners:[],
				shopInfo:{},
			}
		},
		onLoad() {
			this.getRecommendList();
			this.getType();
			this.getBanners();
			this.getShopInfo();
			this.BASE_IMG=this.$paths.BASE_IMG
		},
		methods: {
			getShopInfo(){
				var data = {
					'deptId':getApp().globalData.deptId
				};
				this.$axios
					.axios('POST', this.$paths.getShopInfo, data)
					.then(res => {
						this.shopInfo=res.data;
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			goodTypeItem(item){
				uni.navigateTo({
					url:"/pages1/goodTypeItem/goodTypeItem?id="+item.id
				})
			},
			toLing(){
				uni.navigateTo({
					url:"/pages2/lingCOupons/lingCOupons"
				})
			},
			// 获取轮播图
			getBanners(){
				var data = {
					'deptId':getApp().globalData.deptId
				};
				this.$axios
					.axios('POST', this.$paths.getBanners, data)
					.then(res => {
						this.banners=res.data;
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			// 获取分类
			getType(){
				var data = {
					'deptId':getApp().globalData.deptId
				};
				this.$axios
					.axios('POST', this.$paths.getGoodTypes, data)
					.then(res => {
						this.goodType=res.data;
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			// 获取推荐的商品
			getRecommendList(){
				var data = {
					'deptId':getApp().globalData.deptId
				};
				this.$axios
					.axios('POST', this.$paths.getRecommendList, data)
					.then(res => {
						this.goodTypeList=res.data;
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			toInfo(){
				uni.navigateTo({
					url:"/pages2/goodInfo/goodInfo"
				})
			}
		}
	}
</script>

<style>
	@import url(index.css);
</style>

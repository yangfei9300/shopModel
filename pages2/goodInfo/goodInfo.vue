<template>
	<view>
		<view class="colonn">
			<swiper class="swiperimg">
				<swiper-item class="swiperimg" v-for="(item,index) in goodInfo.banners">
					<image class="swiperimg" 
					:src="BASE_IMG+item" 
					mode="aspectFill"></image>
				</swiper-item>
			</swiper>
			<view class="priveview colonn">
				<view class="h-20"></view>
				<view style="color: white">优惠价</view>
				<view class="h-20"></view>
				<view class="roww">
					<view class="roww duiqi" style="color: white; line-height: 60rpx">
						<view>￥</view>
						<view class="fs-50" v-if="selSpaceInfo">{{selSpaceInfo.spaceOriginalPrice }}</view>
						<view class="fs-50" v-else>{{goodInfo.preferentialPrice }}</view>
					</view>
					<view class="w-20"></view>
					<view class="gongchangj" v-if="selSpaceInfo">原价：￥{{selSpaceInfo.spacePrice}}</view>
					<view class="gongchangj" v-else>原价：￥{{goodInfo.price}}</view>
				</view>
			</view>

			<view class="goodInfoview colonn">
				<view class="roww center_center">
					<view class="goodname txtShowLength1">{{goodInfo.name}}</view>
					<view class="allline"></view>
					<view style="color: #999999" v-if="selSpaceInfo">库存：{{selSpaceInfo.count}}</view>
					<view style="color: #999999" v-else>库存：{{goodInfo.inventory}}</view>
				</view>
				<view class="h-20"></view>
				<view class="miaoshu">{{goodInfo.name}}</view>
			</view>

			<view class="colonn spaceview">
				<view class="roww p-all-36"
				@click.stop="spaceALertShowClick"
				>
					<view>规格</view>
					<view class="w-50"></view>
					<view v-if="selSpaceInfo">{{selSpaceInfo.specsName}}</view>
					<view v-else>请选择规格</view>
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
			<rich-text v-if="goodInfo.descriptionHtmls" :nodes="goodInfo.descriptionHtml"></rich-text>
			<!-- <image src="/static/1721233392382.png" 
			v-for="(item, index) in 5" class="w-750" mode="aspectFill"></image> -->
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
					<image class="goodspaceunmg"
					:src="BASE_IMG+goodInfo.img"
					></image>
					<view class="colonn rowsb">
						<view class="goodnamee txtShowLength1">{{goodInfo.name}}</view>
						<view style="color: #666666;font-size: 24rpx;margin-left: 22rpx;">
							规格：{{selSpaceInfo?selSpaceInfo.specsName:"未选择"}}</view>
						<view class="roww duiqi">
							<view class="roww duiqi m-left-20" 
							style="color: #F13244;font-weight: bold;">
								<view class="fs-25">￥</view>
								<view class="fs-35">{{selSpaceInfo?selSpaceInfo.spaceOriginalPrice:goodInfo.preferentialPrice}}</view>
							</view>
							<view class="allline"></view>
							<view class="kucunaa">库存：{{selSpaceInfo?selSpaceInfo.count:goodInfo.inventory}}</view>
						</view>
					</view>
				</view>
				<view class="h-41"></view>
				<view class="colonn border_bottom p-bottom-30">
					<view style="font-weight:bold;">规格</view>
					<view class="h-25"></view>
					<view class="huanhang">
						<block v-for="(item,index) in goodInfo.params.spaces">
							<view class="guoge" v-if="selindex==index" >{{item.specsName}}</view>
							<view class="noselspace"
							 @click="getCartCount(index)"
							 v-else>{{item.specsName}}</view>
						</block>
						
					</view>
				</view>
				
				<view class="h-61"></view>
				<view class="roww">
					<view>数量</view>
					<view class="allline"></view>
					<view class="jiajian roww">
						<view class="jiajianbtn" @click="countClick(2)">-</view>
						<view class="allline numvew" >{{count}}</view>
						<view class="jiajianbtn" @click="countClick(1)">+</view>
					</view>
				</view>
				<view class="h-50"></view>
				<view class="roww rowsa">
					<view class="addcartbtnm" @click="addCart(selSpaceInfo)">加入购物车</view>
					<view class="submitbtn"  @click="toOrder(selSpaceInfo)">立即购买</view>
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
			BASE_IMG:"",
			goodInfo:{},
			selSpaceInfo:null,
			selindex:-1,
			count:1,
			allMoney:0
		};
	},
	onLoad(options) {
		this.options=options;
		this.getGoodInfo();
		this.BASE_IMG=this.$paths.BASE_IMG;
		
	},
	methods: {
		getCartCount(item){
			var usreInfo=uni.getStorageSync("userInfo")
			if(!usreInfo){
				this.spaceClick(item,1);
				return false;
			}
			var data={
				'uId':uni.getStorageSync("userInfo").id,
				'specsId':this.goodInfo.params.spaces[item].id
			}
			
			this.$axios
				.axios('POST', this.$paths.getCartGoodCount, data)
				.then(res => {
					if(res.code==200){
						this.spaceClick(item,res.data);
					}else{
						this.$tools.showToast(res.msg)
					}
					
				})
				.catch(err => {
					console.log('错误回调', err);
				});
		},
		toOrder(item){
			var usreInfo=uni.getStorageSync("userInfo")
			if(!usreInfo){
				this.$tools.showToast("请先登录");
				return false;
			}
			console.log("==",item)
			if(!this.selSpaceInfo){
				this.$tools.showToast("请先选择规格");
				return false;
			}
			var goodInfo={
				'productId':item.goodId,
				'spaceId':item.id,
				'productImg':this.goodInfo.img,
				'productName':this.goodInfo.name,
				'specsImg':item.spaceImg,
				'specsName':item.specsName,
				'productPrice':this.goodInfo.preferentialPrice,
				'specsPrice':item.spacePrice,
				'quantity':this.count,
				'couponId':"",
				'note':"",
				'deptId':item.deptId,
			}
			uni.setStorageSync("goodList",[goodInfo])
			uni.navigateTo({
				url:"/pages2/subOrder/subOrder"
			})
		},
		// 添加购物车
		addCart(item){
			if(!this.selSpaceInfo){
				this.$tools.showToast("请先选择规格");
				return false;
			}
			var userInfo=uni.getStorageSync("userInfo");
			if(!userInfo){
				this.$tools.showToast("请先登录");
				return false;
			}
			
			var data={
				'uId':uni.getStorageSync("userInfo").id,
				'productId':this.options.id,
				'specsId':item.id,
				'quantity':this.count,
				'price':item.spaceOriginalPrice,
				'deptId':item.deptId,
				'userId':item.userId,
			}
			
			this.$axios
				.axios('POST', this.$paths.addCart, data)
				.then(res => {
					if(res.code==200){
						this.$tools.showToast("购物车添加成功");
					}else{
						this.$tools.showToast(res.msg)
					}
					
				})
				.catch(err => {
					console.log('错误回调', err);
				});
		},
		
		countClick(type){
			if(type==1){
				this.count=this.count+1;
			}else{
				if(this.count>1){
					this.count=this.count-1;
				}
			}
		},
		spaceClick(index,count){
			this.count=count;
			this.selindex=index;
			var selSpaceInfo=this.goodInfo.params.spaces[index]
			this.selSpaceInfo=this.goodInfo.params.spaces[index];
		},
		getGoodInfo(){
			var data = {
				'deptId':getApp().globalData.deptId,
				id:this.options.id
			};
			this.$axios
				.axios('POST', this.$paths.getGoodInfo, data)
				.then(res => {
					var goodInfo=res.data;
					goodInfo.banners=goodInfo.banners.split(",");
					var spaceList=goodInfo.params.spaces;
					for(var a=0;a<spaceList.length;a++){
						if(spaceList[a].params){
							spaceList[a].count=spaceList[a].params.count;
						}else{
							spaceList[a].count=0;
						}
					}
					goodInfo.params.spaces=spaceList;
					this.goodInfo=goodInfo
				})
				.catch(err => {
					console.log('错误回调', err);
				});
		},
		spaceALertShowClick(){
			this.spaceALertShow=!this.spaceALertShow;
		},
		toOrderInfo(){
			uni.navigateTo({
				url:"/pages2/subOrder/subOrder"
			})
		},
		a(){}
	}
};
</script>

<style>
@import url(goodInfo.css);
</style>

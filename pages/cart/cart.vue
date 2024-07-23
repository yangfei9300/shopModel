<template>
	<view>
		<view class="topview colonn">
			<view class="roww fs-27 p-all-30" style="color: white">
				<view>{{shopInfo.shopName}}</view>
				<view class="allline"></view>
				<view @click.stop="delcartd">删除</view>
			</view>
		</view>

		<view class="goodviwe colonn">
			<view class="roww center_center" 
			v-for="(item,index) in mycarts"
			@click.stop="cartClick(index)"
			>
				<image src="/static/check@2x.png"
				 v-if="item.isSel"
				 class="w-35 h-35"></image>
				 <image src="/static/no_check@2x.png"
				  v-else
				  class="w-35 h-35"></image>
				<view class="w-25"></view>
				<image mode="aspectFill"
				:src="BASE_IMG+item.params.spaceImg"
				class="w-172 h-172 br-20" 
				style="background-color: #8c9198"></image>
				<view class="w-22"></view>
				<view class="colonn m-bottom-25 m-top-25">
					<view class="goodname txtShowLength1">{{item.params.xpname}}</view>
					<view class="h-10"></view>
					<view class="huanhang">
						<view class="spaceview">{{item.params.spacename}}</view>
					</view>
					<view class="h-10"></view>
					<view class="roww">
						<view class="roww duiqi" style="font-weight: bold;">
							<view class="fs-25">￥</view>
							<view class="fs-35">{{item.params.space_original_price}}</view>
						</view>
						<view class="allline"></view>
						<view class="countviiew roww">
							<view class="jiajianbtn"
							@click.stop="countClick(index,2)"
							>-</view>
							<view class="fs-30 allline" 
							style="text-align: center;">
							{{item.quantity}}</view>
							<view class="jiajianbtn"
							@click.stop="countClick(index,1)">+</view>
						</view>
					</view>
				</view>
			</view>
			<view class="colonn">
				<null v-if="mycarts.length<=0"></null>
				<view class="h-250"></view>
			</view>
			
			
		</view>
			<view class="h-150"></view>

		<view class="bottomvoew roww center_center">
			<view class="w-28"></view>
			<view class="roww center_center">
				<image 
				v-if="isAll"
				src="/static/check@2x.png" 
				class="w-35 h-35"></image>
				<image
				v-else
				src="/static/no_check@2x.png" 
				class="w-35 h-35"></image>
				<view class="w-20"></view>
				<view class="fs-30">全选</view>
			</view>
			<view class="w-75"></view>
			<view class="hejis">合计:￥{{totalMoney}}</view>
			<view class="allline"></view>
			<view class="tosub" @click="getGoodList">去结算</view>
			<view class="w-28"></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			mycarts:[],
			BASE_IMG:"",
			totalMoney:0,
			isAll:false,
			shopInfo:{}
		};
	},
	onShow() {
		this.getCart();
		this.getShopInfo();
		this.BASE_IMG=this.$paths.BASE_IMG;
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
		delcartd(){
			var ids=[];
			for(var a=0;a<this.mycarts.length;a++){
				if(this.mycarts[a].isSel){
					ids.push(this.mycarts[a].id)
				}
			}
			if(ids.length<=0){
				this.$tools.showToast("请选择删除的商品")
				return false;
			}
			var data ={
				'uId':uni.getStorageSync("userInfo").id,
				params:{
					'ids':ids.join(",")
				}
			};
			
			this.$axios
				.axios('POST', this.$paths.delCarts, data)
				.then(res => {
					if(res.code==200){
						this.$tools.showToast("删除成功");
						this.totalMoney=0;
						setTimeout(res=>{
							this.getCart();
						},1000)
					}else{
						this.$tools.showToast(res.msg);
					}
				})
				.catch(err => {
					console.log('错误回调', err);
				});
		},
		getGoodList(){
			var goodList=[];
			var list=this.mycarts;
			for(var a=0;a<list.length;a++){
				var item=list[a];
				var obg={
					'productId':item.productId,
					'spaceId':item.specsId,
					'productImg':item.params.xpimg,
					'productName':item.params.xpname,
					'specsImg':item.params.spaceImg,
					'specsName':item.params.spacename,
					'productPrice':item.params.preferentialPrice,
					'specsPrice':item.params.space_original_price,
					'quantity':item.quantity,
					'couponId':"",
					'note':"",
					'deptId':getApp().globalData.deptId,
					'params':{
						'cartId':item.id
					}
				}
				if(list[a].isSel){
					goodList.push(obg);
				}
			}
			if(goodList.length<=0){
				this.$tools.showToast("请选择商品");
				return false;
			}
			uni.setStorageSync("goodList",goodList)
			this.toSuborder()
		},
		sumMoney(){
			var list=this.mycarts;
			var totalMoney=0;
			var isAll=true;
			for(var a=0;a<list.length;a++){
				if(list[a].isSel){
					totalMoney=totalMoney+list[a].quantity*list[a].params.space_original_price;
				}
				if(!list[a].isSel){
					isAll=false;
				}
			}
			this.isAll=isAll;
			this.totalMoney=totalMoney;
		},
		cartClick(index){
			this.mycarts[index].isSel=!this.mycarts[index].isSel;
			this.sumMoney();
		},
		countClick(index,type){
			if(type==1){
				this.mycarts[index].quantity=this.mycarts[index].quantity+1;
				this.addCartClick(this.mycarts[index]);
			}else{
				if(this.mycarts[index].quantity>1){
					this.mycarts[index].quantity=this.mycarts[index].quantity-1;
					this.addCartClick(this.mycarts[index]);
				}
				
			}
			this.sumMoney();
		},
		addCartClick(item){
			var data =item;
			data.uId=uni.getStorageSync("userInfo").id
			data.deptId=getApp().globalData.deptId
			
			this.$axios
				.axios('POST', this.$paths.addCart, data)
				.then(res => {
					if(res.code==200){
						
					}else{
						this.$tools.showToast(res.msg);
					}
				})
				.catch(err => {
					console.log('错误回调', err);
				});
		},
		toSuborder(){
			uni.navigateTo({
				url:"/pages2/subOrder/subOrder"
			})
		},
		getCart(){
			var data = {
				'uId': uni.getStorageSync("userInfo").id,
				'deptId':getApp().globalData.deptId
			};
			this.$axios
				.axios('POST', this.$paths.getCart, data)
				.then(res => {
					if(res.code==200){
						var mycarts=res.data;
						for(var a=0;a<mycarts.length;a++){
							mycarts[a].isSel=false;
						}
						this.mycarts=mycarts;
					}else{
						this.$tools.showToast(res.msg);
					}
				})
				.catch(err => {
					console.log('错误回调', err);
				});
		}
	}
};
</script>

<style>
@import url(cart.css);
</style>

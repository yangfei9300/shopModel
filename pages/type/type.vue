<template>
	<view>
		<swiper class="w-750 swipee h-180 " 
		style="top: 80rpx;position: fixed;background-color: white;z-index: 1000;">
			<swiper-item  class="w-750 h-180">
				<view class="roww">
					<block v-for="(item,index) in goodType">
						<view class="colonn center_center m-top-20"
						style="width: 25vw;"  v-if="type==index"
						>
							<image :src="BASE_IMG+item.typeImg" 
							 class="w-90 h-90 br-10"
							 style="0px 0px 15rpx 5rpx;"
							 ></image>
							<view class="h-10"></view>
							<view style="color: #E81249;font-weight: bold;">{{item.typeName}}</view>
						</view>
						<view class="colonn center_center m-top-20"
						style="width: 25vw;" 
						@click.stop="typeClick(index)"
						v-else>
							<image :src="BASE_IMG+item.typeImg" 
							 class="w-90 br-10 h-90"></image>
							<view class="h-10"></view>
							<view>{{item.typeName}}</view>
						</view>
					</block>
					
				</view>
			</swiper-item>
		</swiper>
		
		<swiper class="w-750 swipee h-180 "
		style="top: 80rpx;background-color: white;z-index: 1000;">
			<swiper-item  class="w-750 h-180">
				<view class="roww">
					<view class="colonn center_center m-top-20"
					style="width: 25vw;" 
					v-for="(item,index) in 4">
						<image src="/static/imgone@2x.png"
						 class="w-90 h-90"></image>
						<view class="h-10"></view>
						<view>上衣</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
		  
		<view class="colonn " style="padding:0rpx 20rpx;">
			<view class="colonn ">
				<block v-for="(item,index) in goodList">
					<goodItem :info="item"
					></goodItem> 
				</block>
				<view class="roww p-all-20 center_center" v-if="goodList.length<=0">
					<view>暂无商品</view>
				</view>
			</view>
			<view class="h-20"></view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:0,
				goodType:[],
				BASE_IMG:"",
				goodList:[]
			}
		},
		onLoad() {
			this.getType();
			this.BASE_IMG=this.$paths.BASE_IMG
		},
		methods: {
			typeClick(index){
				this.type=index;
				this.getGoodList();
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
						this.getGoodList();
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			getGoodList(){
				var data = {
					'deptId':getApp().globalData.deptId,
					'categoryId':this.goodType[this.type].id
				};
				this.$axios
					.axios('POST', this.$paths.getGoodList, data)
					.then(res => {
						this.goodList=res.data;
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
		}
	}
</script>

<style>
@import url(type.css);
</style>

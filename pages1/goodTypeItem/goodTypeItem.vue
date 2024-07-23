<template>
	<view>
		<view class="h-100 background1 w-750"></view>
		<view class="roww rowsa p-all-20 w-750 background1"
		style="position: fixed;top: 100rpx;left: 0rpx;z-index: 999;"
		>
			<view v-if="type==1" class="seltxt">默认</view>
			<view v-else @click.stop="typeClick(1)" >默认</view>
			
			<view v-if="type==2" class="seltxt">最新</view>
			<view v-else  @click.stop="typeClick(2)" >最新</view>
			
			<view class="roww center_center" v-if="type==3" 
			@click.stop="typeClick(4)">
				<view v-if="type==3" class="seltxt">价格</view>
				<view v-else   >价格</view>
				<view class="w-10"></view>
				<image src="/static/bottom@2x.png" 
				class="w-24 h-32"></image>
			</view>
			<view class="roww center_center"
			  v-else-if="type==4" 
			 @click.stop="typeClick(3)">
				<view v-if="type==4" class="seltxt">价格</view>
				<view v-else   >价格</view>
				<view class="w-10"></view>
				<image src="/static/top@2x.png" 
				class="w-24 h-32"></image>
			</view>
			<view class="roww center_center"
			  v-else
			 @click.stop="typeClick(4)">
				<view    >价格</view>
				<view class="w-10"></view>
				<image src="/static/bottom@2x.png" 
				class="w-24 h-32"></image>
			</view>
		</view>
		<view class="colonn p-all-20">
			<block v-for="(item,index) in goodList">
				<goodItem :info="item"
				></goodItem> 
			</block>
			<view class="h-20"></view>
			<null v-if="goodList.length<=0"></null>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:1,
				options:{},
				goodList:[]
			}
		},
		onLoad(options) {
			this.options=options;
			this.getGoodList();
		},
		methods: {
			typeClick(index){
				this.type=index;
				this.getGoodList();
			},
			getGoodList(){
				var data = {
					'deptId':getApp().globalData.deptId,
					'categoryId':this.options.id
				};
					data.params={
						'sel':this.type
					}
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
@import url(goodTypeItem.css);
</style>

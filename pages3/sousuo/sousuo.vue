<template>
	<view>
		<view class="colonn">
			
			<view class="roww">
				<view class="sousuo roww center_center">
					<view class="w-30"></view>
					<image src="/static/home_sousuo@2x.png"
					 class="w-35 h-35"></image>
					<view class="w-10"></view>
					<view 
					 class="allline"
					style="color: #B2B2B2;line-height: 35rpx;"
					>
						<input v-model="goodName" 
						style="color: black;"
						placeholder="大家否在搜索喜欢的商品" />
					</view>
					<view @click.stop="getGoodList()">搜索</view>
					<view class="w-30"></view>
				</view>
			</view>
			
			<view class="colonn">
				<block v-for="(item,index) in goodList">
					<goodItem :info="item"
					></goodItem> 
				</block>
				
				<null v-if="goodList.length<=0"></null>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goodName:"",
				goodList:[]
			}
		},
		methods: {
			getGoodList(){
				var data={
					'deptId':getApp().globalData.deptId,
					'name':this.goodName
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
@import url(sousuo.css);
</style>

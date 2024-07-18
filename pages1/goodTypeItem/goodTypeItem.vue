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
			
			<view class="roww center_center">
				<view v-if="type==3" class="seltxt">价格</view>
				<view v-else  @click.stop="typeClick(3)" >价格</view>
				<view class="w-10"></view>
				<image src="/static/bottom@2x.png" 
				class="w-24 h-32"></image>
			</view>
		</view>
		<view class="colonn p-all-20">
			<goodItem v-for="(item,index) in 30"></goodItem>
			<view class="h-20"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:1,
			}
		},
		methods: {
			typeClick(index){
				this.type=index;
			}
		}
	}
</script>

<style>
@import url(goodTypeItem.css);
</style>

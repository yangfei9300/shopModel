<template>
	<view>
		<swiper class="w-750 swipee h-180 " 
		style="top: 80rpx;position: fixed;background-color: white;z-index: 1000;">
			<swiper-item  class="w-750 h-180">
				<view class="roww">
					<block v-for="(item,index) in 4">
						<view class="colonn center_center m-top-20"
						style="width: 25vw;"  v-if="type==index"
						>
							<image src="/static/imgone@2x.png"
							 class="w-90 h-90 br-35"
							 style="box-shadow:  rgba(232, 18, 73, 0.5) 0px 0px 15rpx 5rpx;"
							 ></image>
							<view class="h-10"></view>
							<view style="color: #E81249;font-weight: bold;">上衣</view>
						</view>
						<view class="colonn center_center m-top-20"
						style="width: 25vw;" 
						@click.stop="typeClick(index)"
						v-else>
							<image src="/static/imgone@2x.png"
							 class="w-90 h-90"></image>
							<view class="h-10"></view>
							<view>上衣</view>
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
				<goodItem v-for="(item,index) in 5"></goodItem> 
			</view>
			<view class="h-20"></view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:0
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
@import url(type.css);
</style>

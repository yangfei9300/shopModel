<template>
	<view>
		<view class="colonn">
			<view class="item" v-for="(item,index) in 10">
				<view class="roww">
					<view>张小仙子</view>
					<view class="w-81"></view>
					<view class="phonee">18340070905</view>
				</view>
				<view class="h-25"></view>
				<view class="infoview">
					山东省 济南市 槐荫区 前城杰座23楼前城商务中心前城杰座23楼前城商务中心前城杰座23楼前城商务中心
				</view>
				<view class="h-50"></view>
				<view class="roww center_center">
					<image src="/static/check@2x.png" class="w-28 h-28"></image>
					<view class="w-20"></view>
					<view class="moren">默认地址</view>
					<view class="allline"></view>
					<view class="fs-27 claosd" >编辑</view>
					<view class="w-20"></view>
					<view class="fs-27 claosd">删除</view>
				</view>
			</view>
		</view>
		<view class="h-220"></view>
		<view class="tosubbtn" @click.stop="toinfo">新增地址</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toinfo(){
				uni.navigateTo({
					url:"/pages1/addressInfo/addressInfo"
				})
			}
		}
	}
</script>

<style>
@import url(myAddress.css);
</style>

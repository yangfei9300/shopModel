<template>
	<view>
		<view class="colonn">
			<view class="topview colonn">
				<view class="h-100"></view>
				<view class="roww rowsa">
					<view class="colonn allline center_center">
						<view class="jine">15316.25</view>
						<view class="h-20"></view>
						<view class="jieshi">订货总金额（元）</view>
					</view>
					<view class="colonn allline center_center">
						<view class="jine">829</view>
						<view class="h-20"></view>
						<view class="jieshi">订货件数</view>
					</view>
				</view>
			</view>
			
			<view class="bottomlist colonn">
				<scroll-view class="colonn " style="height: 80vh;"
				scroll-y
				>
					<view class="useritem roww m-bottom-25 center_center"
					v-for="(item,index) in 30"
					>
						<image src="/static/wd_gr@2x.png" 
						class="w-100 h-100"></image>
						<view class="w-44"></view>
						<view class="colonn rowsa h-100">
							<view class="nichengs">我是用户昵称</view>
							<view class="roww">
								<view class="dinghuo">订货金额：</view>
								<view class="jinee">￥123.2</view>
								<view class="w-70"></view>
								<view class="dinghuo">件数：</view>
								<view class="jinee">￥123.2</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			
			
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style>
@import url(hehuoren.css);
</style>

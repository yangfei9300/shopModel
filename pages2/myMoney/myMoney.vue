<template>
	<view>
		<view class="colonn p-all-40">
			<view class="topvciew pore colonn rowsa" >
				<view >我的余额</view>
				<view class="monruvv">28,666.00</view>
				<view class="roww">
					<view class="allline"></view>
					<view class="tixian">提现</view>
					<view class="w-41"></view>
				</view>
			</view>
			
			
			<view class="colonn">
				<view class="h-56"></view>
				<view class="roww center_center">
					<view class="yudd"></view>
					<view class="w-10"></view>
					<view class="yuemx">余额明细</view>
					<view class="allline"></view>
				</view>
				<view class="h-31"></view>
				<view class="jiluitem colonn m-bottom-30" 
				v-for="(item,index) in 3">
					<view class="m-all-20  border_bottom p-bottom-20"
					style="font-weight: bold;"
					>佣金</view>
					<view class="roww p-all-20 fs-30" style="color: #808080;">
						<view>金额</view>
						<view class="allline"></view>
						<view class="duiqi roww" style="color: #F83D47;">
							<view class="fs-35">+</view>
							<view class="fs-40 fw-600" >10</view>
						</view>
					</view>
					<view class="roww p-all-20 fs-30" style="color: #808080;">
						<view>时间</view>
						<view class="allline"></view>
						<view class="duiqi roww"  >
							<view class=" " >2021.03.21 21:54:09</view>
						</view>
					</view>
				</view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
@import url(myMoney.css);
</style>

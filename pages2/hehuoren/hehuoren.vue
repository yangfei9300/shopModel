<template>
	<view>
		<view class="colonn">
			<view class="topview colonn">
				<view class="h-100"></view>
				<view class="roww rowsa">
					<view class="colonn allline center_center">
						<view class="jine">￥{{info.money}}</view>
						<view class="h-20"></view>
						<view class="jieshi">订货总金额（元）</view>
					</view>
					<view class="colonn allline center_center">
						<view class="jine">{{info.goodCount}}</view>
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
					v-for="(item,index) in yongList" 
					v-if="yongList.length>0"
					>
						<image 
						:src="BASE_IMG+item.params.avatar" 
						class="w-100 h-100" mode="aspectFill"
						style="border-radius: 50%;background-color: #f5f5f5;"
						></image>
						<view class="w-44"></view>
						<view class="colonn rowsa h-100">
							<view class="roww">
								<view class="nichengs">{{item.params.name}}</view>
								<view class="w-70"></view>
								<view class="allline"></view>
								<view class="dinghuo">件数：</view>
								<view class="jinee">{{item.goodCount}}</view>
							</view>
							<view class="roww">
								<view class="dinghuo">订货金额：</view>
								<view class="jinee">￥{{item.params.totalMmoney}}</view>
								<view class="w-70"></view>
								<view class="dinghuo">佣金金额：</view>
								<view class="jinee">￥{{item.params.money}}</view>
								
							</view>
						</view>
					</view>
					
					<view class="colonn" >
						<null v-if="yongList.length<=0"></null>
						<view class="h-250"></view>
					</view>
					
				</scroll-view>
			</view>
			
			
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			yongList:[],
			BASE_IMG:"",
			info:{
				'money':0,
				'goodCount':0
			}
		};
	},
	onLoad() {
		this.BASE_IMG=this.$paths.BASE_IMG;
		this.getKickbacks();
	},
	methods: {
		getKickbacks(){
			var data={
				'uId':uni.getStorageSync("userInfo").id,
				'deptId':getApp().globalData.deptId,
			}
			this.$axios
				.axios('POST', this.$paths.getKickbacks, data)
				.then(res => {
					if(res.code==200){
						var yongList=res.data;
						var info=this.info;
						for(var a=0;a<yongList.length;a++){
							info.money=info.money+yongList[a].params.money;
							info.goodCount=info.goodCount+yongList[a].goodCount;
						}
						this.info=info;
						this.yongList=yongList;
					}else{
						this.$tools.showToast(res.msg)
					}
					
				})
				.catch(err => {
					console.log('错误回调', err);
				});
		},
	}
};
</script>

<style>
@import url(hehuoren.css);
</style>

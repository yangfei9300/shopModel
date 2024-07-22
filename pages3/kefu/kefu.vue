<template>
	<view>
		<view class="colonn">
			<view class="roww p-all-20 border_bottom"
			 v-for="(item,index) in kefuList">
				<image :src="BASE_IMG+item.avatarUrl" 
				class="w-130 h-130"></image>
				<view class="w-20"></view>
				<view class="colonn rowsb">
					<view>{{item.name}}</view>
					<view class="roww w-500">
						<view>{{item.phone}}</view>
						<view class="allline"></view>
						<view @click.stop="tomake">拨打</view>
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
				kefuList:[],
				BASE_IMG:""
			}
		},
		onLoad() {
			this.BASE_IMG=this.$paths.BASE_IMG;
			this.getkefuList();
		},
		methods: {
			tomake(item){
				uni.makePhoneCall({
					phoneNumber:item.phone
				})
			},
			getkefuList(){
				var data = {
					'deptId':getApp().globalData.deptId
				};
				this.$axios
					.axios('POST', this.$paths.getKefuList, data)
					.then(res => {
						this.kefuList=res.data;
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
		}
	}
</script>

<style>
@import url(kefu.css);
</style>

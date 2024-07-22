<template>
	<view>
		<view class="colonn">
			<view class="item" v-for="(item,index) in addressList"
			@click.stop="toSelAdderess(item)"
			>
				<view class="roww">
					<view>{{item.name}}</view>
					<view class="w-81"></view>
					<view class="phonee">{{item.phone}}</view>
				</view>
				<view class="h-25"></view>
				<view class="infoview">
					{{item.province}} {{item.city}} {{item.area}} {{item.address}}
				</view>
				<view class="h-50"></view>
				<view class="roww center_center">
					<image v-if="morenId==item.id" src="/static/check@2x.png" class="w-28 h-28"></image>
					<image v-else src="/static/no_check@2x.png" class="w-28 h-28"></image>
					<view class="w-20"></view>
					<view class="moren" @click.stop="morenCLick(item)">默认地址</view>
					<view class="allline"></view>
					<view class="fs-27 claosd" @click.stop="toUpdate(item)">编辑</view>
					<view class="w-20"></view>
					<view class="fs-27 claosd" @click.stop="toalert(item)">删除</view>
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
				addressList:[],
				morenId:null,
			}
		},
		onLoad() {
			
			
		},
		onShow() {
			this.getAddress();
			this.morenId=uni.getStorageSync("morenId")
		},
		methods: {
			morenCLick(res){
				this.morenId=res.id;
				uni.setStorageSync("morenId",this.morenId)
			},
			toSelAdderess(item){
				uni.setStorageSync("addressInfoSel",item);
				uni.navigateBack({
					delta:1
				})
			},
			toUpdate(item){
				uni.setStorageSync("updateAddress",item)
				uni.navigateTo({
					url:"/pages1/addressInfo/addressInfo?id="+item.id
				})
			},
			toalert(item){
				uni.showModal({
					title: '提示',
					content: '确认要删除吗',
					success:  (res)=> {
						if (res.confirm) {
							console.log('用户点击确定');
							this.delAddress(item)
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			delAddress(item){
				var data = {
					'uId':uni.getStorageSync("userInfo").id,
					'id':item.id
				};
				this.$axios
					.axios('POST', this.$paths.delAddress, data)
					.then(res => {
						if(res.code==200){
							this.$tools.showToast("删除成功")
							setTimeout(res=>{
								this.getAddress();
							},1000)
						}else{
							this.$tools.showToast(res.msg)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			toinfo(){
				uni.navigateTo({
					url:"/pages1/addressInfo/addressInfo"
				})
			},
			getAddress(){
				var data = {
					'uId':uni.getStorageSync("userInfo").id,
				};
				this.$axios
					.axios('POST', this.$paths.getCartList, data)
					.then(res => {
						this.addressList=res.data;
						uni.setStorageSync("address",res.data[0])
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			}
		}
	}
</script>

<style>
@import url(myAddress.css);
</style>

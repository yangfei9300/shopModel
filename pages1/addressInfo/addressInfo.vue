<template>
	<view>
		<view class="colonn">
			<view class="roww border_bottom p-bottom-30" 
			style="margin:30rpx 54rpx;">
				<view>收货人：</view>
				<input v-model="form.name" placeholder="请输入收货人" />
			</view>
			<view class="roww border_bottom p-bottom-30"
			style="margin:30rpx 54rpx;">
				<view>手机号：</view>
				<input v-model="form.phone"  placeholder="请输入手机号" />
			</view>
			<view class="roww border_bottom p-bottom-30"
			style="margin:30rpx 54rpx;">
				<view>省市区：</view>
				<biaofun-region :defaultValue="defaultValue" @change1="ssqChange"></biaofun-region>
				<view class="allline1"></view>
			</view>
			<view class="roww border_bottom p-bottom-30"
			style="margin:30rpx 54rpx;">
				<view>详细地址：</view>
				<input v-model="form.address"  placeholder="请输入详细地址" />
			</view>
			<view class="roww border_bottom p-bottom-30"
			style="margin:30rpx 54rpx;">
				<view>设为默认地址：</view>
				<view class="allline"></view>
				<image src="/static/dz_kai@2x.png" 
				@click.stop="siDefaultClick(2)"
				v-if="form.isDefault==1"
				mode="widthFix" 
				class="w-57 "></image> 
				<image src="/static/dz_guan@2x.png" v-else
				@click.stop="siDefaultClick(1)"
				mode="widthFix" 
				class="w-57 "></image>
			</view>
			<view class="roww center_center">
				<view class="subbtn" @click.stop="addAddress">保存</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					'uId':uni.getStorageSync("userInfo").id,
					'name':'',
					'phone':'',
					'address':'',
					'province':'',  
					'city':'',
					'area':'',
					'isDefault':'',
					'notes':'',
					'deptId':getApp().globalData.deptId
				},
				defaultValue:null
			}
		},
		onLoad(options) {
			if(options.id){
				var updateAddress=uni.getStorageSync("updateAddress")
				if(updateAddress){
					this.form=updateAddress;
					this.defaultValue=[this.form.province,this.form.city,this.form.area]
				}
			}
			
			
		},
		methods: {
			ssqChange(res){
				console.log("",res);
				this.form.province=res[0].name;
				this.form.city=res[1].name;
				this.form.area=res[2].name;
			},
			siDefaultClick(type){
				this.form.isDefault=type;
				
			},
			isSubmit(){
				if(this.form.name==""){
					this.$tools.showToast("请输入姓名");
					return false;
				}
				if(this.form.phone==""){
					this.$tools.showToast("请输入手机号");
					return false;
				}
				if(this.form.province==""){
					this.$tools.showToast("请输入省市区");
					return false;
				}
				if(this.form.address==""){
					this.$tools.showToast("请输入详细地址");
					return false;
				}
				return true;
			},
			addAddress(){
				
				var userInfo=uni.getStorageSync("userInfo");
				if(!userInfo){
					this.$tools.showToast("请先登录");
					return false;
				}
				
				if(!this.isSubmit()){
					return false;
				}
				var data = this.form;
				this.$axios
					.axios('POST', this.$paths.updateAddress, data)
					.then(res => {
						if(res.code==200){
							this.$tools.showToast("操作成功");
							if(data.id&&data.isDefault=='1'){
								uni.setStorageSync("morenId",data.id)
							}else
							if(data.isDefault=='1'&&!data.id){
								uni.setStorageSync("morenId",res.data)
							}
							setTimeout(res=>{
								uni.navigateBack({
									delta:1
								})
							},1000)
						}else{
							this.$tools.showToast(res.msg);
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
		}
	}
</script>

<style>
@import url(addressInfo.css);
</style>

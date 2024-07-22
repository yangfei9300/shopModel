<template>
	<view>
		<view class="colonn">
			<view class="roww border_bottom inputview center_center">
				<view>头像</view>
				<view class="allline"></view>
				<image v-if="userInfo.avatar==''" 
				src="/static/wd_gr@2x.png"
				 @click.stop="selimg(1)" 
				 style="border-radius: 50%;"
				 class="w-110 h-110"></image>
				 <image v-else  @click.stop="selimg(1)" 
				  :src="BASE_IMG+userInfo.avatar"
				 style="border-radius: 50%;"
				   class="w-110 h-110"></image>
			</view>
			<view class="roww border_bottom inputview">
				<view>姓名</view>
				<view class="w-20"></view>
				<input class="allline inoutal" v-model="userInfo.name" 
				 placeholder="请输入姓名"/>
			</view>
			<view class="roww border_bottom inputview">
				<view>姓名</view>
				<view class="w-20"></view>
				<input class="allline inoutal" v-model="userInfo.nickName"  
				placeholder="请输入昵称"/>
			</view>
			<view class="roww border_bottom inputview">
				<view>手机号</view>
				<view class="w-20"></view>
				<input class="allline inoutal"  v-model="userInfo.phoneNumber"   placeholder="请输入手机号"/>
			</view>
			<view class="roww border_bottom inputview">
				<view>密码</view>
				<view class="w-20"></view>
				<input class="allline inoutal"  v-model="userInfo.password" 
				  placeholder="请输入密码"/>
			</view>
			<view class="roww w-750 background1">
				<view class="colonn  border_bottom inputview center_center">
					<view>微信收款码</view>
					<view class="h-20"></view>
					<image mode="aspectFill"
					 v-if="userInfo.wximg==''" 
					 src="/static/1721233392382.png" class="w-300 h-550"></image>
					 <image mode="aspectFill"
					  v-else
					  :src="userInfo.wximg" class="w-300 h-550"></image>
				</view>
				<view class="colonn border_bottom inputview center_center">
					<view>支付宝收款码</view>
					<view class="h-20"></view>
					<image mode="aspectFill"
					 v-if="userInfo.aliimg==''" 
					 src="/static/1721233392382.png" class="w-300 h-550"></image>
					 <image mode="aspectFill"
					  v-else
					 :src="userInfo.aliimg"  class="w-300 h-550"></image>
				</view>
			</view>
		</view>
		
		<view class="roww">
			<view class="subbtnn" @click.stop="toSubmit">立即提交</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				BASE_IMG:"",
				userInfo:{
					'name':'',
					'nickName':'',
					'avatar':'',
					'phoneNumber':'',
					'password':'',
					'wximg':'',
					'aliimg':''
				}
			}
		},
		onLoad() {
			var userInfo=uni.getStorageSync("userInfo");
			if(userInfo){
				this.userInfo=userInfo;
			}
			this.BASE_IMG=this.$paths.BASE_IMG
		},
		methods: {
			toSubmit(){
				if(!this.isSubmit()){
					return false;
				}
				var data=this.userInfo
				this.$axios
					.axios('POST', this.$paths.registerUserInfo, data)
					.then(res => {
						if(res.code==200){
							this.$tools.showToast("注册成功");
							uni.setStorageSync("userInfo",res.data)
							
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
			isSubmit(){
				if(this.userInfo.avatar==""){
					this.$tools.showToast("请上传头像");
					return false;
				}
				if(this.userInfo.nickName==""){
					this.$tools.showToast("请输入昵称");
					return false;
				}
				if(this.userInfo.phoneNumber==""){
					this.$tools.showToast("请输入手机号");
					return false;
				}
				if(this.userInfo.password==""){
					this.$tools.showToast("请输入密码");
					return false;
				}
				return true;
			},
			
			
			selimg(type){
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success:  (res)=> {
						var list=res.tempFilePaths;
						if(list.length>0){
							this.uploadun(list[0],type);
						}
					}
				});
			},
			uploadun(img,type){
				
				this.$axios
					.axiosUpload( this.$paths.uploadFile,img, {})
					.then(res => {
						console.log("图片结果",res);
						if(type==1){
							this.userInfo.avatar=res.fileName
						}else if(type==2){
							this.userInfo.wximg=res.fileName
						}else if(type==3){
							this.userInfo.aliimg=res.fileName
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
@import url(userInfo.css);
</style>

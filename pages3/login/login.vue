<template>
	<view>
		<view class="colonn center_center">
			<view class="h-199"></view>
			<image :src="BASE_IMG+shopInfo.logo" mode="widthFix" 
			class="logo"></image>
			<view class="h-141"></view>
			<view class="inputvuew roww center_center">
				<view class="w-55"></view>
				<image src="/static/shoujihoa.png" class="w-40 h-40 "></image>
				<view class="w-20"></view>
				<input v-model="form.phoneNumber" placeholder="请输入手机号码" class="allline" />
			</view>
			<view class="h-30"></view>
			<view class="inputvuew roww center_center">
				<view class="w-55"></view>
				<image src="/static/mima.png" class="w-40 h-40 "></image>
				<view class="w-20"></view>
				<input password v-model="form.password"  placeholder="请输入密码" class="allline" />
			</view>
			<view class="h-100"></view>
			<view class="roww center_center">
				<view class="loginbtn" @click.stop="toLogin">登录</view>
			</view>
			<view class="roww">
				<view class="w-620 roww m-top-30 fs-30"
				style="color: #999999;"
				>
					<view @click.stop="tozhuce">立即注册</view>
					<view class="allline"></view>
					<view @click.stop="topassword">忘记密码</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shopInfo:{},
				BASE_IMG:"",
				form:{
					'phoneNumber':'',
					'password':'',
					'deptId':getApp().globalData.deptId
				}
			}
		},
		onLoad() {
			this.BASE_IMG=this.$paths.BASE_IMG;
			this.getShopInfo();
		},
		methods: {
			topassword(){
				uni.navigateTo({
					url:"/pages3/updatePwd/updatePwd"
				})
			},
			tozhuce(){
				uni.navigateTo({
					url:"/pages3/register/register"
				})
			},
			toLogin(){
				if(this.form.phoneNumber==""){
					this.$tools.showToast("请输入手机号");
					return false;
				}
				if(this.form.password==""){
					this.$tools.showToast("请输入密码");
					return false;
				}
				this.$axios
					.axios('POST', this.$paths.tooLogin, this.form)
					.then(res => {
						if(res.code==200){
							this.$tools.showToast("登录成功")
							uni.setStorageSync("userInfo",res.data);
							setTimeout(res=>{
								uni.reLaunch({
									url:"/pages/index/index"
								})
							},1000)
						}else{
							this.$tools.showToast(res.msg)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
			getShopInfo(){
				var data = {
					'deptId':getApp().globalData.deptId
				};
				this.$axios
					.axios('POST', this.$paths.getShopInfo, data)
					.then(res => {
						this.shopInfo=res.data;
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			},
		}
	}
</script>

<style>
@import url(login.css);
</style>

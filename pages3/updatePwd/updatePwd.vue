<template>
	<view>
		<view class="colonn">
			
			<view class="inputitem roww rowsa center_center">
				<view class="w-40"></view>
				<view>手机号</view>
				<view class="w-40"></view>
				<input v-model="form.phoneNumber" 
				placeholder="请输入手机号" class="allline" />
				<view class="w-40"></view>
			</view>
			<view class="inputitem roww rowsa center_center">
				<view class="w-40"></view>
				<view>新密码</view>
				<view class="w-40"></view>
				<input password v-model="form.password"  placeholder="请输入新密码" class="allline" />
				<view class="w-40"></view>
			</view>
			<view class="inputitem roww rowsa center_center">
				<view class="w-40"></view>
				<view>新密码</view>
				<view class="w-40"></view>
				<input password v-model="form.password1" placeholder="请再次输入新密码" class="allline" />
				<view class="w-40"></view>
			</view>
			<view class="inputitem roww rowsa center_center">
				<view class="w-40"></view>
				<view>验证码</view>
				<view class="w-40"></view>
				<input v-model="form.code" placeholder="请输入验证码" class="allline" />
				<view class="hqcode">获取验证码</view>
				<view class="w-40"></view>
			</view>
			<view class="p-all-20 fs-27"
			style="color: #999999;"
			>测试中：验证码默认为123456</view>
			<view class="roww center_center">
				<view class="bottombtn" @click.stop="toSubmit">确认修改</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					'password':'',
					password1:'',
					'phoneNumber':'',
					'code':'',
					'uId':'',
				}
			}
		},
		methods: {
			toSubmit(){
				if(!this.isSubmit()){
					return false;
				}
				// 
				var data=this.form;
					data.deptId=getApp().globalData.deptId
				this.$axios
					.axios('POST', this.$paths.updatePassword, data)
					.then(res => {
						if(res.code==200){
							this.$tools.showToast("修改成功")
							setTimeout(res=>{
								uni.reLaunch({
									url:"/pages3/login/login"
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
			isSubmit(){
				if(this.form.phoneNumber==""){
					this.$tools.showToast("请输入手机号");
					return false;
				}
				if(!this.$tools.isphone(this.form.phoneNumber)){
					this.$tools.showToast("请输入正确的手机号");
					return false;
				}
				if(this.form.password==""){
					this.$tools.showToast("请输入密码");
					return false;
				}
				if(this.form.password!=this.form.password1){
					this.$tools.showToast("两次密码输入不一致");
					return false;
				}
				if(this.form.code!="123456"){
					this.$tools.showToast("验证码输入错误");
					return false;
				}
				this.form.params={
					code:this.form.code
				}
				return true;
			},
			
		}
	}
</script>

<style>
@import url(updatePwd.css);
</style>

<template>
	<view>
		<view class="viewsub colonn">
			<view>反馈内容（必填）</view>
			<view class="h-20"></view>
			<textarea class="allline w-660" 
			placeholder="请输入内容" v-model="form.content"></textarea>
		</view>
		<view class="submit" @click.stop="addXdUserFeedback">提交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form:{
					uId:'',
					deptId:'',
					content:''
				}
			}
		},
		onLoad() {
			var userInfo=uni.getStorageSync("userInfo");
			if(!userInfo){
				this.$tools.showToast("请先登录");
			}else{
				this.form.deptId=getApp().globalData.deptId;
				this.form.uId=userInfo.id;
				
			}
			
		},
		methods: {
			addXdUserFeedback(){
				var data = this.form
				if(data.content==""){
					this.$tools.showToast("请输入反馈内容");
					return false;
				}
				this.$axios
					.axios('POST', this.$paths.addXdUserFeedback, data)
					.then(res => {
						if(res.code==200){
							this.$tools.showToast("提交成功")
						}else{
							this.$tools.showToast(res.msg)
						}
					})
					.catch(err => {
						console.log('错误回调', err);
					});
			}
		}
	}
</script>

<style>
@import url(opinionReturn.css);
</style>

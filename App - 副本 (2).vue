<script>
	export default {
		globalData:{
			activityId:5,
		},
		onLoad() {  
		},
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {	
			console.log('App Show');
		},
		onHide: function() {   
			console.log('App Hide');
		},
		methods:{
			//AES加密
			aesEncrypt(encrypt) {
				//加密值
				var e = this.AES.encrypt(encrypt, '1234567891234567', '1234567891234567')
				// console.error("加密结果",e);
				return e;
			},
			//AES解密
			aesDecrypt(decrypt) {
				// console.error("解密值",decrypt);
				//解密值
				var d = this.AES.decrypt(decrypt, '1234567891234567', '1234567891234567')
				// console.error("解密结果",d);
				return d;
			},
		}
	}  
</script>  

<style  lang="scss">
	/*每个页面公共css */  
	@import url("/style/style.css");
	@import url("/style/style_rpx.css");
	@import "/style/ty_style_scss.scss";
</style>

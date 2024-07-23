<template>
	<view>
		<view class="colonn p-all-40">
			<view class="topvciew pore colonn rowsa">
				<view>我的余额</view>
				<view class="roww duiqi">
					<view class="monruvv">{{ userInfo.money }}</view>
					<view class="w-10"></view>
					<view class="fs-25">元</view>
				</view>
				<view class="roww">
					<view class="allline"></view>
					<view class="tixian" @click.stop="toChongzhi">充值</view>
					<view class="w-41"></view>
					<view class="tixian" @click.stop="totixian">提现</view>
					<view class="w-41"></view>
				</view>
			</view>
			<view class="colonn">
				<view class="h-56"></view>
				<view class="roww center_center" @click.stop="listTypeClick(1)">
					<view class="yudd"></view>
					<view class="w-10"></view>
					<view class="yuemx">佣金记录</view>
					<image :src="listType == 1 ? '/static/zhishiqis.png' : '/static/zsqx.png'" class="w-50 h-50"></image>
					<view class="allline"></view>
				</view>
				<view class="h-31"></view>
				<view class="jiluitem colonn m-bottom-30" v-for="(item, index) in kickbackList" v-if="listType == 1">
					<view class="m-all-20 border_bottom p-bottom-20" style="font-weight: bold">分享</view>
					<view class="roww p-all-20 fs-30" style="color: #808080">
						<view>金额</view>
						<view class="allline"></view>
						<view class="duiqi roww" style="color: #f83d47">
							<view class="fs-35">+</view>
							<view class="fs-40 fw-600">{{ item.money }}</view>
						</view>
					</view>
					<view class="roww p-all-20 fs-30" style="color: #808080">
						<view>详情</view>
						<view class="allline"></view>
						<view class="duiqi roww">
							<view class="fs-30">{{ item.remark }}</view>
						</view>
					</view>
					<view class="roww p-all-20 fs-30" style="color: #808080">
						<view>商品个数</view>
						<view class="allline"></view>
						<view class="duiqi roww">
							<view class="fs-30">{{ item.goodCount }}件</view>
						</view>
					</view>
					<view class="roww p-all-20 fs-30" style="color: #808080">
						<view>状态</view>
						<view class="allline"></view>
						<view class="duiqi roww">
							<view class="fs-30" v-if="item.status == 1">冷却中</view>
							<view class="fs-30" v-if="item.status == 2">已收入</view>
						</view>
					</view>

					<view class="roww p-all-20 fs-30" style="color: #808080">
						<view>时间</view>
						<view class="allline"></view>
						<view class="duiqi roww">
							<view class=" ">{{ item.createTime }}</view>
						</view>
					</view>
				</view>

				<view class="h-56"></view>
				<view class="roww center_center" @click.stop="listTypeClick(2)">
					<view class="yudd"></view>
					<view class="w-10"></view>
					<view class="yuemx">余额明细</view>
					<image :src="listType == 2 ? '/static/zhishiqis.png' : '/static/zsqx.png'" class="w-50 h-50"></image>
					<view class="allline"></view>
				</view>
				<view class="h-31"></view>
				<view class="jiluitem colonn m-bottom-30" v-for="(item, index) in balanceList" v-if="listType == 2">
					<view class="m-all-20 border_bottom p-bottom-20" style="font-weight: bold">消费</view>
					<view class="roww p-all-20 fs-30" style="color: #808080">
						<view>金额</view>
						<view class="allline"></view>
						<view class="duiqi roww" style="color: #f83d47">
							<view class="fs-35">-</view>
							<view class="fs-40 fw-600">{{ item.totalPrice }}</view>
						</view>
					</view>
					<view class="roww p-all-20 fs-30" style="color: #808080">
						<view>时间</view>
						<view class="allline"></view>
						<view class="duiqi roww">
							<view class=" ">{{ item.createdAt }}</view>
						</view>
					</view>
				</view>

				<view class="h-56"></view>
				<view class="roww center_center" @click.stop="listTypeClick(3)">
					<view class="yudd"></view>
					<view class="w-10"></view>
					<view class="yuemx">余额充值</view>
					<image :src="listType == 3 ? '/static/zhishiqis.png' : '/static/zsqx.png'" class="w-50 h-50"></image>
					<view class="allline"></view>
				</view>
				<view class="h-31"></view>
				<view class="jiluitem colonn m-bottom-30" v-for="(item, index) in rangeList" v-if="listType == 3">
					<view class="m-all-20 border_bottom p-bottom-20" style="font-weight: bold">充值</view>
					<view class="roww p-all-20 fs-30" style="color: #808080">
						<view>金额</view>
						<view class="allline"></view>
						<view class="duiqi roww" style="color: #f83d47">
							<view class="fs-35">+</view>
							<view class="fs-40 fw-600">{{ item.rechargeAmount }}</view>
						</view>
					</view>
					<view class="roww p-all-20 fs-30" style="color: #808080">
						<view>时间</view>
						<view class="allline"></view>
						<view class="duiqi roww">
							<view class=" ">{{ item.createdTime }}</view>
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
			userInfo: {},
			rangeList: [],
			kickbackList: [],
			balanceList: [],
			listType: 1
		};
	},
	onLoad() {
		var userInfo = uni.getStorageSync('userInfo');
		if (userInfo) {
			this.getUserInfo();
			this.getBalance();
			this.getRangehistory();
			this.getKickbackhistory();
		} else {
			this.$tools.showToast('请先登录');
		}
	},
	methods: {
		listTypeClick(index) {
			if (index == this.listType) {
				this.listType = -1;
			} else {
				this.listType = index;
			}
		},
		// 获取余额记录 getConsumptionHistory
		getBalance() {
			var data = {
				uId: uni.getStorageSync('userInfo').id
			};
			this.$axios
				.axios('POST', this.$paths.getConsumptionHistory, data)
				.then((res) => {
					if (res.code == 200) {
						this.balanceList = res.data;
					} else {
						this.$tools.showToast(res.msg);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		// 获取充值记录
		getRangehistory() {
			var data = {
				uId: uni.getStorageSync('userInfo').id
			};
			this.$axios
				.axios('POST', this.$paths.getRangehistory, data)
				.then((res) => {
					if (res.code == 200) {
						this.rangeList = res.data;
					} else {
						this.$tools.showToast(res.msg);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		// 获取佣金记录
		getKickbackhistory() {
			var data = {
				uId: uni.getStorageSync('userInfo').id
			};
			this.$axios
				.axios('POST', this.$paths.getKickbackhistory, data)
				.then((res) => {
					if (res.code == 200) {
						this.kickbackList = res.data;
					} else {
						this.$tools.showToast(res.msg);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		// 获取用户信息
		getUserInfo() {
			var data = {
				id: uni.getStorageSync('userInfo').id
			};
			this.$axios
				.axios('POST', this.$paths.getUserInfo, data)
				.then((res) => {
					if (res.code == 200) {
						this.userInfo = res.data;
						uni.setStorageSync('userInfo', res.data);
					} else {
						this.$tools.showToast(res.msg);
					}
				})
				.catch((err) => {
					console.log('错误回调', err);
				});
		},
		toChongzhi() {
			uni.navigateTo({
				url: '/pages1/vipRecharge/vipRecharge'
			});
		},
		totixian() {
			uni.navigateTo({
				url: '/pages2/withdrawal/withdrawal'
			});
		}
	}
};
</script>

<style>
@import url(myMoney.css);
</style>

// 项目域名
// export const BASE_URL = 'http://tangyishijia.huizukeji.cn:81/zhihui'   
export const BASE_URL = 'http://localhost:9852/api'  
export const BASE_IMG = 'http://localhost:9852'
//----------项目接口请求路径-----------
// 获取分类  
const getGoodTypes =BASE_URL + '/shop/getGoodTypes' 
// 获取推荐列表
const getRecommendList =BASE_URL + '/shop/getRecommendList' 
// 获取轮播图 
const getBanners =BASE_URL + '/shop/getBanners' 

// 获取商品列表
const getGoodList =BASE_URL + '/shop/getGoodList' 
// 获取商品详情 
const getGoodInfo =BASE_URL + '/shop/getGoodInfo' 
// 注册个人信息 
const registerUserInfo =BASE_URL + '/user/registerUserInfo' 
// 加入购物车
const addCart =BASE_URL + '/user/addCart' 
// 获取我的购物车
const getCart =BASE_URL + '/user/getCart' 
// 添加地址
const updateAddress =BASE_URL + '/user/updateAddress' 
// 获取地址列表
const getCartList =BASE_URL + '/user/getCartList' 
// 获取优惠券列表
const getcouponList =BASE_URL + '/shop/getcouponList' 
// 领取优惠券
const addCouponById =BASE_URL + '/user/addCouponById' 
// 获取领取的优惠券
const getCouponListByUid =BASE_URL + '/user/getCouponListByUid' 
// 下单 
const addOrder =BASE_URL + '/user/addOrder' 
// 获取订单 
const getorders =BASE_URL + '/user/getorders' 
 // 确认收货  取消订单
const confirmOrder =BASE_URL + '/user/confirmOrder' 
 // 点击退款
 const returnOrderByuid =BASE_URL + '/user/returnOrderByuid' 
 // 上擦混图片 
 const uploadFile =BASE_URL + '/user/upload'
 const delAddress =BASE_URL + '/user/delAddress' 
 const getCouponByUid =BASE_URL + '/user/getCouponByUid'
 const getordersInfo =BASE_URL + '/user/getordersInfo'
 const delCarts =BASE_URL + '/user/delCarts'
  const payOrderById =BASE_URL + '/user/payOrderById'
  const addXdUserFeedback =BASE_URL + '/public/addXdUserFeedback'
 //订单退款
  const returnOrderMoneyByUid =BASE_URL + '/user/returnOrderMoneyByUid'
 // 获取购物车疏朗 
  const getCartGoodCount =BASE_URL + '/user/getCartGoodCount'
 // 获取哦佣金记录 
  const getKickbacks =BASE_URL + '/user/getKickbacks'
 // 获取商城详情
  const getShopInfo =BASE_URL + '/shop/getShopInfo'
 // 获取客服列表  
  const getKefuList =BASE_URL + '/shop/getKefuList'
  // 充值
  const userReangeMoney =BASE_URL + '/user/userReangeMoney'
  // 下单
  const toBalancePay =BASE_URL + '/user/toBalancePay'
  // 获取个人信息 
  const getUserInfo =BASE_URL + '/user/getUserInfo'
  // 获取佣金记录
const getKickbackhistory =BASE_URL + '/user/getKickbackhistory'
  // 充值记录 
const getRangehistory =BASE_URL + '/user/getRangehistory'
 // 余额记录
 const getConsumptionHistory =BASE_URL + '/user/getConsumptionHistory'
    
 
 
 export default {
	 getConsumptionHistory,
	 getRangehistory,
	 getKickbackhistory,
	 getUserInfo,
	 toBalancePay,
	 getShopInfo,getKefuList,userReangeMoney,
	 getKickbacks,
	 getCartGoodCount,
	 returnOrderMoneyByUid,
	 payOrderById,addXdUserFeedback,
	 getordersInfo,delCarts,
	 getCouponByUid,
	uploadFile,delAddress,
	 getRecommendList,
	 returnOrderByuid,
	 addOrder,getorders,confirmOrder,
	 addCouponById,getCouponListByUid,
	 getCartList,getcouponList,
	 addCart,getCart,updateAddress,
	 getGoodInfo,registerUserInfo,
	getBanners,BASE_IMG,getGoodTypes,getGoodList,
 }
 
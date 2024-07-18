// 项目域名
export const BASE_URL = 'https://frdhwapi.zsyflive.com'
// 大会简介
const meetingmeeting =BASE_URL + '/api/meeting/meeting/'
// 友情提示  
const meetingTips =BASE_URL + '/api/support/meetingTips/list'
// 宣传片 /api/medium/mediumVideo/list
const mediumVideolist =BASE_URL + '/api/medium/mediumVideo/list'
// 指引 
const meetingTipslist =BASE_URL + '/api/support/meetingTips/list'
// 联系电话  
const meetingContactlist =BASE_URL + '/api/support/meetingContact/list'
// 资料下载  
const meetingFilelist =BASE_URL + '/api/meeting/meetingFile/list'
// 咨询列表 
const mediumNewslist =BASE_URL + '/api/medium/mediumNews/list'


 export default {
	 mediumNewslist,
	 meetingFilelist,
	 meetingContactlist,
	 meetingTipslist,
	 mediumVideolist,
	 meetingmeeting,meetingTips,
 }
 
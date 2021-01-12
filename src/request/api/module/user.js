import axios from '../../http'
import base from '../base';
import qs from 'qs'; // 根据需求是否导入qs模块
/*
 *首页获取用户相关信息接口
 * 
 * */
export default {
	//用户基础信息
	getuser_static(){
		return axios.get(`${base.tomain_test}/get_user_info`);
	},
	getpage(params){
		//页码
		return axios.get(`${base.tomain_debug}/get_age`,
		{
			params:params        
		}
		)
	},
	 senduser(params) {  
	 	//发送用户信息
        return axios.post(`${base.tomain_debug}/accesstoken`, qs.stringify(params));    
   },
	
	//订单列表
	getOrder_list(params){
		return axios.get(`${base.tomain_production}/orderlist`,{
			params:params
		})
	}
// 其他接口…………
}





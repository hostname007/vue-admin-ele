import base from '../base';
import axios from '../../http';
import Qs from 'qs';
/**
 * 订单中心相关接口
 * **/
export default {
	getorder(params){
		//订单中心的列表
		return axios.get(`${base.tomain_test}/order_list`,{
			params:params
		})
	}
}

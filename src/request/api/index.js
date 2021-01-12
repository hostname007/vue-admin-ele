
/** 
 * api接口的统一出口
 */
// 用户信息模块接口
import user_api from './module/user';
//订单中心模块接口
import order_api from  './module/ordermodule';
// 其他模块的接口……
// 导出接口
export default {    
    user_api,
    order_api
    // ……
}	

import axios from 'axios';
import Qs from 'qs'; // 引入qs模块，用来序列化post类型的数据
import { Message } from 'element-ui';

//弹窗窗口
const message = m => {
	this.$message({
		message: m,
		type: 'warning'
	});
}
/**
 * 跳转登录
 * 携带当前路由，完成登录页面返回当前页面
 * **/
const toLogin = () => {
	router.replace({
		path: '/login',
		query: {
			redirece: router.currentRoute.fullPath
		}
	})
}

axios.defaults.timeout = 10000;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 请求拦截器
axios.interceptors.request.use(
	config => {
		// 每次发送请求之前判断vuex中是否存在token        
		// 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
		// 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
		const token = localStorage.getItem("token");
		token && (config.headers.Authorization = token);
		return config;
	},
	error => {
		return Promise.error(error);
	})

// 响应拦截器
axios.interceptors.response.use(
	res => res.status == 200 ? Promise.resolve(res): Promise.reject(res),
		// 服务器状态码不是2开头的的情况
		// 这里可以跟你们的后台开发人员协商好统一的错误状态码    
		// 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
		// 下面列举几个常见的操作，其他需求可自行扩展
		error => {
			if(error.response.status) {
				switch(error.response.status) {
					// 401: 未登录
					// 未登录则跳转登录页面，并携带当前页面的路径
					// 在登录成功后返回当前页面，这一步需要在登录页操作。                
					case 401:
						toLogin()
						break;

						// 403 token过期
						// 登录过期对用户进行提示
						// 清除本地token和清空vuex中token对象
						// 跳转登录页面                
					case 403:
						message('登录过期，请重新登录')
						// 清除token
						localStorage.removeItem('token');
						// 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
						setTimeout(() => {
							toLogin()
						}, 1000);
						break;

						// 404请求不存在
					case 404:
						message('网络请求不存在')
						break;
						// 其他错误，直接抛出错误提示
					default:
						this.$message.error(error.response.data.message);
				}
				return Promise.reject(error.response);
			}
		});


export default axios;
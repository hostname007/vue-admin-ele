// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/store';
import api from './request/api' // 导入api接口


Vue.prototype.$api = api; // 将api挂载到vue的原型上

Vue.config.productionTip = false;
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
		document.title=to.meta[0].title;		//实时更新网页title
	if(to.meta.required){
		if(localStorage.getItem("username")){
			next();
		}else{
			console.log("不存在")
			next('/login')
		}
		
		}else{
			next()			
		}
})

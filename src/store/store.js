import Vue from 'vue';
import Vuex from 'vuex';
import state from './state'
import mutations from './mutations'
import getters from './getter'
Vue.use(Vuex);
const store =new Vuex.Store({
	state:state,
	mutations:mutations,
	getters:getters
})
export default store

import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

// import { reject } from 'core-js/fn/promise'
// import { reject } from 'core-js/fn/promise'
Vue.use(Vuex)
// 获取token
export function getToken() {
	return Cookies.get('admin_token')
}
const actions = {
	login({ commit }, loginFrom) {
		const { username } = loginFrom
		return new Promise((resolve,reject) => {
      console.log("进入promise了");
			if(username==='admin'){
				commit('SET_TOKEN', username)
				resolve()
			}else{
        reject("用户名或密码错误！！！")
      }
      
		})

	},
  logout({commit}){
    commit('CLEAR_TOKEN')
  }
}
const mutations = {
	SET_TOKEN(_, username) {
		Cookies.set('admin_token', username)
	},
  CLEAR_TOKEN(){
    Cookies.remove('admin_token')
  }
}
const state = {
	token: getToken(),
	username: '',
	passwd: ''
}


export default new Vuex.Store({
	actions,
	mutations,
	state,
})


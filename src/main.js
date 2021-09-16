import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// 引入全局的element组件库
import ElementUI from 'element-ui'

//引入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css'
import './permission'
//按需引入
// import { Button,Row,DatePicker } from 'element-ui';

Vue.config.productionTip = false
Vue.use(ElementUI)

const vm = new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')

console.log(vm)

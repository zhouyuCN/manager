import Vue from 'vue'
import App from './App.vue'
//导入样式
import './assets/base.scss'

//抽取axios 

//饿了么 UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//导入面包屑模板
import myBread from './components/my-bread.vue';
Vue.component('my-bread', myBread)

//导入moment
import moment from 'moment';
Vue.filter('doTime', (value, doTime)=> {
 return  moment(value).format(doTime)
  
})


//导入我的axios
import myaxios from './myaxios.js'
Vue.use(myaxios)

Vue.config.productionTip = false



import router from './router.js'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

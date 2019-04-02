import Vue from 'vue'
import App from './App.vue'
//导入样式
import './assets/base.scss'
// 导入 axios 
import axios from 'axios';
//抽取axios 
Vue.prototype.$axios = axios;
//设置基地址
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';
//饿了么 UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//导入面包屑模板
import myBread from './components/my-bread.vue';
Vue.component('my-bread', myBread)

// 请求数据
axios.interceptors.request.use(function (config) {
  config.headers.Authorization = window.sessionStorage.getItem('token');
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 响应数据
axios.interceptors.response.use(function (response) {
  if (response.data.meta.status === 200 || response.data.meta.status === 201 || response.data.meta.status === 204) {
    Vue.prototype.$message.success(response.data.meta.msg)
  } else {
    Vue.prototype.$message.warning(response.data.meta.msg)
  }
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});


Vue.config.productionTip = false



import router from './router.js'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

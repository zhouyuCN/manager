import Vue from 'vue'
import App from './App.vue'
//导入样式
import './assets/base.scss'
//饿了么 UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false



import router from './router.js'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

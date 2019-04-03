
import axios from 'axios'
import router from  './router'


export default {
    install(Vue) {

        //设置基地址
        axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';
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
            if (response.data.meta.msg === "无效token" && response.data.meta.status === 400) {
                Vue.prototype.$message.warning('伪造token,滚回登入页');
                window.sessionStorage.removeItem('token');
                router.push('/login');
                return false;
            }
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
        Vue.prototype.$axios = axios;

    }
}
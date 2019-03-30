import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
// 导入组件
import login from './components/login.vue'
import index from './components/index.vue'
import users from './components/users.vue'
import roles from './components/roles.vue'


//规则

let routes = [{
        path: '/',
        component: index,
        redirect: '/users',
    children: [
        {
            path: 'users',
            component: users
        },
        {
            path: 'roles',
            component: roles
        },
    ]


    },
    {
        path: '/login',
        component: login
    }
]
//实例化路由对象

let router = new VueRouter({
    routes
})
//暴露
export default router
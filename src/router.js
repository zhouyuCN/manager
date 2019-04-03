import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
// 导入组件
import login from './components/login.vue'
import index from './components/index.vue'
import users from './components/users.vue'
import roles from './components/roles.vue'
import rights from './components/rights.vue'
import goods from './components/goods.vue'
import orders from './components/orders.vue'
import params from './components/params.vue'
import categories from './components/categories.vue'
import reports from './components/reports.vue'
import error from './components/error.vue'





//规则

let routes = [
    {
        path: '/error',
        component: error

    },
    {
        path: '/',
    component: index,
        
    children: [
        {
            path: 'users',
            component: users
        },
        {
            path: 'roles',
            component: roles
        },
        {
            path: 'rights',
            component: rights
        },
        {
            path: 'goods',
            component: goods
        },
        {
            path: 'orders',
            component: orders
        },
        {
            path: 'params',
            component: params
        },
        {
            path: 'categories',
            component: categories
        },
        {
            path: 'reports',
            component: reports
        },
      
    ]
    },
    {
        path: '/login',
        component: login,
        meta: { 
            //不需要登入?true
          noLogin:true  
         }
    },

]
//实例化路由对象

let router = new VueRouter({
    routes
})

//设置导航守卫
router.beforeEach((to, from, next) => {

    if (to.matched.length === 0) {
        Vue.prototype.$message.error('输入的地址不对')
        next('/error')
    }
    
    

    // if (to.path === '/login'){
    //如果meta字段为noLogin为true 就是登入页  直接放行
    if(to.meta.noLogin===true){
        next()
    } else {
        if (window.sessionStorage.getItem('token')) {
            next()
        } else {
            Vue.prototype.$message.error('请登入');
            next('/login')
        }

    }
  
    
})
//暴露
export default router
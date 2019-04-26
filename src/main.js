//引入vue文件
import Vue from 'vue'
//引入底层组件
import App from './App.vue'



// 引入element-ui
import ElementUI from 'element-ui';
//引入axios
import Axios from 'axios'

// 引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css';




// 引入路由模块
import VueRouter from "vue-router";
// 引入登录页模块
import Login from './pages/Login.vue';
import Admin from './pages/Admin.vue'





//
Vue.config.productionTip = false;

//注册UI组件
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.prototype.$axios = Axios;



// 路由的配置
const routes = [
    { path: "/login", component: Login },
    { path: "/admin", component: Admin },

]

// 创建路由对象
const router = new VueRouter({ routes })








//创建根实例
new Vue({
    render: h => h(App),
    router,




}).$mount('#app')
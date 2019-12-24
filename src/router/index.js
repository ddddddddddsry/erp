import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () =>
  import(/* webpackChunkName:'Login' */ '../components/login/Login.vue') // 登陆页面

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/Login' }, // 重定向至登录
  { path: '/Login', component: Login } // 登录
]

const router = new VueRouter({
  routes
})

export default router

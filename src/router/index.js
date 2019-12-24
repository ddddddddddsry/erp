import Vue from 'vue'
import VueRouter from 'vue-router'
// 登陆注册部分
const Login = () =>
  import(/* webpackChunkName:'Login' */ '../components/login/Login.vue') // 登陆页面
const Register = () =>
    import(/* webpackChunkName:'Login' */ '../components/login/Register.vue') // 注册页面
const ResetPasswd = () =>
    import(/* webpackChunkName:'Login' */ '../components/login/ResetPasswd.vue') // 找回密码页面

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/Login' }, // 重定向至登录
  { path: '/Login', component: Login }, // 登录
  { path: '/Register', component: Register }, // 注册
  { path: '/ResetPasswd', component: ResetPasswd } // 找回密码
]

const router = new VueRouter({
  routes
})

export default router

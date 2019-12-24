import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () =>
  import(/* webpackChunkName:'Login' */ '../components/login/Login.vue') // 登陆页面
const Home = () => import('../components/Home.vue') // 首页页面
const Welcome = () => import('../components/Welcome.vue')// 欢迎页面
const Discount = () => import('../components/discount/discount.vue')// 贴现管理页面
const AcceptanceBank = () => import('../components/discount/acceptanceBank.vue')// 承兑银行页面
const FinanceCompany = () => import('../components/discount/financeCompany.vue')// 财务公司
const Member = () => import('../components/discount/member.vue')// 会员

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/Login' }, // 重定向至登录
  { path: '/Login', component: Login }, // 登录
  { path: '/Home',
    component: Home,
    redirect: '/Welcome',
    children: [
      { path: '/Welcome', component: Welcome },
      { path: '/discount', component: Discount },
      { path: '/acceptanceBank', component: AcceptanceBank },
      { path: '/financeCompany', component: FinanceCompany },
      { path: '/member', component: Member }]
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

// 登陆注册部分
const Login = () => import(/* webpackChunkName:'Login' */ '../components/login/Login.vue') // 登陆页面
const Register = () => import(/* webpackChunkName:'Login' */ '../components/login/Register.vue') // 注册页面
const ResetPasswd = () => import(/* webpackChunkName:'Login' */ '../components/login/ResetPasswd.vue') // 找回密码页面

// 首页
const Home = () => import(/* webpackChunkName:'Index' */ '../components/Home.vue') // 首页页面
const Welcome = () => import(/* webpackChunkName:'Index' */ '../components/Welcome.vue') // 欢迎页面

// 利率报价器
const Calculator = () => import(/* webpackChunkName:'Calculator' */ '../components/Calculator.vue') // 利率报价器页

// 贴现管理及其子页面
const Discount = () => import(/* webpackChunkName:'Discount' */ '../components/discount/discount.vue') // 贴现管理页面
const RateList = () => import(/* webpackChunkName:'Discount' */ '../components/discount/RateList.vue') // 实时利率页面
const AcceptanceBank = () => import(/* webpackChunkName:'Discount' */ '../components/discount/acceptanceBank.vue') // 承兑银行页面
const FinanceCompany = () => import(/* webpackChunkName:'Discount' */ '../components/discount/financeCompany.vue') // 财务公司
const ProfitList = () => import(/* webpackChunkName:'Discount' */ '../components/discount/ProfitList.vue') // 贴现分成列表
const DiscountData = () => import(/* webpackChunkName:'Discount' */ '../components/discount/DiscountData.vue') // 贴现数据列表
const Apply = () => import(/* webpackChunkName:'Discount' */ '../components/discount/Apply.vue')// 企业申请贴现

// 成员管理及其子页面
const Member = () => import(/* webpackChunkName:'Member' */ '../components/user/Member.vue')
const UserList = () => import(/* webpackChunkName:'Member' */ '../components/user/UserList.vue')
const Under = () => import(/* webpackChunkName:'Member' */ '../components/user/Under.vue')

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/Home'
}, // 重定向至首页
{
  path: '/Login',
  component: Login
}, // 登录
{
  path: '/Register',
  component: Register
}, // 注册
{
  path: '/ResetPasswd',
  component: ResetPasswd
}, // 找回密码
{
  path: '/Home',
  component: Home,
  redirect: '/Welcome',
  children: [{
    path: '/Calculator',
    component: Calculator,
    name: 'Calculator',
    meta: {
      title: '利率报价器'
    }
  }, // 利率报价器
  {
    path: '/Welcome',
    component: Welcome,
    name: 'Welcome',
    meta: {
      title: 'Welcome'
    }
  },
  {
    path: '/discount',
    component: Discount,
    name: 'Discount',
    meta: {
      title: '贴现管理'
    }
  },
  { path: '/discount/Apply',
    component: Apply,
    name: 'DiscountApply',
    meta: { title: '企业贴现申请' } },
  {
    path: '/RateList',
    component: RateList,
    name: 'RateList',
    meta: {
      title: '实时利率列表'
    }
  },
  {
    path: '/acceptanceBank',
    component: AcceptanceBank,
    name: 'AcceptanceBank',
    meta: {
      title: '承兑银行列表'
    }
  },
  {
    path: '/financeCompany',
    component: FinanceCompany,
    name: 'FinanceCompany',
    meta: {
      title: '承兑财务公司'
    }
  },
  {
    path: '/DiscountData',
    component: DiscountData,
    name: 'DiscountData',
    meta: {
      title: '贴现数据列表'
    }
  },
  {
    path: '/ProfitList',
    component: ProfitList,
    name: 'ProfitList',
    meta: {
      title: '贴现分成列表'
    }
  },
  {
    path: '/Member',
    component: Member,
    name: 'Member',
    meta: {
      title: '贴现用户列表'
    }
  },
  {
    path: '/UserList',
    component: UserList,
    name: 'UserList',
    meta: {
      title: '营销用户列表'
    }
  },
  {
    path: '/Under',
    component: Under,
    name: 'Under',
    meta: {
      title: '我的下级用户'
    }
  }
  ]
}
]

const router = new VueRouter({
  routes
})

// 路由拦截
router.beforeEach((to, from, next) => {
  if (to.path === '/Login' || localStorage.getItem('token')) {
    next()
  } else {
    next('/Login')
  }
})

export default router

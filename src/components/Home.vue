<template>
  <el-container>
    <!-- 侧边栏 -->
    <el-aside width="auto">
      <!-- 导航组件 -->
      <el-menu
        router
        unique-opened
        :collapse="isCollapse"
        :default-active="activePath"
        :collapse-transition="false"
        class="el-menu-vertical-demo"
        background-color="#47678E"
        text-color="#fff"
        active-text-color="#55D3E5"
      >

        <!-- 个人信息头部分 -->
        <!-- 不收缩时展示详细信息（头像+用户名+个人中心入口） -->
        <div
          class="memberInfo"
          v-show="!isCollapse"
        >
          <div class="avatar">
            <img
              src="../assets/imgs/avatar.jpg"
              alt=""
            >
          </div>
          <div class="info">
            <p>
              <el-tooltip
                class="item"
                effect="dark"
                content="个人中心"
                placement="bottom"
              >
                <span @click="goPersonCenter">宋茹怡
                </span>
              </el-tooltip>
            </p>
          </div>
        </div>
        <!-- 收缩时只展示头像 -->
        <div
          class="blank"
          v-show="isCollapse"
        >
          <div class="avatar">
            <img
              src="../assets/imgs/avatar.jpg"
              alt=""
            >
          </div>
        </div>
        <!-- 无下拉的菜单项 -->
        <el-menu-item
          @click="toPath(citem.path)"
          v-for="citem in menuData1"
          :key="citem.id"
          :index="citem.path"
        >
          <i :class="citem.ico"></i>
          <span>{{citem.menuName}}</span>
        </el-menu-item>
        <!-- 有下拉的菜单项 -->
        <el-submenu
          :index="item.id+''"
          v-for="item in menuData"
          :key="item.id"
        >
          <template slot="title">
            <i :class="item.ico"></i>
            <span>{{item.menuName}}</span>
          </template>
          <el-menu-item
            @click="toPath(citem.path)"
            v-for="citem in item.children"
            :key="citem.id"
            :index="citem.path"
          >{{citem.menuName}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <!-- 头部 -->
      <el-header height="42px">
        <!-- 控制侧边栏的伸缩按钮 -->
        <div
          @click="toggle"
          class="reduce"
        >
          <i
            v-show="!isCollapse"
            class="el-icon-d-arrow-left"
          ></i>
          <i
            v-show="isCollapse"
            class="el-icon-d-arrow-right"
          ></i>
        </div>
        <!-- 导航tag组件 -->
        <TagsView></TagsView>
        <!-- 退出登录 -->
        <el-tooltip
          class="item"
          effect="dark"
          content="退出登录"
          placement="bottom"
        >
          <el-button
            @click="outLogin"
            class="el-icon-switch-button outlogin"
          >
          </el-button>
        </el-tooltip>
      </el-header>
      <!-- 页面主要内容展示区域 -->
      <el-main>
        <div class="content">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
// 引入导航tag组件
import TagsView from './Tag.vue'
export default {
  created () {
    // 登录进入页面时默认为welcome页面，此时侧边菜单栏默认选中welcome菜单项
    if (this.$route.path === '/Welcome') {
      this.activePath = '/Welcome'
      // 其他情况下读取在sessionstorage里的path路径
    } else {
      this.activePath = window.sessionStorage.getItem('path')
    }
  },
  components: {
    TagsView
  },
  data () {
    return {
      isCollapse: false, // 侧边栏是否伸缩
      menuData: [ // 侧边栏导航可下拉的菜单项
        {
          id: 1,
          menuName: '贴现管理',
          ico: 'el-icon-s-data',
          path: '/discount',
          children: [
            { id: 11, menuName: '贴现管理', path: '/discount' },
            { id: 15, menuName: '实时利率列表', path: '/RateList' },
            { id: 12, menuName: '承兑银行列表', path: '/acceptanceBank' },
            { id: 13, menuName: '承兑财务公司', path: '/financeCompany' }
            // { id: 14, menuName: '分级会员', path: '/member' }
          ]
        },
        {
          id: 3,
          menuName: '成员管理',
          ico: 'el-icon-s-order',
          path: '/Member',
          children: [{ id: 31, menuName: '贴现用户列表', path: '/Member' },
          // { id: 32, menuName: '营销用户列表', path: '/UserList' },
            { id: 33, menuName: '我的下级用户', path: '/Under' }]
        }
      ],
      menuData1: [ // 侧边栏导航不可下拉的菜单项
        {
          id: 2,
          menuName: 'Welcome',
          path: '/Welcome',
          ico: 'el-icon-news'
        },
        {
          id: 4,
          menuName: '利率报价器',
          path: '/Calculator',
          ico: 'el-icon-edit-outline'
        }],
      activePath: '' // 当前激活菜单的index路由地址
    }
  },
  methods: {
    // 点击侧边菜单项时，存储路由路径至sessionstorage里，并设置activepath
    toPath (path) {
      // console.log(path)
      window.sessionStorage.setItem('path', path)
      this.activePath = path
    },
    // 点击切换侧边栏伸缩按钮进行切换
    toggle () {
      this.isCollapse = !this.isCollapse
    },
    // 退出登录
    outLogin () {
      window.sessionStorage.clear()
      this.$router.push('/Login')
    },
    // 点击箭头前往个人中心
    goPersonCenter () {

    }
  },
  watch: {
    '$route.path': function (newVal, oldVal) {
      if (newVal === '/Welcome') {
        this.activePath = '/Welcome'
      } else {
        this.activePath = newVal
      }
    }
  }
}
</script>
<style lang="less">
// 修改侧边栏菜单项的默认icon图标颜色
.el-submenu__title i,
.el-menu-item i {
  color: #fff;
}
</style>
<style lang="less" scoped>
.el-submenu .el-menu-item {
  min-width: auto;
  padding: 0;
  padding-left: 49px !important;
}
.el-container {
  height: 100%;
}
.el-header {
  color: #fff;
  padding: 0px;
  background: linear-gradient(
    to top,
    #47678e 0px,
    #fff 4px
  ); // 显示有渐变效果的bottom-border
  // background: rgb(175, 224, 219);
  // background: linear-gradient(to right, rgb(134, 207, 200),rgb(175, 224, 219), rgb(134, 207, 200));
  position: relative;
}
.el-aside {
  color: #333;
  height: 100%;
  .el-menu {
    height: 100%;
    border-right: solid 0px #e6e6e6;
  }
}
.el-main {
  color: #333;
  padding: 0;
  position: relative;
  // background:linear-gradient(to right, #ddd 0px, #eee 4px,#fff 10px);
  background: linear-gradient(to right, #999 0px, #ddd 4px, #fff 10px);
}
// 控制侧边栏伸缩的按钮
.reduce {
  position: absolute;
  left: 0px;
  top: 7px;
  z-index: 999;
  font-weight: 400;
  font-size: 12px;
  padding: 4px 9px 5px 7px;
  border-radius: 3px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  background-color: #10b9d3;
  background-color: rgb(99, 143, 192);
  color: #fff;
  cursor: pointer;
}

// 退出登陆的按钮
.outlogin {
  background-color: #10b9d3;
  background-color: rgb(99, 143, 192);
  color: #fff;
  border: none;
  position: absolute;
  right: 7px;
  font-size: 12px;
  padding: 7px 9px 6px 9px;
  top: 7px;
}

// 收缩时的个人信息栏
.blank {
  height: 152px;
  width: 64px;
  align-items: center;
  justify-content: center;
  display: flex;
  background: url(../assets/imgs/bg_main_info3.jpg);
  background-position: bottom center;
  background-size: cover;
  box-sizing: border-box;
  .avatar {
    width: 45px;
    height: 45px;
    border: 2px solid #fff;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
}

// 不收缩时的个人信息栏
.memberInfo {
  height: 152px;
  width: 180px;
  text-align: center;
  box-sizing: border-box;
  align-items: center;
  background: url(../assets/imgs/bg_main_info3.jpg);
  background-position: bottom right;
  background-size: cover;
  position: relative;
  overflow: hidden;
  .avatar {
    width: 60px;
    height: 60px;
    border: 2px solid #fff;
    border-radius: 50%;
    overflow: hidden;
    margin: 30px auto 10px;
    img {
      width: 100%;
    }
  }
  .info p {
    color: #fff;
    text-shadow: 0 0 5px #666;
    font-size: 14px;
    span {
      cursor: pointer;
      &:hover {
        color: #55d3e5;
      }
    }
  }
}
</style>

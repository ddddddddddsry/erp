<template>
  <el-container class="main">
    <el-header>
      <div class="header">
        <img
          src="../assets/imgs/logo2.png"
          alt=""
        >
        <span>ERP管理系统</span>
      </div>
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
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="auto">
        <el-menu
          router
          unique-opened
          :collapse="isCollapse"
          :default-active="activePath"
          :collapse-transition="transition"
          class="el-menu-vertical-demo"
        >
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

          <!-- 个人信息部分 -->
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
              <p class="name">个人中心
                <el-tooltip
                  class="item"
                  effect="dark"
                  content="个人中心"
                  placement="bottom"
                >
                  <span
                    @click="goPersonCenter"
                    class="el-icon-caret-bottom"
                  >
                  </span>
                </el-tooltip>
              </p>
              <!-- <p class="place ellipsis-1">奉贤区第一人民医院</p> -->
            </div>
          </div>
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
      <el-main>
        <div class="content">
          <TagsView></TagsView>
          <router-view></router-view>

        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import TagsView from './Tag.vue'
export default {

  created () {
    if (this.$route.path === '/Welcome') {
      this.activePath = ''
    } else {
      this.activePath = window.sessionStorage.getItem('path')
    }
  },
  components: {

    TagsView
  },
  data () {
    return {
      isCollapse: false,
      collapseBtnClick: true,
      transition: false,
      menuData: [
        {
          id: 1,
          menuName: '贴现管理',
          ico: 'el-icon-s-data',
          path: '/discount',
          children: [
            { id: 11, menuName: '贴现管理', path: '/discount' },
            { id: 12, menuName: '承兑银行管理', path: '/acceptanceBank' },
            { id: 13, menuName: '承兑财务公司', path: '/financeCompany' }
            // { id: 14, menuName: '分级会员', path: '/member' }
          ]
        },
        {
          id: 2,
          menuName: '序列比对',
          path: '/Order',
          ico: 'el-icon-s-marketing',
          children: [
            { id: 21, menuName: '序列比对', path: '/Order' }
            // { id: 22, menuName: '序列分析', path: '/Analyse' }
          ]
        },
        {
          id: 3,
          menuName: '成员管理',
          ico: 'el-icon-s-order',
          path: '/Member',
          children: [{ id: 31, menuName: '贴现用户列表', path: '/Member' },
            { id: 32, menuName: '营销用户列表', path: '/UserList' },
            { id: 33, menuName: '我的下属会员', path: '/Under' }]
        }
      ],
      activePath: ''
    }
  },
  methods: {
    toPath (path) {
      // console.log(path)
      window.sessionStorage.setItem('path', path)
      this.activePath = path
    },
    toggle () {
      this.collapseBtnClick = this.isCollapse
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
        this.activePath = ''
      } else {
        this.activePath = newVal
      }
    }
  }
}
</script>
<style lang="less" scoped>
.el-submenu .el-menu-item{
  min-width: auto;
  padding: 0;
  padding-left: 50px!important;
}
.main {
  height: 100%;
}
.outlogin {
  background-color: transparent;
  color: #fff;
  border: none;
}
.el-header {
  background-color: #569be0;
  color: #fff;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .header {
    font-size: 18px;
    display: flex;
    align-items: center;

    img {
      height: 35px;
      margin-right: 20px;
    }
  }
}
.el-aside {
  color: #333;
  height: 100%;
  background-color: pink;
  box-shadow: 0px 0px 10px #999;
  .el-menu {
    height: 100%;
  }
}
.reduce {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 999;
  background-color: rgba(1, 116, 151, 0.5);
  font-weight: 400;
  font-size: 18px;
  padding: 0 23px;
  color: #fff;
  cursor: pointer;
  transition: all .5s;
  &:hover {
  background-color: rgba(1, 116, 151, 0.8);
  }
}
.blank {
  height: 110px;
  width: 64px;
  align-items: center;
  justify-content: center;
  display: flex;
  background: url(../assets/imgs/bg_main_info2.jpg);
  background-position: center center;
  background-size: cover;
  box-sizing: border-box;
  .avatar {
    width: 45px;
    height: 45px;
    border: 2px solid #fff;
    border-radius: 50%;
    overflow: hidden;
    margin-top: 20px;
    img {
      width: 100%;
    }
  }
}
.memberInfo {
  height: 110px;
  display: flex;
  padding: 15px;
  box-sizing: border-box;
  align-items: center;
  background: url(../assets/imgs/bg_main_info2.jpg);
  background-position: center center;
  background-size: cover;
  position: relative;
  .avatar {
    width: 50px;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
    img {
      width: 100%;
    }
  }
  .info p {
    color: #fff;
    text-shadow: 0 0 5px #666;
    &:first-child {
      font-size: 18px;
      margin-bottom: 8px;
    }
    &:last-child {
      font-size: 14px;
    }
    span {
      cursor: pointer;
    }
  }
}
.el-main {
  color: #333;
  // background-color: #ccc;
  margin-left: 5px;
  // padding: 60px 20px 10px;
  padding: 0;
  position: relative;

  .el-breadcrumb {
    height: 60px;
    line-height: 60px;
    position: absolute;
    top: 0;
  }
  .content {
    background-color: #fff;
    box-sizing: border-box;
    padding: 10px;
    height: 100%;
  }
}
</style>

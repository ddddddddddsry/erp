<template>
  <el-container class="main">
    <!-- 侧边栏 -->
    <el-aside width="auto">
      <el-menu
        router
        unique-opened
        :collapse="isCollapse"
        :default-active="activePath"
        :collapse-transition="transition"
        class="el-menu-vertical-demo"
      background-color="#47678E"
      text-color="#fff"
      active-text-color="#55D3E5"
      >

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
            <p class="name">宋茹怡
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
    <el-container>
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
        <!-- 导航tag标签 -->
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
      <el-main>
        <div class="content">
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
          id: 2,
          menuName: '利率报价器',
          path: '/Order',
          ico: 'el-icon-s-marketing',
          children: [
            { id: 21, menuName: '利率报价器', path: '/Calculator' }
            // { id: 22, menuName: '序列分析', path: '/Analyse' }
          ]
        },
        {
          id: 1,
          menuName: '贴现管理',
          ico: 'el-icon-s-data',
          path: '/discount',
          children: [
            { id: 11, menuName: '贴现管理', path: '/discount' },
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
<style lang="less">
.el-submenu__title i {
  color : #fff;
}
</style>
<style lang="less" scoped>
.el-submenu .el-menu-item {
  min-width: auto;
  padding: 0;
  padding-left: 50px !important;
}
.main {
  height: 100%;
}
.el-header {
  color: #fff;
  padding: 0px;
  background: linear-gradient(to top, #47678E 0px, #fff 4px);
  // background: rgb(175, 224, 219);
  // background: linear-gradient(to right, rgb(134, 207, 200),rgb(175, 224, 219), rgb(134, 207, 200));
  // background: linear-gradient(to right, #4485A1, rgb(56, 102, 172),#4485A1);
  position: relative;
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  // .header {
  //   font-size: 18px;
  //   display: flex;
  //   align-items: center;

  //   img {
  //     height: 35px;
  //     margin-right: 20px;
  //   }
  // }
}
.el-aside {
  color: #333;
  height: 100%;
  .el-menu {
    height: 100%;
    border-right: solid 0px #e6e6e6;
  }
}
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
  background-color: #10B9D3;  background-color: rgb(99, 143, 192);

  color: #fff;
  cursor: pointer;
}

.outlogin {
  background-color: #10B9D3;  background-color: rgb(99, 143, 192);

  color: #fff;
  border: none;
  position: absolute;
  right: 7px;
  font-size: 12px;
  padding: 7px 9px 6px 9px;
  top: 7px;

}
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
.memberInfo {
  height: 152px;
  display: flex;
  padding: 18px;
  box-sizing: border-box;
  align-items: center;
  background: url(../assets/imgs/bg_main_info3.jpg);
  background-position: bottom right;
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
  padding: 0;
  position: relative;
  // background:linear-gradient(to right, #ddd 0px, #eee 4px,#fff 10px);
  background:linear-gradient(to right, #999 0px, #ddd 4px,#fff 10px);

  .el-breadcrumb {
    height: 60px;
    line-height: 60px;
    position: absolute;
    top: 0;
  }

}
</style>

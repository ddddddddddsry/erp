<template>
  <div
    class="tags"
    v-if="showTags"
  >
    <ul>
      <li
        class="tags-li"
        v-for="(item,index) in tagsList"
        :class="{'active': isActive(item.path)}"
        :key="index"
      >
        <router-link
          :to="item.path"
          class="tags-li-title"
        >
          {{item.title}}
        </router-link>
        <span
          class="tags-li-icon"
          @click="closeTags(index)"
        ><i class="el-icon-close"></i></span>
      </li>
    </ul>
    <!-- 操作按钮 -->
    <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <el-button size="mini">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu
          size="small"
          slot="dropdown"
        >
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tagsList: []
    }
  },
  computed: {
    showTags () {
      return this.tagsList.length > 0
    }
  },
  watch: {
    $route (newValue) {
      this.setTags(newValue)
    }
  },
  created () {
    this.setTags(this.$route)
  },
  methods: {
    isActive (path) {
      return path === this.$route.fullPath
    },
    closeTags (index) {
      const delItem = this.tagsList.splice(index, 1)[0]
      const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1]
      if (item) {
        delItem.path === this.$route.fullPath && this.$router.push(item.path)
      } else {
        this.$router.push('/')
      }
    },
    closeAll () {
      this.tagsList = []
      this.$router.push('/')
    },
    closeOther () {
      const curItem = this.tagsList.filter(item => {
        return item.path === this.$route.fullPath
      })
      this.tagsList = curItem
    },
    // 设置标签
    setTags (route) {
      const isExist = this.tagsList.some(item => {
        return item.path === route.fullPath
      })
      !isExist && this.tagsList.push({
        title: route.meta.title,
        path: route.fullPath,
        name: route.matched[1].components.default.name
      })
    },
    // 当关闭所有页面时隐藏
    handleTags (command) {
      command === 'other' ? this.closeOther() : this.closeAll()
    }
  }
}

</script>
<style lang="less">
.tags-close-box {
  position: absolute;
  right: 45px;
  top: 7px;
  z-index: 10;
  font-weight: 400;
  font-size: 14px;
  padding: 2px 6px 4px 4px;
  border-radius: 3px;
  background-color: #10b9d3;
  color: #fff;
  .el-button--mini,
  .el-button--mini.is-round {
    padding: 0;
  }
  .el-button {
    background-color: #10b9d3;
    border: none;
    color: #fff;
    padding-right: 3px;
  }
  .el-dropdown {
    color: #fff;
  }
}
</style>
<style scoped>
a {
  color: #000;
}
.tags {
  position: relative;
  height: 38px;
  overflow: hidden;
  background: transparent;
  padding-right: 45px;
  padding-left: 34px;
  margin-bottom: 10px;
}

.tags ul {
  box-sizing: border-box;
  width: 100%;
}

.tags-li {
  float: left;
  margin: 7px 5px 2px 3px;
  border-radius: 3px;
  font-size: 12px;
  overflow: hidden;
  cursor: pointer;
  height: 23px;
  line-height: 23px;
  border: 1px solid #e9eaec;
  background: #fff;
  padding: 0 5px 0 12px;
  vertical-align: middle;
  color: #666;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
}

.tags-li:not(.active):hover {
  background: #f8f8f8;
}

.tags-li-title {
  float: left;
  max-width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 5px;
  color: #666;
}

.tags-li.active {
  color: #fff;
  border: 1px solid #10b9d3;
  background-color: #10b9d3;
}

.tags-li.active .tags-li-title {
  color: #fff;
}

/* .tags-close-box {
  position: absolute;
  left: 30px;
  top: 3px;
  box-sizing: border-box;
  padding-top: 1px;
  text-align: center;
  z-index: 10;
} */

</style>

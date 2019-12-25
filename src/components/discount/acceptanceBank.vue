<template>
  <div class="banklist">
    <div class="list_up">
      <span>承兑行名称</span
      ><input placeholder="请输入承兑行名称" class="query" type="text" />
      <span>承兑行类型</span>
      <el-select v-model="selectValue" placeholder="全部">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button class="btn" size="small" type="info" plain>查询</el-button>
    </div>
    <div class="list_down">
      <el-table  stripe :data="tableData" style="width: 100%">
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column prop="name" label="承兑银行名称" width="300">
        </el-table-column>
        <el-table-column prop="type" label="承兑银行类型" width="180">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {
          value: '选项1',
          label: '一类银行'
        },
        {
          value: '选项2',
          label: '二类银行'
        },
        {
          value: '选项3',
          label: '三类银行'
        },
        {
          value: '选项4',
          label: '四类银行'
        }
      ],
      selectValue: '',
      tableData: [{
        name: '上海银行',
        type: '一类银行'
      }, {
        name: '农业银行',
        type: '一类银行'
      }, {
        name: '工商银行',
        type: '一类银行'
      }, {
        name: '建设银行',
        type: '一类银行'
      }]
    }
  },
  methods: {}
}
</script>
<style lang="less">
.list_up {
  .el-input__inner {
    height: 32px;
    line-height: 32px;
  }
  .el-input__icon {
    line-height: 32px;
  }
  .btn {
    margin-left: 10px;
  }
}
</style>
<style lang="less" scoped>
.banklist {
  color: #333;
  padding: 10px;
}
.list_up {
  .query {
    border: 1px solid#DCDFE6;
    height: 30px;
    vertical-align: middle;
    margin: 0 10px;
    padding: 0 10px;
    border-radius: 3px;
  }
  .el-select {
    vertical-align: middle;
    margin-left: 10px;
  }
}
input::-webkit-input-placeholder {
  color: #c0c4cc;
}
input:-moz-placeholder {
  color: #c0c4cc;
}
input::-moz-placeholder {
  color: #c0c4cc;
}
input:-ms-input-placeholder {
  color: #c0c4cc;
}
</style>

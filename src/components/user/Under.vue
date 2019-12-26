<template>
  <div class="under p20">
    <!-- 查询用户 -->
    <div class="list_up">
      <span>账号</span>
      <input
        placeholder="请输入手机号"
        class="query"
        type="text"
      />
      <span>昵称</span>
      <input
        placeholder="请输入昵称"
        class="query"
        type="text"
      />
      <el-button
        class="btn"
        size="small"
        type="info"
        plain
      ><span class="el-icon-search"></span> 查询</el-button>
    </div>
    <!-- 对下级用户的一系列操作 -->
    <div class="operate">
      <el-button
        class="btn"
        size="small"
        type="info"
        plain
      ><span class="el-icon-plus"></span> 添加</el-button>
      <el-button
        class="btn"
        size="small"
        type="info"
        plain
      ><span class="el-icon-edit"></span> 修改备注</el-button>
      <el-button
        class="btn"
        size="small"
        type="info"
        plain
      ><span class="el-icon-edit"></span> 设置分成比例</el-button>
      <el-button
        class="btn"
        size="small"
        type="info"
        plain
      ><span class="el-icon-delete"></span> 删除</el-button>
    </div>
    <!-- 用户列表展示 -->
    <div class="list_down">
      <el-table
        stripe
        ref="topicTable"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        row-key="id"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      >
        <el-table-column
          type="selection"
          width="55"
        >
        </el-table-column>
        <el-table-column
          prop="phone"
          label="用户账户"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="用户昵称"
        >
        </el-table-column>
        <el-table-column
          prop="grade"
          label="用户等级"
        >
        </el-table-column>
        <el-table-column
          prop="profit"
          label="基本分成比例"
        >
        </el-table-column>
        <el-table-column
          prop="extraprofit"
          label="额外分成比例"
        >
        </el-table-column>
        <el-table-column
          prop="undernum"
          label="下级用户"
        >
        <template v-slot="scope">
        <div class="undernum" @click="toggle(scope.row)">查看下级({{scope.row.undernum}})</div>
      </template>
        </el-table-column>
        <el-table-column
          prop="more"
          label="备注"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 用户列表
      tableData: [{
        id: 1,
        phone: '15692138368',
        name: 'dddddsry',
        grade: '2级',
        profit: '50%',
        extraprofit: '2.3%',
        undernum: '2',
        more: '',
        children: [{
          id: 11,
          phone: '14448888577',
          name: 'Adeal',
          grade: '3级',
          profit: '25%',
          extraprofit: '2.3%',
          undernum: '1',
          more: '',
          children: [{
            id: 111,
            phone: '18800245782',
            name: 'XAFei',
            grade: '4级',
            profit: '25%',
            extraprofit: '2.3%',
            undernum: '0',
            more: '' }]
        }, {
          id: 12,
          phone: '17584441257',
          name: 'Hessa',
          grade: '3级',
          profit: '25%',
          extraprofit: '2.3%',
          undernum: '0',
          more: ''
        } ]
      }, {
        id: 2,
        phone: '18800266192',
        name: 'ls123',
        grade: '2级',
        profit: '50%',
        extraprofit: '2.3%',
        undernum: '0',
        more: ''
      }, {
        id: 3,
        phone: '17555555558',
        name: 'Queq',
        grade: '2级',
        profit: '50%',
        extraprofit: '2.3%',
        undernum: '0',
        more: ''
      }, {
        id: 4,
        phone: '17958888436',
        name: 'Gelo',
        grade: '2级',
        profit: '50%',
        extraprofit: '2.3%',
        undernum: '0',
        more: ''
      }, {
        id: 5,
        phone: '13758446875',
        name: 'ww0115',
        grade: '2级',
        profit: '50%',
        extraprofit: '2.3%',
        undernum: '0',
        more: ''
      }]
    }
  },
  methods: {
    // 点击“查看下级”展开当前行的列表
    toggle (row) {
      this.$refs.topicTable.toggleRowExpansion(row, true)
    }
  }
}
</script>
<style lang="less" scoped>
.operate {
  margin: 30px 0;
}
.undernum {
  color: cadetblue;
  cursor: pointer;
}
</style>

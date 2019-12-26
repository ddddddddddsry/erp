<template>
  <div class="member p20">
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
      <span>身份证姓名</span>
      <input
        placeholder="请输入昵称"
        class="query"
        type="text"
      />
      <span>身份证号</span>
      <input
        placeholder="请输入身份证号"
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

    <!-- 用户的一系列操作 -->
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
      ><span class="el-icon-edit"></span> 编辑(单选)</el-button>
      <el-button
        class="btn"
        size="small"
        type="info"
        plain
      ><span class="el-icon-edit"></span> 重置密码(单选)</el-button>
      <el-button
        class="btn"
        size="small"
        type="info"
        plain
      ><span class="el-icon-delete"></span> 删除</el-button>
      <el-button
        class="btn"
        size="small"
        type="info"
        plain
      ><span class="el-icon-top"></span> 升级用户</el-button>
    </div>

    <!-- 用户列表展示 -->
    <div class="list_down">
      <el-table
        ref="topicTable"
        stripe
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        row-key="id"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      >
        <el-table-column
          type="selection"
          width="35"
        >
        </el-table-column>
        <el-table-column
          prop="phone"
          label="用户账户"
        >
        </el-table-column>
        <el-table-column
          prop="grade"
          label="用户等级"
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="用户昵称"
        >
        </el-table-column>
        <el-table-column
          prop="idname"
          label="身份证姓名"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="idnum"
          label="身份证号"
        >
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
        >
        </el-table-column>
        <el-table-column
          prop="bank"
          label="银行账号"
        >
        </el-table-column>
        <el-table-column
          prop="profit"
          label="提成比例"
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="undernum"
          label="下级用户"
          width="100"
        >
        <template v-slot="scope">
        <div class="undernum" @click="toggle(scope.row)">查看下级({{scope.row.undernum}})</div>
      </template>
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
        name: 'ddddddsry',
        idname: '宋茹怡',
        idnum: '310***********0720',
        email: 'songruyi0804@163.com',
        bank: '143565*****887995',
        grade: '1级',
        profit: '25%',
        undernum: 1,
        children: [{
          id: 11,
          phone: '18800245782',
          name: 'XAFei',
          idname: '王莹莹',
          idnum: '450***********0732',
          email: '7514@163.com',
          bank: '578645*****887910',
          grade: '2级',
          profit: '25%',
          undernum: 1,
          children: [{
            id: 111,
            phone: '17584441257',
            name: 'Hessa',
            idname: '张三',
            idnum: '341***********6828',
            email: '172@163.com',
            bank: '244565*****887174',
            grade: '3级',
            profit: '25%',
            undernum: 0 }
          ] }
        ]
      }, {
        id: 2,
        phone: '18800266192',
        name: 'ls123',
        idname: '李四',
        idnum: '322***********6174',
        email: 'heel@163.com',
        bank: '156877*****114577',
        grade: '1级',
        profit: '25%',
        undernum: 1,
        children: [{
          id: 21,
          phone: '17555555558',
          name: 'Queq',
          idname: '王七',
          idnum: '416***********1547',
          email: 'wq@163.com',
          bank: '111561*****141114',
          grade: '1级',
          profit: '25%',
          undernum: 0 }]
      }, {
        id: 3,
        phone: '17958888436',
        name: 'Gelo',
        idname: '高乔',
        idnum: '322***********0590',
        email: 'gq123@163.com',
        bank: '141165*****887191',
        grade: '2级',
        profit: '25%',
        undernum: 0
      }, {
        id: 21,
        phone: '17754444844',
        name: 'ww0115',
        idname: '王五',
        idnum: '226***********1540',
        email: 'ww@163.com',
        bank: '111561*****812445',
        grade: '1级',
        profit: '25%',
        undernum: 0 }, {
        id: 5,
        phone: '15644444288',
        name: 'Fenda',
        idname: '方方',
        idnum: '211***********7584',
        email: 'ffff@163.com',
        bank: '243511*****887111',
        grade: '3级',
        profit: '25%',
        undernum: 0
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

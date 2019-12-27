<template>
  <div class="discountdata p20">
    <!-- 贴现分成列表列出当前登录会员应该分成的贴现金额(含从下级会员得到的分成)，关键信息有：票据编号、贴现日、到期日、票面金额、贴现天数、利息金额、提成类型(直接提成、一级下属提成、二级下属提成、三级下属提成)、操作员、分成比例、分成金额。无论是一级、二级、三级用户，所有用户的分成兑现都直接和0级用户(臻聚公司)完成。 -->
    <!-- 查询 -->
    <div class="list_up">
      <span>贴现票号</span>
      <input
        placeholder="请输入贴现票号"
        class="query"
        type="text"
      />
      <span>操作员</span>
      <el-select
        v-model="selectValue"
        placeholder="全部"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span>金额大小</span>
      <input
        placeholder="1000"
        class="query money"
        type="text"
      /> -
      <input
        placeholder="10000"
        class="query money"
        type="text"
      />
      <div class="date">
        <span>贴现日期</span>
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker> -
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期"
        >
        </el-date-picker>
        <el-button
          class="btn"
          size="small"
          type="info"
          plain
        ><span class="el-icon-search"></span> 查询</el-button>
      </div>
    </div>
    <!-- 列表 -->
    <div class="list_down">
      <el-table
        stripe
        ref="topicTable"
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        >
        <el-table-column
          type="selection"
          width="50"
        >
        </el-table-column>
        <el-table-column
          prop="state"
          label="交易状态"
          width="90"
        >
        </el-table-column>
        <el-table-column
          prop="discountid"
          label="票据编号"
          width="120"
        >
        </el-table-column>
        <el-table-column
          prop="startday"
          label="贴现日"
          width="110"
        >
        </el-table-column>
        <el-table-column
          prop="endday"
          label="到期日"
          width="110"
        >
        </el-table-column>
        <el-table-column
          prop="facemoney"
          label="票面金额"
          width="90"
        >
        </el-table-column>
        <el-table-column
          prop="realmoney"
          label="实付金额"
          width="90"
        >
        </el-table-column>
        <el-table-column
          prop="interestmoney"
          label="利息金额"
          width="90"
        >
        </el-table-column>
        <el-table-column
          prop="rate"
          label="贴现利率"
          width="90"
        >
        </el-table-column>
        <el-table-column
          prop="person"
          label="操作员"
          width="80"
        >
        </el-table-column>
        <el-table-column
          prop="acceptorgrade"
          label="承兑人等级"
          width="100"
        >
        </el-table-column>
        <el-table-column
          prop="accountday"
          label="记账日期"
          width="110"
        >
        </el-table-column>
        <el-table-column
          prop="requesterbanknum"
          label="请求方账号"
          width="190"
        >
        </el-table-column>
        <el-table-column
          prop="requesterbank"
          label="请求方行号"
          width="110"
        >
        </el-table-column>
        <el-table-column
          prop="acceptorbanknum"
          label="接收方名称"
          width="190"
        >
        </el-table-column>
        <el-table-column
          prop="acceptorbank"
          label="接收方行号"
          width="110"
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
      selectValue: '选项1',
      options: [
        {
          value: '选项1',
          label: '宋茹怡'
        },
        {
          value: '选项2',
          label: '张三'
        },
        {
          value: '选项3',
          label: '李四'
        },
        {
          value: '选项4',
          label: '王五'
        }
      ],
      tableData: [
        {
          id: 1,
          state: '已提交',
          discountid: '11425545785',
          startday: '2019-01-11',
          endday: '2019-08-07',
          facemoney: '1000万',
          realmoney: '900万',
          interestmoney: '30万',
          rate: '0.7500%',
          person: '宋茹怡',
          acceptorgrade: '2级',
          accountday: '2019-01-07',
          requesterbanknum: '6222600260001072444',
          requesterbank: '70190000',
          acceptorbanknum: '6222600262451072443',
          acceptorbank: '70190001'
        },
        {
          id: 2,
          state: '已提交',
          realmoney: '900万',
          rate: '0.7500%',
          acceptorgrade: '2级',
          accountday: '2019-01-07',
          requesterbanknum: '6222600260001072444',
          requesterbank: '70190000',
          acceptorbanknum: '6222600262451072443',
          acceptorbank: '70190001',
          discountid: '11425545786',
          startday: '2019-01-11',
          endday: '2019-08-07',
          facemoney: '2000万',
          discountdays: '365天',
          interestmoney: '70万',
          profittype: '直接提成',
          person: '张三',
          profitratio: '75%',
          profitmoney: '40万'
        },
        {
          id: 3,
          state: '已提交',
          realmoney: '900万',
          rate: '0.7500%',
          acceptorgrade: '2级',
          accountday: '2019-01-07',
          requesterbanknum: '6222600260001072444',
          requesterbank: '70190000',
          acceptorbanknum: '6222600262451072443',
          acceptorbank: '70190001',
          discountid: '11425545787',
          startday: '2019-01-11',
          endday: '2019-08-07',
          facemoney: '3000万',
          discountdays: '365天',
          interestmoney: '100万',
          profittype: '三级下属提成',
          person: '王莹莹',
          profitratio: '25%',
          profitmoney: '25万'
        },
        {
          id: 1,
          state: '已提交',
          discountid: '11425545785',
          startday: '2019-01-11',
          endday: '2019-08-07',
          facemoney: '1000万',
          realmoney: '900万',
          interestmoney: '30万',
          rate: '0.7500%',
          person: '宋茹怡',
          acceptorgrade: '2级',
          accountday: '2019-01-07',
          requesterbanknum: '6222600260001072444',
          requesterbank: '70190000',
          acceptorbanknum: '6222600262451072443',
          acceptorbank: '70190001'
        },
        {
          id: 4,
          state: '已提交',
          realmoney: '900万',
          rate: '0.7500%',
          acceptorgrade: '2级',
          accountday: '2019-01-07',
          requesterbanknum: '6222600260001072444',
          requesterbank: '70190000',
          acceptorbanknum: '6222600262451072443',
          acceptorbank: '70190001',
          discountid: '11425545788',
          startday: '2019-01-11',
          endday: '2019-08-07',
          facemoney: '3000万',
          discountdays: '730天',
          interestmoney: '30万',
          profittype: '三级下属提成',
          person: '李四',
          profitratio: '25%',
          profitmoney: '7.33万'
        }
      ]
    }
  }
}

</script>
<style lang="less" scoped>
.money {
  width: 80px;
}
.date {
  margin-top: 15px;
}
.list_up {
  margin-bottom: 25px;
}
</style>

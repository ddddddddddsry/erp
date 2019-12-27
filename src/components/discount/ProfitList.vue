<template>
  <div class="profitlist p20">
    <!-- 查询 -->
    <div class="list_up">
      <span>提成类型</span>
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
          width="55"
        >
        </el-table-column>
        <el-table-column
          prop="discountid"
          label="票据编号"
        >
        </el-table-column>
        <el-table-column
          prop="startday"
          label="贴现日"
        >
        </el-table-column>
        <el-table-column
          prop="endday"
          label="到期日"
        >
        </el-table-column>
        <el-table-column
          prop="facemoney"
          label="票面金额"
        >
        </el-table-column>
        <el-table-column
          prop="discountdays"
          label="贴现天数"
        >
        </el-table-column>
        <el-table-column
          prop="interestmoney"
          label="利息金额"
        >
        </el-table-column>
        <el-table-column
          prop="profittype"
          label="提成类型"
        >
        </el-table-column>
        <el-table-column
          prop="person"
          label="操作员"
        >
        </el-table-column>
        <el-table-column
          prop="profitratio"
          label="分成比例"
        >
        </el-table-column>
        <el-table-column
          prop="profitmoney"
          label="分成金额"
        >
        </el-table-column>
      </el-table>
    </div>
    <!-- 合计结果显示 -->
    <div class="result">
        <h3>合计：</h3>
        <p>贴现票面总金额：0.00</p>
        <p>首次贴现分成合计：0.00</p>
        <p>提成合计数：0.00</p>
        <p>分享合计数：0.00</p>
        <p>额外分成合计数：0.00</p>
        <p>公司分成合计：0.00</p>
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
          label: '直接提成'
        },
        {
          value: '选项2',
          label: '一级下属提成'
        },
        {
          value: '选项3',
          label: '二级下属提成'
        },
        {
          value: '选项4',
          label: '三级下属提成'
        }
      ],
      tableData: [
        {
          id: 1,
          discountid: '11425545785',
          startday: '2019-01-11',
          endday: '2019-08-07',
          facemoney: '1000万',
          discountdays: '365天',
          interestmoney: '30万',
          profittype: '二级下属提成',
          person: '宋茹怡',
          profitratio: '25%',
          profitmoney: '7.33万'
        },
        {
          id: 2,
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
          id: 4,
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
.list_up {
  margin-bottom: 20px;
}
.result {
    margin-top: 30px;
    h3 {
        margin-bottom: 5px;
    }
    p {
        margin-right: 40px;
        height: 24px;
        line-height: 24px;
        float: left;
    }
}
</style>

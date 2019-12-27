<template>
  <div class="ratelist p20">
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="银票"
        name="first"
      >
        <!-- 银票列表展示 -->
        <div class="list_down">
          <el-table
            stripe
            :data="tableData"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column
              prop="bank"
              label="承兑行类型"
            >
              <template slot-scope="scope">
                <button
                  v-if="scope.row.bank == '一类银行'"
                  class="blueBTN"
                >
                  一类银行</button><button
                  v-if="scope.row.bank == '二类银行'"
                  class="greenBTN"
                >
                  二类银行</button><button
                  v-if="scope.row.bank == '三类银行'"
                  class="grayBTN"
                >
                  三类银行
                </button>
              </template>
            </el-table-column>
            <el-table-column
              prop="remainday"
              label="剩余天数"
            >
            </el-table-column>
            <el-table-column
              label="票面金额(万元)"
              align="center"
            >
              <el-table-column
                prop="money1"
                label="0<票面金额<10"
              >
              </el-table-column>
              <el-table-column
                prop="money2"
                label="10≤票面金额<50"
              >
              </el-table-column>
              <el-table-column
                prop="money3"
                label="50≤票面金额<100"
              >
              </el-table-column>
              <el-table-column
                prop="money4"
                label="100≤票面金额≤500"
              >
              </el-table-column>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="财票"
        name="second"
      >
        <!-- 财票列表展示 -->
        <div class="list_down">
          <el-table
            stripe
            :data="tableData1"
            style="width: 100%"
            @selection-change="handleSelectionChange"
          >
            <el-table-column
              prop="bank"
              label="承兑行类型"
            >
              <template slot-scope="scope">
                <button
                  v-if="scope.row.bank == '财票一类'"
                  class="blueBTN"
                >
                  财票一类</button><button
                  v-if="scope.row.bank == '财票二类'"
                  class="greenBTN"
                >
                  财票二类</button><button
                  v-if="scope.row.bank == '财票三类'"
                  class="grayBTN"
                >
                  财票三类
                </button>
              </template>
            </el-table-column>
            <el-table-column
              prop="remainday"
              label="剩余天数"
            >
            </el-table-column>
            <el-table-column
              label="票面金额(万元)"
              align="center"
            >
              <el-table-column
                prop="money1"
                label="0<票面金额<10"
              >
              </el-table-column>
              <el-table-column
                prop="money2"
                label="10≤票面金额<50"
              >
              </el-table-column>
              <el-table-column
                prop="money3"
                label="50≤票面金额<100"
              >
              </el-table-column>
              <el-table-column
                prop="money4"
                label="100≤票面金额≤500"
              >
              </el-table-column>
            </el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      tableData: [{
        bank: '一类银行',
        remainday: '0<剩余期限≤140',
        money1: '4.0000%',
        money2: '2.6500%',
        money3: '2.5500%',
        money4: '2.4500%'
      }, {
        bank: '一类银行',
        remainday: '140<剩余期限≤365',
        money1: '4.0000%',
        money2: '2.8300%',
        money3: '2.6500%',
        money4: '2.5200%'
      }, {
        bank: '二类银行',
        remainday: '0<剩余期限≤140',
        money1: '4.0000%',
        money2: '2.7500%',
        money3: '2.6500%',
        money4: '2.6500%'
      }, {
        bank: '二类银行',
        remainday: '140<剩余期限≤365',
        money1: '4.0000%',
        money2: '3.0500%',
        money3: '2.8500%',
        money4: '2.7000%'
      }, {
        bank: '三类银行',
        remainday: '0<剩余期限≤140',
        money1: '4.0000%',
        money2: '3.5000%',
        money3: '3.3000%',
        money4: '3.1000%'
      }, {
        bank: '三类银行',
        remainday: '140<剩余期限≤365',
        money1: '4.0000%',
        money2: '3.7000%',
        money3: '3.5500%',
        money4: '3.4000%'
      }
      // {
      //   bank: '四类银行',
      //   remainday: '0<剩余期限≤140',
      //   money1: '4.0000%',
      //   money2: '3.6000%',
      //   money3: '3.4500%',
      //   money4: '3.3000%'
      // }, {
      //   bank: '四类银行',
      //   remainday: '140<剩余期限≤365',
      //   money1: '4.0000%',
      //   money2: '3.8500%',
      //   money3: '3.7000%',
      //   money4: '3.5000%'
      // }
      ],
      tableData1: [{
        bank: '财票一类',
        remainday: '0<剩余期限≤140',
        money1: '4.0000%',
        money2: '2.6500%',
        money3: '2.5500%',
        money4: '2.4500%'
      }, {
        bank: '财票一类',
        remainday: '140<剩余期限≤365',
        money1: '4.0000%',
        money2: '2.8300%',
        money3: '2.6500%',
        money4: '2.5200%'
      }, {
        bank: '财票二类',
        remainday: '0<剩余期限≤140',
        money1: '4.0000%',
        money2: '2.7500%',
        money3: '2.6500%',
        money4: '2.6500%'
      }, {
        bank: '财票二类',
        remainday: '140<剩余期限≤365',
        money1: '4.0000%',
        money2: '3.0500%',
        money3: '2.8500%',
        money4: '2.7000%'
      }, {
        bank: '财票三类',
        remainday: '0<剩余期限≤140',
        money1: '4.0000%',
        money2: '3.5000%',
        money3: '3.3000%',
        money4: '3.1000%'
      }, {
        bank: '财票三类',
        remainday: '140<剩余期限≤365',
        money1: '4.0000%',
        money2: '3.7000%',
        money3: '3.5500%',
        money4: '3.4000%'
      }]
    }
  },
  methods: {
    handleClick (tab, event) {
      // console.log(tab, event)
    }
  }
}
</script>
<style>
</style>

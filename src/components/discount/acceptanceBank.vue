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
      <el-button @click="addEvent" class="btn" size="small" type="info" plain>添加</el-button>
    </div>
    <div class="list_down">
      <el-table stripe :data="bankData" style="width: 700px">
        <el-table-column type="index" width="100"> </el-table-column>
        <el-table-column prop="name" label="承兑银行名称" width="300">
        </el-table-column>
        <el-table-column prop="type" label="承兑银行类型">
          <template slot-scope="scope">
            <button v-if="scope.row.type == '一类银行'" class="blueBTN">
              一类银行</button
            ><button v-if="scope.row.type == '二类银行'" class="greenBTN">
              二类银行</button
            ><button v-if="scope.row.type == '三类银行'" class="grayBTN">
              三类银行
            </button>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <!-- 编辑按钮 -->
          <el-button
          @click="editEvent"
            type="primary"
            plain
            size="small"
            icon="el-icon-edit"
            circle
          ></el-button>
          <!-- 删除按钮 -->
          <el-button
            @click="delEvent"
            type="danger"
            plain
            size="small"
            icon="el-icon-delete"
            circle
          ></el-button>
        </el-table-column>
      </el-table>
    </div>
    <!-- 添加和删除复用的对话框 -->
    <el-dialog
      :title="title"
      @close="closeDialog"
      :visible.sync="dialogVisible"
      width="30%"
    >
    <el-form :model="dialogForm" :rules="rules" ref="dialogForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="银行名称" prop="name">
    <el-input placeholder="请输入承兑银行名称"  v-model="dialogForm.name"></el-input>
  </el-form-item>
  <el-form-item label="银行类型" prop="region">
    <el-select v-model="dialogForm.region"  placeholder="请选择银行类型">
      <el-option label="一类银行" value="1"></el-option>
      <el-option label="二类银行" value="2"></el-option>
      <el-option label="三类银行" value="3"></el-option>
    </el-select>
  </el-form-item>
</el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ]

      },
      // 提示文字
      title: '',
      dialogForm: {
        name: '',
        region: ''

      },
      // 编辑和删除的对话框
      dialogVisible: false,
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
        }
      ],
      selectValue: '',
      bankData: [
        {
          name: '上海银行',
          type: '一类银行'
        },
        {
          name: '农业银行',
          type: '二类银行'
        },
        {
          name: '工商银行',
          type: '三类银行'
        },
        {
          name: '建设银行',
          type: '一类银行'
        },
        {
          name: '中国银行',
          type: '二类银行'
        },
        {
          name: '建设银行',
          type: '一类银行'
        },
        {
          name: '建设银行',
          type: '一类银行'
        },
        {
          name: '建设银行',
          type: '一类银行'
        },
        {
          name: '建设银行',
          type: '一类银行'
        },
        {
          name: '建设银行',
          type: '一类银行'
        },
        {
          name: '建设银行',
          type: '一类银行'
        }
      ]
    }
  },
  methods: {
    // 关闭对话框
    closeDialog () {
      console.log('111')
      this.$refs.dialogForm.resetFields()
      this.$set(this.dialogForm)
    },
    // 点击编辑
    editEvent () {
      this.dialogVisible = true
      this.title = '编辑'
    },
    // 点击添加
    addEvent () {
      this.dialogVisible = true
      this.title = '添加'
    },
    // 点击删除
    delEvent () {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  }
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
  color: #666;
  font-size: 14px;
  padding: 20px;
}
.blueBTN {
  background-color: #10b9d3;
  color: #fff;
  border: none;
  border-radius: 3px;
  height: 25px;
  margin-right: 10px;
}
.greenBTN {
  background-color: #39886e;
  color: #fff;
  border: none;
  border-radius: 3px;
  height: 25px;
  margin-right: 10px;
}
.grayBTN {
  background-color: #909399;
  color: #fff;
  border: none;
  border-radius: 3px;
  height: 25px;
  margin-right: 10px;
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

<template>
  <div class="p20">
    <!-- <button class="btn"><i class="el-icon-plus weight"></i> 添加企业贴现申请</button> -->
    <el-button @click="toApply" type="info" class="el-icon-plus weight" plain>
      添加企业贴现申请</el-button
    >
    <!-- 表单区域 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column prop="date" label="申请时间" width="180">
      </el-table-column>
      <el-table-column prop="code" label="社会统一代码" width="300">
      </el-table-column>
      <el-table-column prop="status" label="贴现开通状态" width="180">
      </el-table-column>
      <el-table-column label="操作">
        <!-- 编辑按钮 -->
        <el-button
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
    <!-- 分页区域 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </el-pagination>
    <!-- 开通贴现提示 -->
    <div class="content">
      <div>
        <h2 class="content_title">开通贴现功能所需材料</h2>
        <ul>
          <li>
            <img src="../../assets/imgs/business1.png" alt="" />
            <div class="text">
              <p class="weight">公司营业执照复印件</p>
              <p>盖公章（扫描件或照片）</p>
            </div>
          </li>
          <li>
            <img src="../../assets/imgs/business2.png" alt="" />
            <div class="text">
              <p class="weight">法定代表人身份证正反面复印件</p>
              <p>盖公章（扫描件或照片）</p>
            </div>
          </li>
          <li>
            <img src="../../assets/imgs/business3.png" alt="" />
            <div class="text">
              <p class="weight">贴现协议最后一页签署页</p>
              <p>盖公章（扫描件或照片）</p>
            </div>
          </li>
          <li>
            <div class="text_pic">pdf</div>
            <div class="text">
              <p class="weight">公司上一年度财务报表</p>
              <p>公司上一年度财务报表</p>
            </div>
          </li>
          <li>
            <div class="text_pic el-icon-more"></div>
            <div class="text">
              <p class="weight">其它准备信息</p>
              <p>公司股权结构等基本信息</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 温馨提示 -->
      <!-- <div>
        <div class="content_title weight">温馨提示</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage4: 4,
      tableData: [
        {
          date: '2016-05-04',
          code: 'ZXCA2115456461231545351',
          status: '待审核'
        },
        {
          date: '2016-05-04',
          code: 'ZXCA2115456461231545351',
          status: '待审核'
        },
        {
          date: '2016-05-01',
          code: 'ZXCA2115456461231545351',
          status: '审核通过',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          code: 'ZXCA2115456461231545351',
          status: '待审核'
        },
        {
          date: '2016-05-03',
          code: 'ZXCA2115456461231545351',
          status: '待审核'
        }
      ]
    }
  },
  methods: {
    // 跳转到申请页面
    toApply () {
      this.$router.push('/Apply')
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
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
<style lang="less" scoped>
.weight {
  font-weight: 700;
}
.el-pagination {
  text-align: right;
  margin-top: 15px;
  padding-right: 20px;
}
.content {
  .content_title{
    font-size: 18px;
    margin-bottom: 5px;
  }
  margin-top: 20px;
  ul {
    text-align: center;
    margin-top: 10px;
    display: flex;
    li {
      padding: 10px;
      width: 20%;

      // background-color: pink;
      .text_pic {
        width: 100px;
        height: 150px;
        // background-color: pink;
        margin: 0 auto;
        line-height: 150px;
        font-size: 35px;
        color: #47678e;
        background-color: #C5C4C0;
      }
      img {
        width: 100px;
        height: 150px;
      }
      .text {
        text-align: center;
        padding: 10px;
        p{
          font-size: 18px;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>

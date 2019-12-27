<template>
  <div class="p20 apply">
    <h2>录入信息</h2>
    <el-steps :active="active" finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="文件上传"></el-step>
    </el-steps>
    <el-form
      :model="ruleForm"
      :rules="rules"
      label-position="top"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <!-- tab栏切换 -->
      <div class="tabBox content">
        <div v-show="active == 0">
          <h3 class="title">校验信息</h3>
          <div>
            <el-row>
              <el-col class="display" :span="24">
                <el-form-item  label="统一社会代码" prop="name">
                  <el-input
                    placeholder="请输入统一社会代码"
                    v-model="ruleForm.name"
                  ></el-input>
                </el-form-item>
                <el-button class="btnFirst" type="primary"
                  >校验统一社会代码获取相关信息</el-button
                >
              </el-col>
            </el-row>
          </div>
          <h3 class="title">工商信息</h3>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="公司名称" prop="name">
                <el-input
                  placeholder="请输入公司名称"
                  v-model="ruleForm.name"
                ></el-input> </el-form-item
            ></el-col>
            <el-col :span="8">
              <el-form-item label="机构类型" prop="region">
                <el-select
                  v-model="ruleForm.region"
                  placeholder="请选择活动区域"
                >
                  <el-option label="法人企业" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select> </el-form-item
            ></el-col>
            <el-col :span="8">
              <el-form-item label="客户细类" prop="region">
                <el-select
                  v-model="ruleForm.region"
                  placeholder="请选择活动区域"
                >
                  <el-option label="有限责任公司" value="shanghai"></el-option>
                  <el-option label="股份有限公司" value="beijing"></el-option>
                </el-select> </el-form-item
            ></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8"
              ><el-form-item label="国际商业分类" prop="name">
                <el-input v-model="ruleForm.name"></el-input> </el-form-item
            ></el-col>
            <el-col :span="8">
              <el-form-item label="企业类型" prop="name">
                <el-input
                  placeholder="请输入企业类型"
                  v-model="ruleForm.name"
                ></el-input> </el-form-item
            ></el-col>
            <el-col :span="8">
              <el-form-item label="企业所有制类型" prop="region">
                <el-select
                  v-model="ruleForm.region"
                  placeholder="请选择活动区域"
                >
                  <el-option label="私人控股企业" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select> </el-form-item
            ></el-col>
          </el-row>
          <h3 class="title">证件信息</h3>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="证件类型" prop="region">
                <el-select
                  v-model="ruleForm.region"
                  placeholder="请选择活动区域"
                >
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="证件编码" prop="name">
                <el-input
                  placeholder="请输入证件编码"
                  v-model="ruleForm.name"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="证件签发地区" prop="region">
                <el-select
                  v-model="ruleForm.region"
                  placeholder="请选择活动区域"
                >
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="证件登记日期" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="证件到期日期" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="地区所属省市" prop="region">
                <el-select
                  v-model="ruleForm.region"
                  placeholder="请选择活动区域"
                >
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <h3 class="title">公司信息</h3>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="实收资本" prop="name">
                <el-input
                  placeholder="请输入实收资本（元）"
                  v-model="ruleForm.name"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="年销售额" prop="name">
                <el-input
                  placeholder="请输入年销售额（元）"
                  v-model="ruleForm.name"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="注册资本" prop="name">
                <el-input
                  placeholder="请输入注册资本（元）"
                  v-model="ruleForm.name"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="职工人数" prop="name">
                <el-input
                  placeholder="请输入职工人数（人）"
                  v-model="ruleForm.name"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="资产总额" prop="name">
                <el-input
                  placeholder="请输入资产总额（元）"
                  v-model="ruleForm.name"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <div v-show="active == 1">
          <div>
            <div class="memberText">
              <el-button type="info" size="small" plain>新增高管</el-button>
              <span>高管信息</span>
              <span>高管信息中必须包括法定代表人</span>
              <span>新增填写数据后注意保存，否则提交无效</span>
            </div>
            <div class="memberText">
              <el-button type="info" size="small" plain>新增股东</el-button>
              <span>股东信息</span>
              <span>填写的单个或多个股东持股比例之和，必须大于25%</span>
              <span>新增填写数据后注意保存，否则提交无效</span>
            </div>
            <div class="memberText">
              <el-button type="info" size="small" plain>新增最终受益人</el-button>
              <span>最终受益人信息</span>
              <span>填写持股最大的股东信息如持股比例一致则填写两名，最多三名</span>
              <span>新增填写数据后注意保存，否则提交无效</span>
            </div>
          </div>
        </div>
        <div v-show="active == 2">
          <div class="uploadBox">
            <h3 class="title  weight">证件上传</h3>

            <div class="upLoad">
              <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或<em>点击上传</em>
                </div>
                <div class="el-upload__tip" slot="tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </div>
              <div>
              <p>上传说明</p>
              <ul>
                <li>1.上传营业执照（需盖公章）</li>
                <li>2.上传法人身份证正反面（需盖公章）</li>
                <li>3.上传上一年度财报（可选）</li>
                <li>
                  4.上传《电子银行承兑汇票急速贴现协议》签署页（需盖公章与法人盖章，内容手写并填写完整）
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div v-show="active == 3">
          <div class="finish">
            <el-progress
              type="circle"
              :percentage="num"
              status="success"
            ></el-progress>
            <p>提交完成，3秒钟后跳转申请页面</p>
          </div>
        </div>
      </div>
    </el-form>
    <div class="btnBox">
      <el-button
        v-show="active !== 3 && active !== 0"
        style="margin-top: 12px;"
        @click="pre"
        >上一步</el-button
      >
      <el-button
        v-show="active !== 3"
        style="margin-top: 12px;"
        @click="next"
        >{{ nextText }}</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nextText: '下一步',
      num: 1,
      active: 0,
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      }
    }
  },
  methods: {
    //   下一步
    next () {
      if (this.active++ > 2) this.active = 3
      // console.log(this.active)
      if (this.active === 3) {
        var timer = setInterval(() => {
          this.num += 3.3
          if (this.num >= 100) {
            clearInterval(timer)
            this.$router.push('/discount')
          }
        }, 100)
      } else if (this.active === 2) {
        this.nextText = '提交'
      }
    },
    pre () {
      this.nextText = '下一步'
      if (--this.active < 1) {
        this.active = 0
      }
    }
  }
}
</script>
<style lang="less">
.apply {
  //   .el-form-item__label {
  //     width: 150px !important;
  //   }
  //   .el-form-item__content {
  //     margin-left: 150px !important;
  //   }
}
</style>

<style lang="less" scoped>
.upLoad {
  text-align: center;
  margin-bottom: 20px;
}
.el-steps {
  width: 80%;
  margin: 0 auto;
}
.apply {
  h2 {
    text-align: center;
    font-size: 20px;
    padding: 10px;
  }
}
.btnBox {
  margin: 0 auto;
  width: 80%;
  text-align: right;
}
.tabBox {
  margin: 0 auto;
  width: 80%;
}
.content {
  .finish {
    margin-top: 10px;
    text-align: center;
    p {
      margin-top: 10px;
      font-weight: 700;
    }
  }
  .display {
    display: flex;
    justify-content: flex-start;
    align-items:center;
  }
  .title {
    font-size: 16px;
    margin: 10px auto;
  }
  .uploadBox {
    ul {
      margin: 20px auto;
    }
  }
}
.memberText {
  margin-top: 20px;
  span:nth-child(2) {
    padding: 0 10px;
    font-size: 16px;
    font-weight: 700;
  }
  span:nth-child(4) {
    color: red;
  }
}
.el-form-item {
  width: 220px;
}
.btnFirst{
  margin-top: 25px;
margin-left: 10px;
}
</style>

<template>
  <div class="calculator">
    <!-- 头部的图片栏 -->
    <div class="header"></div>
    <!-- 主盒子，用el-row分为左右两部分 -->
    <div class="main">
      <el-row
        type="flex"
        justify="space-around"
      >
        <!-- 左侧报价器部分 -->
        <el-col :span="9">
          <div class="calBox">
            <div class="title">
              <h3>电子银承贴现报价器</h3>
            </div>
            <div class="box">
              <p>测一测，手上银承今天值多少钱？</p>
              <!-- 报价器表单输入部分 -->
              <el-form
                ref="form"
                :model="form"
              >
                <el-form-item>
                  <el-select
                    v-model="form.bank"
                    placeholder="中国农业发展银行"
                  >
                    <el-option
                      label="中国工商银行"
                      value="中国工商银行"
                    ></el-option>
                    <el-option
                      label="中国建设银行"
                      value="中国建设银行"
                    ></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-input
                    class="money"
                    placeholder="10000"
                    v-model="form.money"
                  ></el-input>
                </el-form-item>
                <el-row :gutter="20">
                  <el-col :span="16">
                    <el-form-item>
                      <el-date-picker
                        type="date"
                        placeholder="选择日期"
                        v-model="form.date1"
                        style="width: 100%;"
                      ></el-date-picker>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item>
                      <el-button
                        type="primary"
                        @click="onSubmit"
                      >计算</el-button>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
              <!-- 报价器计算结果部分 -->
              <el-row class="result clearfix">
                <el-col :span="6">
                  <div>
                    <p>年利率</p>
                    <p>2.8300%</p>
                  </div>
                </el-col>
                <el-col :span="6"><span></span>
                  <div>
                    <p>利息(元)</p>
                    <p>1234.19</p>
                  </div>
                </el-col>
                <el-col :span="6"><span></span>
                  <div>
                    <p>每十万扣息</p>
                    <p>2.8300%</p>
                  </div>
                </el-col>
                <el-col :span="6"><span></span>
                  <div>
                    <p>到收金额(元)</p>
                    <p>98765.81</p>
                  </div>
                </el-col>
              </el-row>
              <p class="note">* 结果仅供参考 实际利息注册申请贴现功能之后查询</p>
            </div>
          </div>
        </el-col>
        <!-- 右侧宣传信息部分 -->
        <el-col :span="9">
          <div class="news">
            <h3>让中小企业票据贴现又快又省</h3>
            <h4>快速贴票低至2.45%</h4>
            <p>快贴工作时间：银行工作日早上8:30至下午17:10</p>
            <ul>
              <li><span class="el-icon-s-opportunity"></span>直贴银行安全可靠</li>
              <li><span class="el-icon-s-opportunity"></span>即时提交即时入账</li>
              <li><span class="el-icon-s-opportunity"></span>即时提供贴现凭证</li>
              <li><span class="el-icon-s-opportunity"></span>无需新开对公账户</li>
              <li><span class="el-icon-s-opportunity"></span>无需提供合同发票</li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 页脚的信息展示部分 -->
    <div class="footernews">
      <el-row
        type="flex"
        justify="space-around"
      >
        <el-col :span="6">
          <div class="left">
            <p>本季度成交343笔 共计96,315,154.25元</p>
            <p>今日成交5笔 共计4,704,675.55元</p>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="right">
            <ul>
              <li>***银贸易有限公司 958764.75元</li>
              <li>***银贸易有限公司 958764.75元</li>
              <li>***银贸易有限公司 958764.75元</li>
              <li>***银贸易有限公司 958764.75元</li>
              <li>***银贸易有限公司 958764.75元</li>
              <li>***银贸易有限公司 958764.75元</li>
              <li>***银贸易有限公司 958764.75元</li>
              <li>***银贸易有限公司 958764.75元</li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        bank: '', // 计价器选择的银行
        money: '' // 计价器录入的金额
      }
    }
  },
  methods: {
    // 提交表单进行报价计算
    onSubmit () {

    }
  }
}

</script>
<style lang="less">
.calculator {
  .el-select {
    width: 100%;
  }
}
</style>
<style lang="less" scoped>
.calculator {
  color: #fff;
  min-width: 1180px;
}
// 头部图片栏
.header {
  background: url('../assets/imgs/bg_header.jpg');
  background-position: center 200px;
  background-size: cover;
  height: 110px;
}
// 主盒子左右padding
.main {
  padding: 50px 0px;
}
// 页脚信息栏
.footernews {
  background-color: rgb(240, 240, 240);
  height: 70px;
  margin-left: 6px;
}
// 报价器部分的title
.calBox .title {
  background-color: rgb(20, 37, 55);
  width: 200px;
  height: 50px;
  position: relative;
  text-align: center;
  line-height: 50px;

  h3 {
    position: absolute;
    font-size: 18px;
    width: 100%;
    height: 100%;
    color: #fff;
    z-index: 1;
  }
  // 直角梯形的实现
  &::after {
    display: inline-block;
    content: '';
    position: absolute;
    z-index: 0;
    right: -50px;
    top: -50px;
    width: 0px;
    height: 0px;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 50px solid rgb(20, 37, 55);
    border-top: 50px solid transparent;
  }
}
// 报价器主体部分
.calBox .box {
  background-color: rgb(20, 37, 55);
  width: 500px;
  padding: 20px;
  box-sizing: border-box;
  p {
    font-size: 14px;
    color: #fff;
    margin-bottom: 20px;
    &.note {
      font-size: 12px;
    }
  }
  .el-form {
    .money {
      position: relative;
      &::after {
        content: '元';
        color: #000;
        position: absolute;
        right: 15px;
      }
    }
    .el-button {
      width: 100%;
    }
  }
  .result {
    .el-col {
      position: relative;
      span {
        position: absolute;
        top: 4px;
        height: 50px;
        width: 2px;
        background-color: #fff;
      }
      div {
        padding-left: 20px;
        box-sizing: border-box;
        p:last-child {
          font-size: 16px;
          font-weight: 700;
        }
      }
    }
  }
}
// 右侧信息展示部分
.news {
  h3 {
    font-size: 20px;
    margin-top: 50px;
    margin-bottom: 20px;
  }
  h4 {
    letter-spacing: 5px;
    margin-bottom: 20px;
  }
  p {
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 80px;
  }
  ul {
    li {
      height: 40px;
      font-size: 16px;
      span {
        margin-right: 25px;
      }
    }
  }
}
// 页脚信息栏的左右两部分
// 左
.left {
  p {
    height: 35px;
    line-height: 35px;
    font-weight: 700;
    color: #10569b;
    font-size: 16px;
  }
}
// 右
.right {
  overflow: hidden;
  ul {
    width: 5000px;
    li {
      float: left;
      height: 70px;
      line-height: 70px;
      padding-right: 40px;
      font-size: 14px;
    }
  }
}
</style>

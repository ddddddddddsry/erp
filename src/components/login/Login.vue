<template>
  <div class="loginBox">
    <div class="login">
      <div class="leftpart">
        <h3>和同金融服务系统</h3>
        <p>欢迎使用 和同金融服务系统 选择项目后直接登录</p>
        <ul class="nav">
          <li><a
              @click="changeCurrent('贴现管理系统')"
              :class="{current: current === '贴现管理系统'}"
            >贴现管理系统</a></li>
          <li><a
              @click="changeCurrent('信用卡管理系统')"
              :class="{current: current === '信用卡管理系统'}"
            >信用卡管理系统</a></li>
          <li><a
              @click="changeCurrent('消费信贷系统')"
              :class="{current: current === '消费信贷系统'}"
            >消费信贷系统</a></li>
          <li><a
              @click="changeCurrent('抵押信贷系统')"
              :class="{current: current === '抵押信贷系统'}"
            >抵押信贷系统</a></li>
          <li><a
              @click="changeCurrent('商业融资系统')"
              :class="{current: current === '商业融资系统'}"
            >商业融资系统</a></li>
        </ul>
      </div>
      <el-tabs
        v-model="activeName"
        :stretch="stretch"
      >
        <el-tab-pane
          label="密码登录"
          name="first"
        >
          <el-form
            ref="passwdLoginForm"
            status-icon
            :model="passwdLoginForm"
            :rules="rules"
            label-width="80px"
          >
            <el-form-item prop="phone">
              <el-input
                @keyup.enter.native="login"
                v-model="passwdLoginForm.phone"
                placeholder="请输入手机号码"
              ></el-input>
            </el-form-item>
            <el-form-item prop="passwd">
              <el-input
                id="pwd"
                @keyup.enter.native="login"
                v-model="passwdLoginForm.passwd"
                type="password"
                placeholder="请输入密码"
                class="password"
              >
                <i
                  slot="suffix"
                  class="el-input__icon el-icon-view el-show"
                  @click="showPwd"
                ></i>
              </el-input>
              <!-- <i class="lockBtn el-icon-lock"></i> -->
            </el-form-item>
            <el-form-item prop="picCode">
              <el-row>
                <el-col :span="15">
                  <el-input
                    v-model="passwdLoginForm.picCode"
                    placeholder="请输入验证码"
                  >
                  </el-input>
                </el-col>
                <el-col :span="9">
                  <img
                    @click="getPicCode"
                    class="vCodeImg"
                    alt="稍后重试"
                    title="点击切换验证码"
                    :src="picCodeSrc"
                  />
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="login('passwdLoginForm')"
              >登录</el-button>
              <el-button @click="resetForm('passwdLoginForm')">重置</el-button>
            </el-form-item>
            <p class="message">
              <router-link to="/resetpasswd">忘记密码？</router-link>
              <router-link to="/register">立即注册</router-link>
            </p>
          </el-form>
        </el-tab-pane>
        <el-tab-pane
          label="短信登录"
          name="second"
        >
          <el-form
            ref="msgLoginForm"
            status-icon
            :model="msgLoginForm"
            :rules="rules"
            label-width="80px"
          >
            <el-form-item prop="phone2">
              <el-input
                v-model="msgLoginForm.phone2"
                placeholder="请输入手机号码"
              ></el-input>
            </el-form-item>
            <el-form-item prop="validateNo">
              <el-row>
                <el-col :span="15">
                  <el-input
                    @keyup.enter.native="login"
                    v-model="msgLoginForm.validateNo"
                    placeholder="请输入短信验证码"
                  >
                  </el-input>
                </el-col>
                <el-col :span="9">
                  <el-button
                    @click="getMsgCode"
                    :disabled="disabled"
                    type="primary"
                    plain
                    class="getcodebtn"
                  >
                    {{ codeValue }}</el-button>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="login('msgLoginForm')"
              >登录</el-button>
              <el-button @click="resetForm('msgLoginForm')">重置</el-button>
            </el-form-item>
            <p class="message">
              <router-link to="/resetpasswd">忘记密码？</router-link>
              <router-link to="/register">用户注册</router-link>
            </p>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import qs from 'qs'
export default {
  data () {
    // 发送验证码前校验用户是否存在，存在才允许发送验证码
    var checkPhone = (rule, value, callback) => {
      this.$http
        .post(
          'member/validatePhone',
          qs.stringify({
            phone: this.msgLoginForm.phone2
          })
        )
        .then(res => {
          // console.log(res)
          if (res.data.respBody.isSuccess === 'true') {
            callback()
          } else {
            callback(new Error('用户名不存在请重新输入'))
          }
        })
        .catch(e => {
          // console.log(e)
        })
    }
    return {
      current: '',
      passwdLoginForm: {
        phone: '',
        passwd: ''
      },
      msgLoginForm: {
        phone2: '',
        validateNo: ''
      },
      rules: {
        phone: [
          {
            required: true,
            message: '请输入手机号',
            trigger: ['blur', 'change']
          },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '请输入正确的手机号',
            trigger: ['blur', 'change']
          }
        ],
        phone2: [
          {
            required: true,
            message: '请输入手机号',
            trigger: ['blur', 'change']
          },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '请输入正确的手机号',
            trigger: ['blur', 'change']
          },
          {
            validator: checkPhone,
            trigger: ['blur']
          }
        ],
        passwd: [
          {
            required: true,
            message: '请输入密码',
            trigger: ['blur', 'change']
          },
          {
            min: 6,
            max: 14,
            message: '密码长度在 6 到 14 个字符',
            trigger: ['blur', 'change']
          }
        ],
        picCode: [
          {
            required: true,
            len: 4,
            message: '请输入4位验证码',
            trigger: ['blur', 'change']
          }
        ],
        validateNo: [
          {
            required: true,
            len: 4,
            message: '请输入4位验证码',
            trigger: ['blur', 'change']
          }
        ]
      },
      picCodeSrc: '',
      activeName: 'first',
      stretch: true,
      codeValue: '获取验证码', // 获取验证码按钮的显示值
      disabled: false, // 是否禁用获取验证码按钮
      totalCount: 10,
      interval: undefined
    }
  },
  created () {
    this.getPicCode()
  },
  methods: {
    changeCurrent (name) {
      this.current = name
    },
    // 是否明文显示密码
    showPwd () {
      const input = document.getElementById('pwd')
      if (input.type === 'password') {
        input.type = 'text'
      } else if (input.type === 'text') {
        input.type = 'password'
      }
    },
    login (form) {
      if (this.passwdLoginForm.phone === '13333333333' && this.passwdLoginForm.passwd === '123456') {
        this.$message({
          type: 'success',
          message: '登陆成功',
          duration: 3000
        })
        localStorage.setItem('token', 'dengluchenggong')
        this.$router.push('/Home')
      } else {
        this.$message({
          type: 'error',
          message: '用户名或密码错误',
          duration: 3000
        })
      }

      // try {
      //   await this.$refs[form].validate()
      //   // 校验成功, 发送ajax
      //   // 18800266192
      //   const url =
      //     form === 'passwdLoginForm'
      //       ? 'member/passwdLogin'
      //       : 'member/validateLogin'
      //   const para =
      //     form === 'passwdLoginForm'
      //       ? qs.stringify(this.passwdLoginForm)
      //       : qs.stringify({
      //         ...this.msgLoginForm,
      //         phone: this.msgLoginForm.phone2
      //       })
      //   const res = await this.$http.post(url, para)
      //   const { data } = res
      //   // console.log(data)
      //   // const { meta: { status, msg }, data } = res
      //   if (data.respBody.isSuccess === 'true') {
      //     this.$message({
      //       type: 'success',
      //       message: '登录成功',
      //       duration: 3000
      //     })
      //     // 把token和登录的用户名存储起来
      //     let token = data.respHeader.token
      //     localStorage.setItem('token', token)
      //     let user = atob(token.split('.')[1])
      //     let userId = JSON.parse(user).id // atob得到的对象要json.parse转换一下
      //     const userData = await this.$http.post(
      //       'memberRole/queryMemberRole',
      //       qs.stringify({
      //         mr_member_id: userId,
      //         pagenum: 1,
      //         pagesize: 1
      //       })
      //     )
      //     // console.log(userData)
      //     if (userData.data.respBody.isSuccess === 'OK') {
      //       let roleType = userData.data.respBody.queries[0].roleType
      //       // 编程式导航
      //       if (roleType === 1 || roleType === 2) {
      //         this.$router.push('/management/datadisplay')
      //       } else {
      //         this.$router.push('/zone')
      //       }
      //       this.$emit('login')
      //       // location.reload()
      //     }
      //   } else {
      //     this.$message({
      //       type: 'error',
      //       message: data.respHeader.respMessage,
      //       duration: 3000
      //     })
      //   }
      // } catch (e) {
      //   // console.log(e)
      // }
    },
    // 重置按钮重置表单
    resetForm (form) {
      this.$refs[form].resetFields()
    },
    // 获得验证码图片
    async getPicCode () {
      const res = await axios.post(
        'http://122.112.247.149:8001/api/v1/getVerifyCode'
      )
      // const res = await this.$http.post('getVerifyCode')
      // console.log(res)
      if (res.status === 200) {
        this.picCodeSrc = `data:image/png;base64,${res.data.image}`
        // console.log(this.picCodeSrc)
      }
    },
    // 点击发送短信验证码，开启倒计时，60秒后重新发送
    getMsgCode () {
      this.$refs.msgLoginForm.validateField('phone', phoneError => {
        // console.log(`${phoneError}***************************`)
        if (!phoneError) {
          // 按钮60秒倒计时
          this.disabled = true
          this.totalCount = 5
          this.codeValue = `重新发送(${this.totalCount})`
          // 补：60秒过倒计时过后才能调用的事件
          // .then(() => {
          //   this.$message('验证码已发送至登记手机号上，请查收。')
          // }).catch((err) => {
          //   this.$message(err);
          // });
          this.interval = setInterval(() => {
            this.totalCount--
            this.codeValue = `重新发送(${this.totalCount})`
            if (this.totalCount === 0) {
              clearInterval(this.interval)
              this.disabled = false
              this.codeValue = `重新发送`
            }
          }, 1000)
        }
      })
    }
  }
}
</script>
<style lang="less">
.login {
  .el-tabs__nav-wrap::after {
    background-color: transparent;
  }

  .el-tabs__item {
    color: #fff;
  }
  .el-form-item__content {
    margin-left: 0px !important;
  }
}
</style>
<style lang="less" scoped>
.loginBox {
  width: 100%;
  height: 100%;
  background: url(../../assets/imgs/bg5_login.jpg);
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login {
  // background: linear-gradient(
  //   60deg,
  //   rgba(167, 174, 191, 0.9),
  //   rgba(126, 139, 162, 0.9)
  // );
  background: linear-gradient(
    60deg,
    rgba(20, 37, 55, 0.8),
    rgba(12, 32, 54, 0.8)
  );
  box-shadow: 0px 0px 20px rgb(107, 120, 143);
  border-radius: 5px;
  list-style: none;
  position: relative;
  padding: 30px;
  width: 50vw;
  min-width: 800px;
  height: 380px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .leftpart {
    h3 {
      color: #fff;
      padding: 0;
      font-size: 26px;
      // border: 2px solid #409eff;
      // border-radius: 10px;
      margin-bottom: 10px;
    }
    p {
      color: #fff;
      font-weight: 700;
      margin-bottom: 20px;
    }
    li {
      margin-bottom: 20px;
      text-align: center;
      a {
        width: 100%;
        border-radius: 5px;
        background-color: #409eff;
        display: inline-block;
        color: #fff;
        padding: 10px 0;
        transition: all 0.5s;
        &:hover {
          background-color: #115ca7;
        }
        &.current {
          background-color: #115ca7;
        }
      }
    }
  }

  .el-tabs {
    align-self: flex-end;
    border-radius: 5px;
    background: rgb(71, 103, 142, 0.5);
    margin-bottom: 10px;
  }

  .el-form {
    width: 350px;
    padding: 10px 20px 15px 20px;
    position: relative;

    .el-button {
      width: 40%;
    }

    .el-button:last-child {
      float: right;
    }

    .el-button.getcodebtn {
      float: right;
      width: 105px;
    }

    .el-icon-view {
      &:hover {
        cursor: pointer;
      }
    }
  }

  .message {
    border-top: 2px solid #409eff;
    font-size: 14px;
    display: flex;
    justify-content: space-around;
    padding-top: 15px;

    a {
      color: #ccc;
      cursor: pointer;

      &:hover {
        color: #fff;
      }
    }
  }

  .vCodeImg {
    height: 40px;
    float: right;
    cursor: pointer;
  }
}
</style>

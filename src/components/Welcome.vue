<template>
  <div class="welcome">
    <div class="bank_up">
      <h2>支持60家主流银行贴现业务</h2>
      <table class="table_up">
        <tbody>
          <tr>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
          </tr>
          <tr>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
          </tr>
          <tr>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
          </tr>
          <tr>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
          </tr>
          <tr>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
          </tr>
          <tr>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
          </tr>
          <tr>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
          </tr>
        </tbody>
      </table>
    </div>
        <div class="bank_up">
      <h2 class="down">支持60家财务公司贴现业务</h2>
      <table class="table_up">
        <tbody>
          <tr>
            <td>中国财务有限公司</td>
            <td>中国财务有限公司</td>
            <td>中国财务有限公司</td>
            <td>中国财务有限公司</td>
            <td>中国财务有限公司</td>
          </tr>
          <tr>
            <td>天津财务有限公司</td>
            <td>天津财务有限公司</td>
            <td>天津财务有限公司</td>
            <td>天津财务有限公司</td>
            <td>天津财务有限公司</td>
          </tr>
          <tr>
            <td>天津农村财务有限公司</td>
            <td>天津农村财务有限公司</td>
            <td>天津农村财务有限公司</td>
            <td>天津农村财务有限公司</td>
            <td>天津农村财务有限公司</td>
          </tr>
          <tr>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
          </tr>
          <tr>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
          </tr>
          <tr>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
          </tr>
          <tr>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
            <td>天津农村商业银行</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="less" scoped>
@keyframes move {
  0% {
    transform: translateY(250px);
  }
  20% {
    transform: translateY(130px);
  }
  40% {
    transform: translateY(10px);
  }
  60% {
    transform: translateY(-110px);
  }
  80% {
    transform: translateY(-230x);
  }
  100% {
    transform: translateY(-350px);
  }
}
.bank_up {
  height: 350px;
  overflow: hidden;
  color: #333;
  text-align: center;
  h2 {
    margin: 20px auto;
    font-size: 25px;
  }
  .table_up::before{
    content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 80%;
        background: linear-gradient(to bottom, #fff, transparent);
        opacity: 0.6;
        z-index: 10;
        box-shadow: 0 15px 30px 30px 100px rgba(255, 255, 255, 0.5)
  }
    .table_up::after{
    content: '';
        position: absolute;
        left: 0;
        top: 60%;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom,  transparent,#fff);
        opacity: 0.6;
        z-index: 10;
        box-shadow: 0 15px 30px 30px 100px rgba(255, 255, 255, 0.5)
  }
    .down{
      margin: 40px auto 20px;
    }
  .table_up {
    position: relative;
    height: 300px;
    width: 80%;
    margin: 30px auto;
    overflow: hidden;

    tbody {
      animation: move 30s linear infinite normal backwards;

      tr {
        height: 50px;
        td {
          font-size: 20px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>

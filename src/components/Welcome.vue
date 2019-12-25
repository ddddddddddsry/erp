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
    transform: translateY(300px);
  }
  20% {
    transform: translateY(210px);
  }
  40% {
    transform: translateY(70px);
  }
  60% {
    transform: translateY(-70px);
  }
  80% {
    transform: translateY(-210x);
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
  .table_up {
    height: 300px;
    width: 80%;
    margin: 30px auto;
    overflow: hidden;

    tbody {
      animation: move 20s linear infinite normal backwards;
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

<template>
  <div class="login_body">
    <div>
      <input v-model="username" type="text" class="login_text" placeholder="账户名/手机号/Email">
    </div>
    <div>
      <input v-model="password" type="password" class="login_text" placeholder="请输入您的密码">
    </div>
    <div class="verify_section"><input type="text" class="login_text" v-model="verifyImg" placeholder="请输入您的验证码"><img class="verifyImg" src="/api2/users/verifyImg" ref="verifyImg" alt=""><span @click="handleToVerifyImg">看不清楚？换一张</span>
    </div>
    <div class="login_btn">
      <input type="submit" value="登录" @touchstart="handleToLogin">
    </div>
    <div class="login_link">
      <router-link to="/mine/register">立即注册</router-link>
      <router-link to="/mine/findPassword">找回密码</router-link>
    </div>
  </div>
</template>

<script>
import { messageBox } from '@/components/JS'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      verifyImg: ''
    }
  },
  methods: {
    handleToLogin () {
      this.axios.post('/api2/users/login', {
        username: this.username,
        password: this.password,
        verifyImg: this.verifyImg
      }).then(res => {
        var code = res.data.code
        var This = this
        if(code == 0 ){
          messageBox({
            title: '登录',
            content: '登录成功',
            ok: '确定',
            handleOk(){
              This.$router.push('/mine/center')
            }
          })
        }else{
           messageBox({
            title: '登录',
            content: res.data.msg,
            ok: '确定'
          })
        }
      })
    },
    handleToVerifyImg () {
      this.$refs.verifyImg.src = '/api2/users/verifyImg?' + Math.random()
    }
  }
}
</script>

<style lang="scss" scoped>
.login_body {
  div {
    margin: 20px 0;
    .login_text {
      height: 40px;
      padding: 0 10px;
      width: 100%;
      outline: none;
      border: none;
      border-radius: 0;
      border-bottom: 1px solid rgba(0, 0, 0, .4);
    }
  }
  .verifyImg {
    display: inline-block;
  }
  .verify_section {
    span {
      font-size: 14px;
    }
  }
  .login_btn {
    margin: 5px 10px;
    input {
      width: 100%;
      height: 40px;
      background-color: #f03d37;
      border: none;
      outline: none;
      border-radius: 5px;
      -webkit-appearance: none;
    }
  }
  .login_link {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    a {
      font-size: 12px;
      color: #f03d37;
      text-decoration: none;
    }
  }
}
</style>

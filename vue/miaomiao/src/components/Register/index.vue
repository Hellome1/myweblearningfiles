<template>
  <div class="register_body">
    <div>
      邮箱：<input v-model="email" type="text">
    </div>
    <div>
      用户名：<input v-model="username" type="text">
    </div>
    <div>
      密码：<input v-model="password" type="password">
    </div>
    <div>
      确认密码：<input v-model="recheck" type="password">
    </div>
    <div class="send_verify">
      <button :disabled="disabled" @touchstart="handleToVerify">{{verifyInfo}}</button>
      验证码：<input v-model="verify" type="text">
    </div>
    <div class="register_confirm">
      <button @touchstart="handleToRegister">注册</button>
    </div>
    <div class="register_link">
      <router-link to="/mine/login">立即登录</router-link>
      <router-link to="/mine/findPassword">找回密码</router-link>
    </div>
  </div>
</template>

<script>
import { messageBox } from '@/components/JS'

export default {
  name: 'register',
  data () {
    return {
      email: '',
      username: '',
      password: '',
      recheck: '',
      verify: '',
      verifyInfo: '发送验证码',
      disabled: false
    }
  },
  methods: {
    handleToVerify () {
      if(this.disabled) return
      if(!this.verifyRule()) return

      this.axios.get('/api2/users/verify?email=' + this.email).then((res) => {
        var code = res.data.code
        var That = this
        if (code === 0 ) {
          messageBox({
            title: '验证码',
            content: '验证码已发送',
            ok: '确定',
            handleOk () {
              That.countDown()
            }
          })
        }else{
          messageBox({
            title: '验证码',
            content: '验证码发送失败',
            ok: '确定'
          })
        }
      })
    },
    handleToRegister () {
      var condition = this.email && this.username && this.password && this.password === this.recheck && this.verify
      if (!condition) {
        return
      }
      this.axios.post('/api2/users/register', {
        email: this.email,
        username: this.username,
        password: this.password,
        verify: this.verify
      }).then(res => {
        var code = res.data.code
        var That = this
        if (code === 0) {
          messageBox({
            title: '注册',
            content: '用户注册成功',
            ok: '确定',
            handleOk () {
              That.$router.push('/mine/login')
            }
          })
        }else{
          messageBox({
            title: '注册',
            content: res.data.msg,
            ok: '确定'
          })
        }
      })
    },
    verifyRule () {
      if(!this.email){
        return false
      }else{
        var reg = /^.+@\w{2,}.com$/
        if(!reg.test(this.email)){
          return false
        }
        return true
      }
    },
    countDown () {
      this.disabled = true
      var count = 60
      var timer = setInterval(() => {
        count--
        this.verifyInfo = '剩余' + count + '秒'
        if(count === 0){
          this.disabled = false
          count = 60
          this.verifyInfo = '发送验证码'
          clearInterval(timer)
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.register_body {
  margin-top: 5px;
  padding: 5px;
  input {
    width: 100%;
    height: 30px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, .6);
    outline: none;
    padding: 0 5px;
    margin: 5px 0;
    font-size: 16px;
  }
  .send_verify {
    button {
      font-size: 16px;
      float: right;
      margin-right: 5px;
    }
  }
  .register_confirm {
    button {
      width: 100%;
      height: 45px;
      font-size: 18px;
      background-color: #f03d37;
      color: white;
      border: none;
      border-radius: 3px;
      margin-top: 5px;
      padding: 5px;
    }
  }
  .register_link {
    padding: 5px 5px;
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
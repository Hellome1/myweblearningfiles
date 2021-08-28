<template>
  <div class="findPassword_body">
    <div>
      邮箱：<input v-model="email" type="text">
    </div>
    <div>
      新密码：<input v-model="password" type="password">
    </div>
    <div class="send_verify">
      <button @touchstart="handleToVerify">发送验证码</button>
      验证码：<input v-model="verify" type="text">
    </div>
    <div class="findPassword_confirm">
      <button @touchstart="handleToPassword">修改密码</button>
    </div>
    <div class="findPassword_link">
      <router-link to="/mine/login">立即登录</router-link>
      <router-link to="/mine/register">立即注册</router-link>
    </div>
  </div>
</template>

<script>
import { messageBox } from '@/components/JS'

export default {
  name: 'findPassword',
  data () {
    return {
      email: '',
      password: '',
      verify: ''
    }
  },
  methods: {
    handleToVerify () {
      this.axios.get('/api2/users/verify?email=' + this.email).then((res) => {
        var code = res.data.code
        if (code === 0 ) {
          messageBox({
            title: '验证码',
            content: '验证码已发送',
            ok: '确定'
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
    handleToPassword () {
      this.axios.post('/api2/users/findPassword', {
        email: this.email,
        password: this.password,
        verify: this.verify
      }).then(res => {
        var code = res.data.code
        var That = this
        if (code === 0) {
          messageBox({
            title: '修改',
            content: '修改密码成功',
            ok: '确定',
            handleOk () {
              That.$router.push('/mine/login')
            }
          })
        }else{
           messageBox({
            title: '修改',
            content: '修改密码失败' + res.data.msg,
            ok: '确定'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.findPassword_body {
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
  .findPassword_confirm {
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
  .findPassword_link {
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

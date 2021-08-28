<template>
  <div id="individualCenter">
    <div class="centerHeader">
      <div class="headLogo">
        <input class="update_logo" type="file" name="file" @change="handleToUpload">
        <img class="userHeadPic" :src="$store.state.User.userHead" alt="">
        <p class="update_description">上传头像</p>
      </div>
      <div class="bar">
        {{greet}}，<span class="greet_name">{{ $store.state.User.name }}</span>
        <a href="javascript:;" @click.e.prevent="handleToLogout">退出</a>
      </div>
      <div class="administration">
        <div v-if="$store.state.User.isAdmin">用户身份：管理员<a target="_blank" href="/admin">进入管理后台</a></div>
        <div v-else>用户身份：普通会员</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { messageBox } from '@/components/JS'
export default {
  name: 'center',
  data () {
    return {
      greet: new Date().getHours() < 12 ? '上午好' : new Date().getHours() < 19 ? '下午好' : '晚上好'
    }
  },
  methods: {
    handleToLogout () {
      console.log(1)
      this.axios.get('/api2/users/logout').then((res) => {
        var code = res.data.code
        if(code == 0){
          localStorage.removeItem('name')
          localStorage.removeItem('isAdmin')
          this.$store.commit('User/USER_NAME', { name: '', isAdmin: false, userHead: ''})
          this.$router.push('/mine/login')
        }
      })
    },
    handleT () {
      console.log('handle')
    },
    handleToUpload (ev) {
      var file = ev.target.files[0]
      console.log('file')
      var param = new FormData()
      param.append('file', file, file.name)
      var config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      this.axios.post('/api2/users/uploadUserHead', param, config).then(res => {
        var code = res.data.code
        if (code === 0) {
          var That = this
          messageBox({
            title: '信息',
            content: '上传头像成功',
            ok: '确定',
            handleOk () {
               That.$store.commit('User/USER_NAME', {
                userHead: res.data.data.userHead + '?' + Math.random()
              })
            }
          })
        }else{
            messageBox({
            title: '信息',
            content: '上传头像失败',
            ok: '确定'
          })
        }
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    axios.get('/api2/users/getUser').then((res) => {
      var code = res.data.code
      if (code === 0) {
        next(vm => {
          localStorage.setItem('name', res.data.data.username)
          localStorage.setItem('isAdmin',res.data.data.isAdmin)
          vm.$store.commit('User/USER_NAME', {
            name: res.data.data.username,
            isAdmin: res.data.data.isAdmin,
            userHead: res.data.data.userHead
          })
        })
      }else{
        next('/mine/login')
      }
    })
  }
}
</script>

<style lang="scss" scoped>
#individualCenter{
  margin: 2px;
  height: 100%;
  background-color: rgba(221, 106, 106, 0.2);
  a {
    color: black;
    padding-left: 8px;
    font-size: 14px;
    text-decoration: none;
    font-weight: bold;
  }
  .centerHeader {
    padding: 8px 10px;
    background-color: rgba(197, 69, 9, 0.6);
    .headLogo {
      display: inline-block;
      .update_logo {
        height: 50px;
        width: 50px;
        position: absolute;
        opacity: 0;
      }
      .userHeadPic {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .update_description {
        font-size: 12px;
      }
    }
    .bar {
      float: right;
      margin-top: 8px;
      .greet_name {
        display: inline-block;
        position: relative;
        top: 4px;
        max-width: 100px;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    .administration {
      position: absolute;
      right: 12px;
      top: 50px;
      font-size: 12px;
    }
  }
}
</style>

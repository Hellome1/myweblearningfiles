<template>
  <div id="main">
    <Header title="喵喵电影"/>
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
          <span>{{$store.state.city}}</span><i class="iconfont icon-dingwei"></i>
        </router-link>
        <div class="hot_switch">
          <router-link tag="div" to="/movie/nowPlaying" class="hot_item active">正在热映</router-link>
          <router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
        </div>
        <router-link tag="div" to="/movie/search" class="search_entry">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <Tabbar />
    <router-view name="detail" />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Tabbar from '@/components/Tabbar'
// import MessageBox from '@/components/JS/MessageBox'
import { messageBox } from '@/components/JS'

export default {
  name: 'Movie',
  components: {
    Header,
    Tabbar
  },
  mounted () {
    var id = this.$store.state.City.cityId
    var cityname = this.$store.state.City.nm
    var that = this
    setTimeout(() => {
      this.cityId = this.getCookie('cityId') || 110100

      if (id == this.cityId) return 
      messageBox({
        title: '定位',
        content: cityname,
        cancel: '取消',
        ok: '切换定位',
        handleCancel: function () {
          console.log('canceled')
        },
        handleOk: function () {
          var d = new Date()
          d.setDate(d.getDate() + 1)

          document.cookie = 'cityId=' + id + '; expires=' + d

          that.$store.commit('changeCityMutation', cityname)

          // that.$router.push('/movie')
          window.location.reload()
        }
      })
    }, 1000);
  },
  methods: {
    getCookie (name) {
      var cookieStr = document.cookie
      var cookieArr = cookieStr.split('; ')
      for(let i = 0; i < cookieArr.length; i++){
        if (cookieArr[i].split('=')[0] === name) {
          return cookieArr[i].split('=')[1]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#content {
  height: 636px;
  position: relative;
  margin-top: 100px;
  .movie_menu {
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    z-index: 1;
    background-color: white;
    top: 50px;
    .city_name {
      flex-grow: 1;
      font-weight: bold;
      i {
        font-size: 18px;
      }
    }
    .city_name.router-link-active {
      color: #f03d37;
    }
    .hot_switch {
      flex-grow: 1;
      display: flex;
      justify-content: space-evenly;
      .hot_item {
        font-weight: bold;
      }
      .hot_item.router-link-active {
        color: #f03d37;
        border-bottom: 2px solid #f03d37;
      }
    }
    .search_entry {
      flex-grow: 1;
      i {
        font-size: 22px;
      }
    }
    .search_entry.router-link-active {
      color: #f03d37;
    }
  }
}
</style>

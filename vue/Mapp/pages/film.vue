<template>
  <div>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in loopList" :key="item.bannerId" class="myC">
        <img :src="item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
    <ul>
      <nuxt-link to="/film/nowplaying" tag="li">正在热映</nuxt-link>
      <nuxt-link to="/film/comingsoon" tag="li">即将上映</nuxt-link>
    </ul>
    <Nuxt-child></Nuxt-child>
  </div>  
</template>

<script>
import axios from 'axios'
export default {
  asyncData () {
    return axios({
      url: 'https://m.maizuo.com/gateway?type=2&cityId=110100&k=6937264',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615359311169573898780673"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res => {
      console.log(res.data)
      return {
        loopList: res.data.data
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.myC {
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
}
</style>

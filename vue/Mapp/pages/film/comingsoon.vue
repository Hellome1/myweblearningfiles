<template>
  <div>
    <ul>
      <li v-for="data in datalist" :key="data.id">
        {{data.nm}}
      </li>
    </ul>
  </div>
</template>

<script>
// import axios from '@nuxtjs/axios'
import axios from 'axios'
export default {
  asyncData () {
    // process.server 判断是否为后端请求
    return axios({
      url: process.server ? 'https://m.maoyan.com/ajax/movieOnInfoList?token=' : '/ajax/movieOnInfoList?token='
    }).then(res => {
      console.log(res.data)
      return {
        datalist: res.data.movieList
      }
    })
  },
  mounted () {
    // this.$axios({
    //   url: '/ajax/movieOnInfoList?token='
    // }).then(res => {
    //   console.log(res.data)
    // })
  }
} //https://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=D7F77D6080BC11EB8FC8BF8D8471471AE76CC8C544E44498AB166839DD3CF188&optimus_risk_level=71&optimus_code=10
</script>

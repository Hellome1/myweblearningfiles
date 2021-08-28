<template>
  <div>
    nowplaying
    <ul>
      <li v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
        <img :src="data.poster" alt="">
        {{data.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: ['111', '222', '333']
    }
  },
  asyncData () {
    return axios({
        url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1905254`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615359311169573898780673"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        // console.log(res.data.data.films)
        return {
          datalist: res.data.data.films
        }// 状态
      })
  },
  mounted () {
    // this.$axios({
    //   url: '/ajax/movieOnInfoList?token='
    // }).then(res => {
    //   console.log(res)
    // })
  },
  methods: {
    handleClick (data) {
      this.$router.push(`/detail/${data}`)
    }
  }
}
</script>

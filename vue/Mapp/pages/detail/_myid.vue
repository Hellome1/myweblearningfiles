/* 动态路由 */
<template>
  <div v-if="filmInfo">
    detail <br>
    <!-- {{filmInfo}} -->
    <img :src="filmInfo.poster" alt="">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'detailtemplate',

  data () {
    return {
      filmInfo: null
    }
  },
  
  asyncData (data) {
    console.log(data.params)

    return axios({
      url: `https://m.maizuo.com/gateway?filmId=${data.params.myid}&k=9309176`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615359311169573898780673"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res.data)
      
      return {
        filmInfo: res.data.data.film
      }
    })
  }
}
</script>

<template>
  <div>
    <router-link to="/City">
      <mt-button type="default">{{this.cityName}}</mt-button>
    </router-link>
    <ul>
      <li v-for="data in datalist" :key="data.cinemaId">
        {{data.name}}
        <p>{{data.address}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      cityId: 110100,
      cityName: ''
    }
  },
  mounted () {
    const opCityId = this.getCookie('cityId')
    console.log(opCityId)
    this.cityId = opCityId
    axios({
      url: `https://m.maizuo.com/gateway?cityId=${this.cityId}&ticketFlag=1&k=8965993`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615359311169573898780673"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      console.log(res.data.data)
      this.datalist = res.data.data.cinemas
      this.cityName = res.data.data.cinemas[0].cityName.slice(0, -1)
    })
  },
  methods: {
    getCookie (name) {
      var cookieString = document.cookie
      var cookieArray = cookieString.split('; ')
      for (let i = 0; i < cookieArray.length; i++) {
        if (cookieArray[i].split('=')[0] === name) {
          return cookieArray[i].split('=')[1]
        }
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  height: 60px;
  p {
    font-size: 12px;
  }
}
</style>

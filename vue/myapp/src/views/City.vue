<template>
  <div>
    <mt-index-list>
      <mt-index-section v-for="data in datalist" :key="data.index" :index="data.index">
        <mt-cell v-for="city in data.list" :key="city.cityId" :title="city.name" @click.native="saveCity(city.cityId)"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>  
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios({
      url: 'https://m.maizuo.com/gateway?k=3697882',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615359311169573898780673","bc":"110100"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      // console.log(res.data)
      this.datalist = this.handleCity(res.data.data.cities)
    })
  },
  methods: {
    handleCity (datalist) {
      // console.log(datalist)
      var letterArr = []
      for (let i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i))
      }
      var newList = []
      for (let i = 0; i < 26; i++) {
        var newArr = datalist.filter(item => item.pinyin.substring(0, 1) === letterArr[i].toLowerCase())
        if (newArr.length) {
          newList.push({
            index: letterArr[i],
            list: newArr
          })
        }
      }
      console.log(newList)
      return newList
    },
    saveCity (cityId) {
      // console.log(cityId)
      // document.cookie = 'cityId=' + cityId + '; expires=' + 
      var d = new Date()
      d.setDate(d.getDate() + 1)
      // console.log(d)
      
      document.cookie = 'cityId=' + cityId + '; expires=' + d
      this.$router.push('/cinema')
    }
  }
}
</script>

<style lang="scss" scoped>
* { touch-action: pan-y;}
</style>

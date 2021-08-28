<template>
  <div>
    <ul v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="0"
    infinite-scroll-immediate-check="false"
    >
      <li v-for="data in datalist" :key="data.filmId" @click="handleChangePage(data.filmId)">
        <img :src="data.poster" alt="">
        <h3>{{data.name}}</h3>
        <p>观众评分:{{data.grade || '暂无评分'}}</p>
        <p>主演:{{data.actors | actorfilter}}</p>
      </li>
    </ul>
    <div v-show="isShow">正在加载...</div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
Vue.filter('actorfilter', function (data) {
  var newlist = data ? data.map(item => item.name) : null
  return newlist ? newlist.join(' ') : '暂无主演信息'
})
export default {
  data () {
    return {
      datalist: ['111', '22', '333'],
      loading: false,
      current: 1,
      isShow: true
    }
  },
  mounted () {
    // axios.get("https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=1905254").then(res => console.log(res.data))
    // 配置字段
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=1905254',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615359311169573898780673"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      this.datalist = res.data.data.films
      console.log(res.data.data.films)
    })
  },
  methods: {
    handleChangePage (id) {
      // console.log(id)
      // 编程式导航-路径跳转
      // this.$router.push(`/detail/${id}`)

      // 编程式导航-名字跳转
      this.$router.push({ name: 'kerwindetail', params: { id: id } })
    },
    loadMore () {
      // console.log('到底了')
      this.loading = true

      this.current++
      axios({
        url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=${this.current}&pageSize=10&type=1&k=1905254`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615359311169573898780673"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.data.films]
        console.log(res.data.data)
        this.loading = false
        if (this.datalist.length === res.data.data.total) {
          this.loading = true
          this.isShow = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
img {max-width: 210px; max-height: 300px;}
div { margin-bottom: 30px;}
ul {
  li {
    overflow: hidden;
    margin: 10px;
    img {
      float: left;
      width: 100px;
    }
    p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>

<template>
  <div class="city_body">
    <Loading  v-if="!cityList.length" />
    <div v-else class="city_list">
      <Scroller ref="city_list_sc">
        <div>
          <div class="city_hot">
            <h2>热门城市</h2>
            <ul class="clearfix">
              <li v-for="data in hotList" :key="data.filmId">
                {{data.name}}
              </li>
            </ul>
          </div>
          <div class="city_sort" ref="city_sort">
            <div v-for="data in cityList" :key="data.index">
              <h2>{{data.index}}</h2>
              <ul>
                <li v-for="dt in data.cities" :key="dt.cityId" @click="switchCinema(dt.cityId, dt.name)">
                  {{dt.name}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Scroller>
    </div>
    <div class="city_index" @touchstart="start">
      <ul>
        <li v-for="(data, index) in cityList" :key="'Index' + data.index" :index="index">
          {{data.index}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'City',
  data () {
    return {
      cityList: [],
      hotList: []
    }
  },
  mounted () {
    /* https://m.maoyan.com/dianying/cities.json */
    this.axios({
      url: 'https://m.maizuo.com/gateway?k=3697882',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615359311169573898780673","bc":"110100"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      // console.log(res.data)
      var newData = res.data.data.cities
      this.handleCityList(newData)
    })

    this.axios('/dianying/cities.json').then(res => {
      console.log(res.data)
    })
  },
  activated () {
    // 阻止浏览器原生下拉事件
    document.body.addEventListener('touchmove', this.prevent
    , {passive: false})
  },
  deactivated () {
    document.body.removeEventListener('touchmove', this.prevent)
  },
  methods: {
    handleCityList(newData){
      var cityList = []
      var hotList = []
      for(let i = 0; i < newData.length; i++){
        var firstLetter = newData[i].pinyin.substring(0,1).toUpperCase()
        if(hasIndex(firstLetter)){
          for(let j = 0; j < cityList.length; j++){
            if(firstLetter === cityList[j].index){
              cityList[j].cities.push(newData[i])
            }
          }
        }else{
          cityList.push({
            index: firstLetter,
            cities: [newData[i]]
          })
        }
        if(newData[i].isHot){
          hotList.push(newData[i])
        }
      }

      cityList.sort((n1, n2) => {
        if(n1.index >= n2.index){
          return 1
        }else{
          return -1
        }
      })

      console.log(cityList)
      console.log(hotList)
      this.cityList = cityList
      this.hotList = hotList

      function hasIndex(firstLetter){
        for(let i = 0; i < cityList.length; i++){
          if(firstLetter === cityList[i].index){
            return true
          }
        }
        return false
      }
    },
    handleToIndex(index){
      var h2 = this.$refs.city_sort.getElementsByTagName('h2')
      // this.$refs.city_sort.parentNode.parentNode.parentNode.scrollTop = h2[index].offsetTop
      this.$refs.city_list_sc.toScrollTop(-h2[index].offsetTop)
    },
    start(e){
      var targetX = e.targetTouches[0].clientX
      var Y = e.targetTouches[0].clientY
      var _this = this
      tab(Y)
      
      window.addEventListener('touchmove', move)
      window.addEventListener('touchend', end)

      function move(e){
        var nY = e.targetTouches[0].clientY
        tab(nY)
      }

      function end(){
        window.removeEventListener('touchmove', move)
        window.removeEventListener('touchend', end)
      }

      function tab(y){
        var currentItem = document.elementFromPoint(targetX, y)
        // console.log(currentItem.attributes)
        if (currentItem.tagName === 'LI') {
          _this.handleToIndex(currentItem.attributes.index.nodeValue)
        }
      }
    },
    switchCinema(id, cityname){

      var d = new Date()
      d.setDate(d.getDate() + 1)

      document.cookie = 'cityId=' + id + '; expires=' + d

      this.$store.commit('changeCityMutation', cityname)

      this.$router.push('/movie')
    },
    prevent (e) {
      e.preventDefault()
    }
  }
}
</script>

<style lang="scss" scoped>
.city_body {
  background-color: rgba(223, 186, 192, .2);
  height: 100%;
  .city_list {
    overflow: auto;
    height: 100%;
    .city_hot {
      margin: 20px 0;
      h2 {
        font-size: 20px;
        line-height: 36px;
        padding-left: 10px;
        font-weight: normal;
        background-color: rgba(212, 212, 212, 0.5);
      }
      .clearfix {
        overflow: hidden;
        li {
          float: left;
          margin: 10px 0 0 16px;
          width: 110px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          border: 1px solid rgba(0, 0, 0, .3);
        }
      }
    }
    .city_sort {
      div {
        h2 {
          font-size: 20px;
          line-height: 36px;
          padding-left: 10px;
          font-weight: normal;
          background-color: rgba(212, 212, 212, 0.5);
        }
        ul {
          li {
            margin: 10px;
          }
        }
      }
    }
  }
  .city_index {
    position: fixed;
    right: 0;
    top: 35px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 20px;
    li {
      text-align: center;
    }
    @media screen and (max-height: 670px){
      top: 20px;
    }
    @media screen and (max-height: 640px){
      top: 20px;
      font-size: 14px;
    }
    @media screen and (max-height: 570px){
      top: 20px;
      font-size: 12px;
    }
  }
}
</style>

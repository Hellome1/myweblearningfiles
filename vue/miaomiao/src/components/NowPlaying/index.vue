<template>
  <div class="movie_body" ref="movie_body">
    <Loading v-if="!datalist.length" />
    <Scroller v-else :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
      <ul>
        <li>{{pullDownMsg}}</li>
        <li v-for="data in datalist" :key="data.filmId">
          <div class="pic_show" @tap="handleToDetail(data.filmId)">
            <img :src="data.poster" alt="">
          </div>
          <div class="info_list">
            <h2 @tap="handleToDetail(data.filmId)">{{data.name}}</h2>
            <p>观众评分 <span class="grade">{{data.grade || '暂无评分'}}</span></p>
            <p>主演：{{data.actors | actorfilter}}</p>
            <p>{{data.category}}</p>
          </div>
          <div class="btn_mall">购票</div>
        </li>
      </ul>
    </Scroller>
  </div>
</template>

<script>
// import BetterScroll from 'better-scroll'

export default {
  name: 'NowPlaying',
  data () {
    return {
      datalist: [],
      pullDownMsg: '',
      cityId: this.getCookie('cityId') ? this.getCookie('cityId') : 110100,
      prevCityId: -1
    }
  },
  activated () {
    this.cityId = this.getCookie('cityId') || 110100

    if (this.prevCityId == this.cityId) return 

    console.log(1)

    this.axios({
        url: `https://m.maizuo.com/gateway?cityId=${this.cityId}&pageNum=1&pageSize=10&type=1&k=1905254`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615359311169573898780673"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        console.log(res.data)
        this.datalist = res.data.data.films
        console.log(this.datalist)
        this.prevCityId = this.cityId
        // this.$nextTick(() => {
        //   var scroll = new BetterScroll(this.$refs.movie_body, {
        //     tap: 'tap',
        //     click: true,
        //     probeType: 1
        //   })

        //   scroll.on('scroll', (pos) => {
        //     // console.log('scroll')
        //     if (pos.y > 30) {
        //       this.pullDownMsg = '正在更新中'
        //     }
        //   })

        //   scroll.on('touchEnd', (pos) => {
        //     // console.log('end')
        //     if (pos.y > 30) {
        //       this.axios({
        //         url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1905254`,
        //         headers: {
        //           'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615359311169573898780673"}',
        //           'X-Host': 'mall.film-ticket.film.list'
        //         }
        //       }).then(res => {
        //         this.pullDownMsg = '更新成功'
        //         setTimeout(() => {
        //           this.datalist = res.data.data.films
        //           this.pullDownMsg = ''
        //         }, 1000);
        //       })
        //     }
        //   })
        // })
      })
  },
  methods: {
    handleToDetail (filmId) {
      // console.log(filmId)
      this.$router.push('/movie/detail/1/' + filmId)
    },
    handleToScroll (pos) {
      if (pos.y > 30) {
        this.pullDownMsg = '正在更新中'
      }
    },
    handleToTouchEnd (pos) {
      if (pos.y > 30) {
        this.axios({
          url: `https://m.maizuo.com/gateway?cityId=${this.cityId}&pageNum=1&pageSize=10&type=1&k=1905254`,
          headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615359311169573898780673"}',
            'X-Host': 'mall.film-ticket.film.list'
          }
        }).then(res => {
          this.pullDownMsg = '更新成功'
          setTimeout(() => {
            this.datalist = res.data.data.films
            this.pullDownMsg = ''
          }, 1000);
        })
      }
    },
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
.movie_body {
  height: 100%;
  ul {
    min-height: 600px;
    li:first-child {
      padding: 0;
      border: none;
    }
    li {
      display: flex;
      margin: 0 10px;
      padding: 10px 0;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(0, 0, 0, .2);
      .pic_show {
        img {
          width: 90px;
          height: 121px;
        }
      }
      .info_list {
        width: 200px;
        p {
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #676767;
          line-height: 26px;
          .grade {
            color: orange;
          }
        }
      }
      @media screen and (max-width: 360px) {
        .info_list {
          width: 190px;
        }
      }
      @media screen and (max-width: 320px) {
        margin: 0 3px;
        padding: 6px 0;
        font-size: 14px;
        .info_list {
          width: 170px;
        }
      }
      .btn_mall {
        padding: 3px 8px;
        background-color: #f03d37;
        color: white;
        border-radius: 5px;
      }
      @media screen and (min-width: 400px) {
        .info_list {
          width: 230px;
        }
        .btn_mall {
          padding: 5px 10px;
        }
      }
    }
  }
}
</style>

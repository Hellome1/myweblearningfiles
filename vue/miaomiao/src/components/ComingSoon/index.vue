<template>
  <div class="movie_body">
    <Loading v-if="!comingList.length" />
    <Scroller v-else>
      <ul>
        <li v-for="data in comingList" :key="data.fimlId">
          <div class="pic_show" @tap="handleToDetail(data.filmId)">
            <img :src="data.poster" alt="">
          </div>
          <div class="info_list">
            <h2 @tap="handleToDetail(data.filmId)">{{data.name}}</h2>
            <p>观众评分 <span class="grade">暂无评分</span></p>
            <p>主演：{{data.actors | actorfilter}}</p>
            <p>{{data.category}}</p>
          </div>
          <div class="btn_mall">预售</div>
        </li>
      </ul>
    </Scroller>
  </div>
</template>

<script>
export default {
  name: 'ComingSoon',
  data () {
    return {
      comingList: [],
      prevCityId: -1,
      cityId: 110100
    }
  },
  activated () {
    this.cityId = this.getCookie('cityId') || 110100

    if (this.prevCityId == this.cityId) return 

    this.axios({
      url: `https://m.maizuo.com/gateway?cityId=${this.cityId}&pageNum=1&pageSize=10&type=2&k=9956508`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615359311169573898780673"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data)
      this.comingList = res.data.data.films
      this.prevCityId = this.cityId
    })
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
    },
    handleToDetail (filmId) {
      this.$router.push('/movie/detail/2/' + filmId)
    }
  }
}
</script>

<style lang="scss" scoped>
.movie_body {
  height: 100%;
  ul {
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
        background-color: #2b8fe0;
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

<template>
  <div id="detailContainer" class="slide-enter-active">
    <Header title="影片详情" >
      <i class="iconfont icon-left" @touchstart="handleToBack"></i>
    </Header>
    <div id="content" class="contentDetail" v-if="filminfo">
      <div class="detail_list">
        <div class="detail_list_bg" :style="{'background': 'url(' + filminfo.poster + ') 0 40%'}"></div>
        <div class="detail_list_filter"></div>
        <div class="detail_list_content">
          <div class="detail_list_img">
            <img :src="filminfo.poster" alt="">
          </div>
          <div class="detail_list_info">
            <h2>{{filminfo.name}}</h2>
            <p>{{filminfo.category}}</p>
            <p>{{filminfo.nation}} / {{filminfo.runtime}}分钟</p>
            <p>评分：{{filminfo.grade}} ( {{filminfo.filmType.name}} )</p>
            <p>{{filminfo.premiereAt | premiere}}</p>
          </div>
        </div>
      </div>
      <div class="detail_intro">
        <h3>影片简介</h3>
        <p>{{filminfo.synopsis}}</p>
      </div>
      <div class="detail_player swiper-container">
        <h3 class="leadingActors">
          主演
        </h3>
        <swiper class="swiper-wrapper" :options="swiperOptions">
          <li class="swiper-slide" v-for="(data, index) in actorsinfo" :key="index">
            <div>
              <img :src="data.avatarAddress" alt="">
            </div>
            <p>{{data.name}}</p>
            <p>{{data.role}}</p>
          </li>
        </swiper>
      </div>
      <div class="filmPhotos">
        <h3 class="leadingActors">
          剧照
        </h3>
        <swiper class="swiper-wrapper" :options="swiperOptions">
          <li class="swiper-slide" v-for="(data, index) in filminfo.photos" :key="index">
            <img :src="data" alt="">
          </li>
        </swiper>
      </div>
      <div class="purchase">
        购票
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'Detail',
  data () {
    return {
      filminfo: '',
      actorsinfo: '',
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 10,
        freeMode: true
      }
    }
  },
  components: {
    Header,
    Swiper,
    SwiperSlide
  },
  props: ['movieId'],
  mounted () {
    // console.log(this.movieId)
    this.axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.movieId}&k=9309176`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615359311169573898780673"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res.data.data.film)
      this.filminfo = res.data.data.film
      this.actorsinfo = res.data.data.film.actors
    })
  },
  methods: {
    handleToBack () {
      this.$router.back()
    }
  } //1620881985815  1620604800
}
</script>

<style lang="scss" scoped>
#detailContainer {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  min-height: 100%;
  background-color: white;
  .icon-left {
    border: 10px solid rgba(0, 0, 0, 0);
    border-right-color: white;
  }
  #content {
    display: block;
    margin-bottom: 0;
    margin-top: 50px;
    .detail_list {
      height: 200px;
      width: 100%;
      position: relative;
      overflow: hidden;
      .detail_list_bg {
        width: 100%;
        height: 100%;
        filter: blur(20px)
      }
      .detail_list_filter {
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #40454d;
        opacity: .5;
      }
      .detail_list_content {
        display: flex;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 10;
        .detail_list_img {
          width: 108px;
          height: 150px;
          border: 1px solid #f0f2f3;
          margin: 20px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .detail_list_info {
          margin-top: 22px;
          h2 {
            font-size: 24px;
            color: white;
            font-weight: normal;
            line-height: 40px;
          }
          p {
            color: white;
            line-height: 24px;
            font-size: 14px;
          }
        }
      }
    }
    .detail_intro {
      margin: 5px 5px;
      p {
        margin: 10px 3px;
        text-indent: 10px;
      }
    }
    .detail_player {
      margin: 15px 5px;
      .swiper-wrapper {
        .swiper-slide {
          text-align: center;
          img {
            width: 120px;
          }
          p {
            margin-right: 10px;
          }
          @media screen and (max-width: 360px) {
            img {
              width: 110px;
            }
            p {
              margin-right: 5px;
            }
          }
          @media screen and (max-width: 320px) {
            img {
              width: 100px;
            }
            p {
              margin-right: 0px;
            }
          }
          @media screen and (min-width: 410px) {
            img {
              width: 130px;
            }
            p {
              margin-right: 0px;
            }
          }
        }
      }
    }
    .filmPhotos {
      margin: 15px 5px 60px;
      .swiper-wrapper {
        .swiper-slide {
          text-align: center;
          width: 120px;
          height: 75px;
          display: flex;
          align-items: center;
          overflow: hidden;
          img {
            width: 120px;
          }
        }
      }
    }
    .purchase {
      font-size: 22px;
      text-align: center;
      height: 45px;
      line-height: 45px;
      border-radius: 3px;
      color: white;
      background-color: #f03d37;
      position: fixed;
      width: 100%;
      z-index: 10;
      bottom: 0;
    }
  }
}
#detailContainer.slide-enter-active {
  animation: .3s slideMove;
}
@keyframes slideMove {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>

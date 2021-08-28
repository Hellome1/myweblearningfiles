<template>
  <div v-if="filminfo">
    <div class="imgContainer">
      <img class="headerImg" :src="filminfo.poster" alt="">
    </div>
    <h2>{{filminfo.name}}</h2>

    <h3>演职人员</h3>
    <swiper class="detailSwiper" perview="4">
      <swiper-slide v-for="(data, index) in filminfo.actors" :key="index">
        <img :src="data.avatarAddress" alt="">
        <p>{{data.name}}</p>
        <p>{{data.role}}</p>
      </swiper-slide>
    </swiper>

    <h3>剧照</h3>
    <swiper class="detailSwiperFP" perview="3">
      <swiper-slide v-for="(data, index) in filminfo.photos" :key="index" class="center">
        <img :src="data" alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import axios from 'axios'
import { SwiperSlide } from 'vue-awesome-swiper'
import swiper from './Detail/DetailSwiper'
import { HIDE_TABBAR_MUTATION, SHOW_TABBAR_MUTATION } from '../type/'
// import bus from '@/bus'
export default {
  data () {
    return {
      filminfo: null
    }
  },
  props: ['id'],
  components: {
    swiper,
    SwiperSlide
  },
  beforeMount () {
    // bus.$emit('maizuo', false)
    // this.$store.state.isTabbarShow = false

    this.$store.commit(HIDE_TABBAR_MUTATION, false)
  },
  mounted () {
    // console.log(this.$route.params.id, this.id)
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.id}&k=9309176`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615359311169573898780673"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res.data)
      this.filminfo = res.data.data.film
    })
  },
  beforeDestroy () {
    // bus.$emit('maizuo', true)
    // this.$store.state.isTabbarShow = true

    this.$store.commit(SHOW_TABBAR_MUTATION, true)
  }
}
</script>

<style lang="scss" scoped>
.imgContainer {
  width: 100%;
  height: 200px;
  overflow: hidden;
  .headerImg {
    max-width: 100%;
    margin-top: -135px;
  }
}
.detailSwiper {
  text-align: center;
  img {
    width: 90px;
  }
}
.detailSwiperFP {
  text-align: center;
  .center {
    align-self: center;
  }
  img {
    width: 130px;
  }
}
</style>

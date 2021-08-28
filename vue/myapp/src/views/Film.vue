<template>
  <div>
    <swiper ref="mySwiper">
      <swiper-slide v-for="data in looplist" :key="data.bannerId" class="topNavCenter">
        <img :src="data.imgUrl" alt="">
      </swiper-slide>
    </swiper>
    <filmheader :class="isFixed?'fixed':''"></filmheader>
    <router-view />
  </div>
</template>

<script>
import { SwiperSlide } from 'vue-awesome-swiper'
import swiper from '@/views/Film/Swiper'
import axios from 'axios'
import filmheader from '@/views/Film/Filmheader'
import { Indicator } from 'mint-ui'
export default {
  data () {
    return {
      looplist: [],
      isFixed: false
    }
  },
  components: {
    swiper,
    SwiperSlide,
    filmheader
  },
  mounted () {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    axios({
      url: 'https://m.maizuo.com/gateway?type=2&cityId=110100&k=6937264',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615359311169573898780673"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res => {
      this.looplist = res.data.data
      console.log(res.data)
      Indicator.close()
    })

    window.onscroll = this.handleScroll
  },
  destroyed () {
    // console.log('destroyed')
    window.onscroll = null
  },
  methods: {
    handleScroll () {
      if (document.documentElement.scrollTop >= this.$refs.mySwiper.$el.offsetHeight) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
.topNavCenter {
  align-self: center;
}
</style>

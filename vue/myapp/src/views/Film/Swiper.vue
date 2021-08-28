<template>
  <div class="swiper-container filmswiper">
      <swiper :options="swiperOptions">
        <slot></slot>
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper>
      <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import { Swiper } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper
  },
  data () {
    return {
      swiperOptions: {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: { delay: 4000 }
      }
    }
  },
  mounted () {
    /* eslint-disable no-new */
    // new Swiper('.filmswiper', {
    //   loop: true,
    //   pagination: {
    //     el: 'swiper-pagination'
    //   }
    // })
  }
}
</script>

<style scoped>
/* .swiper-container {
  width: 600px;
  height: 300px;
} */
</style>

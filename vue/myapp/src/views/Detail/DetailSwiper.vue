<template>
  <div>
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
        slidesPerView: this.perview,
        spaceBetween: 10,
        freeMode: true
      }
    }
  },
  props: ['perview'],
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

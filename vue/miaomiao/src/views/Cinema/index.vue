<template>
  <div id="main">
    <Header title="我的影院" />
    <div id="content">
      <div class="cinema_menu">
        <div class="city_switch">
          全城 <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="brand_switch">
          品牌 <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="feature_switch">
          特色 <i class="iconfont icon-lower-triangle"></i>
        </div>
      </div>
      <CinemaList />
    </div>
    <Tabbar />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Tabbar from '@/components/Tabbar'
import CinemaList from '@/components/CinemaList'

export default {
  name: 'Cinema',
  components: {
    Header,
    Tabbar,
    CinemaList
  }
}
</script>

<style lang="scss" scoped>
#content {
  .cinema_menu {
    display: flex;
    justify-content: space-around;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, .3);
  }
}
</style>

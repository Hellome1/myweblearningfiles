<template>
  <div id="gameMap" class="gameMap" ref="gameMap">
    <div class="display" ref="display">
      <h1>GAME</h1>
      <ControllerDirection />
      <ControllerHandle />
    </div>
  </div>
</template>

<script>
/* 
  游戏页面
*/
import Vue from 'vue'
import Ball from '@/components/nutri'
import Noumenon from '@/views/Noumenon'
import ControllerDirection from '@/components/controller-direction'
import ControllerHandle from '@/components/controller-handle'
export default {
  name: 'GAME',
  components: {
    ControllerDirection,
    ControllerHandle
  },
  data () {
    return {
      
    }
  },
  mounted () {
    // 禁用下拉滑动（橡皮筋效果）
    document.body.addEventListener('touchmove', function(e){
      e.preventDefault()
    }, {passive: false})
    
    this.create(Noumenon)
    this.create(Ball)
  },
  methods: {
    create (component, props){
      const vm = new (Vue.extend(component))({
        propsData: props
      }).$mount()

      this.$refs.display.appendChild(vm.$el)
    }
  }
}
</script>

<style lang="scss" scoped>
#gameMap {
  width: 10000px;
  height: 10000px;
  margin: -5000px 0 0 -5000px;
  .display {
    margin: 5000px 0 0 5000px;
  }
}
</style>

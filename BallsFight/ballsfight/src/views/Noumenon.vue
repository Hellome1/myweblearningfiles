<template>
  <div ref="noumenon" :style="noumenonCss">
    
  </div>
</template>

<script>
export default {
  name: 'noumenon',
  data () {
    return {
      noumenonCss: {
        width: '20px',
        height: '20px',
        position: 'absolute',
        left: '50%',
        top: '50%',
        marginLeft: 0,
        marginTop: 0,
        backgroundColor: 'red',
        borderRadius: '50%'
      },
      size: 400
    }
  },
  mounted () {
    this.reposite()
  },
  methods: {
    reposite () { // 调整本体位置至屏幕正中央
      this.noumenonCss.marginLeft = -parseInt(this.noumenonCss.width) / 2 + 'px'
      this.noumenonCss.marginTop = -parseInt(this.noumenonCss.height) / 2 + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
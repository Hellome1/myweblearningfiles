<template>
  <div :style="ballCss" ref="nutri">
  </div>
</template>

<script>
export default {
  name: 'ball',
  data () {
    return {
      ballCss: {
        width: '10px',
        height: '10px',
        backgroundColor: 'red',
        borderRadius: '50%',
        position: 'absolute',
        left: 0,
        top: 0
      },
      isFuse: true
    }
  },
  mounted () {
    console.log('nutri loaded successfully')
    // 初始化随机位置
    this.ballCss.left = parseInt(Math.random() * 500) + 'px'
    this.ballCss.top = parseInt(Math.random() * 300) + 'px'
    // 获得距离可视区域的位置（以此判断是否碰撞）
    setTimeout(() => {
      console.log('clientTop', this.$refs.nutri.getBoundingClientRect())
    },100)
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>

</style>

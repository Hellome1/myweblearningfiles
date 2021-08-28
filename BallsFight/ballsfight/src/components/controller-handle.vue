<template>
  <div class="controllerContainer">
    <div class="spit" @touchstart="spit"></div>
    <div class="split" @touchstart="split"></div>
  </div>
</template>

<script>
export default {
  name: 'controller-handle',
  data () {
    return {
      
    }
  },
  methods: {
    spit () {
      
    },
    split () {

    }
  }
}
</script>

<style lang="scss" scoped>
.controllerContainer {
  position: fixed;
  bottom: 50px;
  left: 50px;
  width: 80px;
  height: 80px;
  z-index: 10;
  .spit {
    width: 35px;
    height: 35px;
    background-color: rgba(255, 0 ,0, .5);
    margin-left: 60px;
    border-radius: 50%;
  }
  .split {
    width: 35px;
    height: 35px;
    background-color: rgba(255, 0 ,0, .5);
    margin: 30px 0 0 0;
    border-radius: 50%;
  }
}
</style>
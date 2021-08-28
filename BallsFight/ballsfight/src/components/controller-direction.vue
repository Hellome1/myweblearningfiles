<template>
  <div class="controllerBackground">
    <div class="controllerDot" @touchstart="down" @touchend="end" @touchmove="move" ref="directionDot"></div>
  </div>
</template>

<script>
/* 
  实现控制点运动以及控制本体运动的组件
*/
export default {
  name: 'controller-direction',
  data () {
    return {
      direction: { // 方向原始数据
        start: null,
        end: null,
        timer: null
      },
      originDotPosition: [10, 10],
      currentDotPosition: [10, 10]
    }
  },
  mounted () {
    
  },
  methods: {
    // 拖拽三剑客down,move,up(end)
    down (e) {
      // 触摸时记录触摸信息，起始触摸位置
      // console.log(e.changedTouches[0])
      var target = e.changedTouches[0]
      this.direction.start = [target.clientX, target.clientY]
      // console.log(this.direction.start)
    },
    move (e) {
      /* 
        使用touchmove自带touch属性，则不用判断是否touch
        移动时根据触摸的移动点定义矢量vector，若矢量存在且不为零则运动
      */
      var target = e.changedTouches[0]
      this.direction.end = [target.clientX, target.clientY]
      var vectorX = this.direction.end[0] - this.direction.start[0]
      var vectorY = this.direction.end[1] - this.direction.start[1]
      /* vector限制计算 */
      if(Math.sqrt(Math.pow(vectorX, 2) + Math.pow(vectorY, 2)) > 20){
        // 记录vectorX以便使用计算vectorY
        let vectorCpX = vectorX
        vectorX = vectorX * 20 / Math.sqrt(Math.pow(vectorX, 2) + Math.pow(vectorY, 2))
        vectorY = vectorY * 20 / Math.sqrt(Math.pow(vectorCpX, 2) + Math.pow(vectorY, 2))
      }
      this.vector = [vectorX, vectorY]
      if(this.vector && this.vector[0] && this.vector[1]){
        // 矢量不为零要则需要运动
        this.movefunc()
      }
    },
    end () {
      // 触摸结束关闭定时器，初始化定时器和方向原始数据，并将操控点置零
      clearInterval(this.direction.timer)
      this.direction.timer = null
      this.direction.start = null
      this.direction.end = null
      this.vector = [0, 0]
      this.moveDot()
    },
    movefunc () {
      // 开启计时器，模拟运动
      clearInterval(this.direction.timer)
      this.direction.timer = setInterval(() => {
        this.moveStep()
      },30)
    },
    moveStep () {
      // 每一步要做的事 1、移动控制点 2、移动背景
      // step one
      this.moveDot()
      // step two
      this.moveBackground()
    },
    moveDot () {
      // 移动控制点，有范围限制(通过vector间接限制)
      var currentPositionL = this.originDotPosition[0] + this.vector[0] + 'px'
      var currentPositionT = this.originDotPosition[1] + this.vector[1] + 'px'
      this.$refs.directionDot.style.left = currentPositionL
      this.$refs.directionDot.style.top = currentPositionT
    },
    moveBackground () {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.controllerBackground {
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, .1);
  z-index: 10;
  .controllerDot {
    position: absolute;
    top: 10px;
    left: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgba(255, 0, 0, .5);
  }
}
</style>
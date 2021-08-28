<template>
  <ul>
    <router-link active-class="myactive" to="/film/nowplaying" tag="li">正在热映</router-link>
    <router-link active-class="myactive" to="/film/comingsoon" tag="li">即将上映</router-link>
  </ul>  
</template>

<style lang="scss" scoped>
.myactive {
  color: red;
  border-bottom: 2px solid red;
}
ul {
  overflow: hidden;
  li {
    width: 50%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    float: left;
  }
}
.fixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: white;
}
</style>

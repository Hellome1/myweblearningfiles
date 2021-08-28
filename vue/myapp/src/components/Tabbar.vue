<template>
  <nav>
    <ul>
      <router-link to="/film" tag="li" active-class="myactive"><i class="iconfont iconfont-arrow-up"></i>film</router-link>
      <router-link to="/cinema" tag="li" active-class="myactive">cinema</router-link>
      <router-link to="/center" tag="li" active-class="myactive">center</router-link>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.myactive{
  color: red;
  border-bottom: 2px solid red;
}
ul {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: white;
  li {
    border: 1px solid rgba(0, 0, 0, .1);
    height: 30px;
    line-height: 30px;
    text-align: center;
    flex: 1;
  }
}
</style>

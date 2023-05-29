<template>
  <div id="app">
    <!-- <router-view /> -->
    <Home />
  </div>
</template>

<script>
import Home from '@/views/Home.vue';

export default {
  components: { Home }
};
</script>


<style lang="scss">
@font-face {
  font-family: baskerville-old-face;
  src: url('./assets/Baskerville-Old-Face.ttf');
}
@font-face {
  font-family: huakangpipi;
  src: url('./assets/huakangpipi.ttf');
}
@font-face {
  font-family: huakangcaidai;
  src: url('./assets/huakangcaidai.ttf');
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

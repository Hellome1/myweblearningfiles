<template>
  <div>
    <tabbar v-if="isTabbarShow"></tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar'
import { mapState } from 'vuex'
// import navbar from './components/Navbar';
// import sidebar from './components/Sidebar';
import axios from 'axios';
// import Vue from 'vue';
// Vue.component("navbar", navbar);
// Vue.component("sidebar", sidebar);
// import bus from '@/bus'
export default {
  data () {
    return {
      // isShow: true
    }
  },
  methods:{
    
  },
  // beforeMount () {
  //   bus.$on('maizuo', (data) => {
  //     this.isShow = data
  //   })
  // },
  mounted(){
    axios({
      url: '/ajax/movieOnInfoList?token='
    }).then(res => {
      console.log(res.data)
    })
  },
  components:{
    tabbar
  },
  // computed: {
  //   isShow () {
  //     return this.$store.state.isTabbarShow
  //   }
  // }
  computed: {
    ...mapState(['isTabbarShow']) // ES6展开合并运算符
  }
}
</script>

<style lang="scss">
* { margin: 0; padding: 0; box-sizing: border-box;}
  li {
    list-style: none;
  }
</style>

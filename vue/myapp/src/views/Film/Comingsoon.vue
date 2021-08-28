<template>
  <div>
    <ul>
      <li v-for="data in $store.state.comingList" :key="data.filmId" @click="handleChangePage(data.isPresale, data.filmId)">
        <img :src="data.poster" alt="">
        <h3>{{data.name}}</h3>
        <p>观众评分:{{data.grade || '暂无评分'}}</p>
        <p>主演:{{data.actors | actorfilter}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
  mounted() {
    if (this.$store.state.comingList.length === 0) {
      this.$store.dispatch('getComingListAction')
    } else {
      console.log('使用缓存数据')
    }
  },
  methods: {
    handleChangePage (data, id) {
      if (!data) {
        MessageBox({
          title: '提示',
          message: '没有排期，看看其他电影吧',
          showCancelButton: true
        }).then(res => {
          if (res === 'confirm') {
            this.$router.push('/film')
          }
        })
      }

      this.$router.push({ name: 'kerwindetail', params: { id: id } })
    }
  }
}
</script>

<style lang="scss" scoped>
img {max-width: 210px; max-height: 300px;}
div { margin-bottom: 30px;}
ul {
  li {
    overflow: hidden;
    margin: 10px;
    img {
      float: left;
      width: 100px;
    }
    p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>

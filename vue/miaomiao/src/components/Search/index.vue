<template>
  <div class="search_body">
    <div class="search_input">
      <div class="search_input_wrapper">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" v-model="kw" placeholder="在此输入..." ref="getFocus">
      </div>
    </div>
    <div class="search_result">
      <h3>电影/电视/综艺</h3>
      <ul  v-if="movies.length">
        <li v-for="movie in movies" :key="movie.id">
          <div class="img">
            <img :src="movie.img | setWH('90.120')" alt="">
          </div>
          <div class="info">
            <p><span>{{movie.nm}}</span><span>{{movie.sc}}</span></p>
            <p>{{movie.enm}}</p>
            <p>{{movie.cat}}</p>
            <p>{{movie.rt}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      kw: '',
      movies: []
    }
  },
  methods: {
    cancelRequest () {
      if(typeof this.source === 'function'){
        this.source('终止请求')
      }
    }
  },
  watch: {
    kw (kw) {
      var that = this
      this.cancelRequest()
      
      this.axios.get(`/ajax/search?kw=${kw}&cityId=59&stype=-1`, {
        cancelToken: new this.axios.CancelToken(function(c){
          that.source = c
        })
      }).then(res => {
        console.log(res.data)
        if(res.data.movies){
          this.movies = res.data.movies.list
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.search_body {
  .search_input {
    background-color: rgba(165, 156, 156, 0.2);
    .search_input_wrapper {
      width: 100%;
      padding: 1px 2px 2px 2px;
      input {
        padding: 5px 10px;
        font-size: 20px;
        width: 100%;
        outline: none;
        border: none;
        border-radius: 2px;
      }
      i {
        position: absolute;
        top: 5px;
        right: 8px;
        font-size: 24px;
      }
    }
  }
  .search_result {
    h3 {
      padding: 10px 15px;
      color: #505050;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
    ul {
      li {
        padding: 10px 15px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        display: flex;
        .img {
          img {
            width: 90px;
            height: 120px;
          }
        }
        .info {
          p {
            line-height: 30px;
            width: 295px;
            padding: 0 2px 0 12px;
          }
          p:first-child {
            display: flex;
            justify-content: space-between;
            font-size: 20px;
          }
          span:first-child {
            font-weight: bold;
          }
          span:last-child {
            color: orange;
          }
        }
      }
    }
  }
}
</style>

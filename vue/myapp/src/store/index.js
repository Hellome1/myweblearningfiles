import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { HIDE_TABBAR_MUTATION, SHOW_TABBAR_MUTATION } from '../type/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTabbarShow: true,
    comingList: [],
    nowPlayingList: []
  },
  mutations: {
    [HIDE_TABBAR_MUTATION](state, data) {
      state.isTabbarShow = data
    },
    [SHOW_TABBAR_MUTATION](state, data) {
      state.isTabbarShow = data
    },
    comingListMutation(state, data) {
      state.comingList = data
    },
    nowPlayingListMutation(state, data) {
      state.nowPlayingList = data
    }
  },
  actions: {
    getComingListAction(store) {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=9956508',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615359311169573898780673"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        // console.log(res.data)
        store.commit('comingListMutation', res.data.data.films)
      })
    },
    getNowPlayingListAction(store) {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=1905254',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1615359311169573898780673"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        store.commit('nowPlayingListMutation', res.data.data.films)
      })
    },
    addNowPlayingListAction(store) {
      
    }
  },
  modules: {
  }
})

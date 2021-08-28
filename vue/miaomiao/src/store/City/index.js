const state = {
  nm: '北京',
  cityId: 110100
}

const actions = {

}

const mutations = {
  CITY_INFO(state, payload) {
    state.nm = payload.nm
    state.cityId = payload.cityId
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
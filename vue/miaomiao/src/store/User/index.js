const state = {
  name: window.localStorage.getItem('name') || '',
  isAdmin: window.localStorage.getItem('isAdmin') || false,
  userHead: ''
}

const actions = {

}

const mutations = {
  USER_NAME(state, payload) {
    if (payload.name) {
      state.name = payload.name
    }
    if (payload.isAdmin) {
      state.isAdmin = payload.isAdmin
    } else {
      state.isAdmin = false
    }
    if (payload.userHead) {
      state.userHead = payload.userHead
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
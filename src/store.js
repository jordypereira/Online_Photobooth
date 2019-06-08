import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    googleUser: {}
  },
  mutations: {
    SET_GOOGLE_USER(state, payload) {
      state.googleUser = payload
    }
  },
  actions: {

  }
})

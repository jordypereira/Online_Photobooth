import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    googleUser: localStorage.getItem('googleUser') ? JSON.parse(localStorage.getItem('googleUser')) : {},
    selectedAlbum: localStorage.getItem('selectedAlbum') ? JSON.parse(localStorage.getItem('selectedAlbum')) : {},
  },
  mutations: {
    SET_GOOGLE_USER(state, payload) {
      state.googleUser = payload
      localStorage.setItem('googleUser', JSON.stringify(payload))
    },
    SET_SELECTED_ALBUM(state, payload) {
      state.selectedAlbum = payload
      localStorage.setItem('selectedAlbum', JSON.stringify(payload))
    },
  },
  actions: {

  }
})

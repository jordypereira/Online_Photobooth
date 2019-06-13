import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function getStorageItem(item, defaultValue) {
  return  localStorage.getItem(item) ? JSON.parse(localStorage.getItem(item)) : defaultValue;
}

export default new Vuex.Store({
  state: {
    googleUser: getStorageItem('googleUser', {}),
    selectedAlbum: getStorageItem('selectedAlbum', {}),
    settings: getStorageItem('settings' , {})
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
    settings(state, payload) {
      state.frames = payload
      localStorage.setItem('settings', JSON.stringify(payload))
    },
  },
  actions: {

  }
})

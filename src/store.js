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
    camera: getStorageItem('camera', ''),
    ffmpeg: getStorageItem('ffmpeg' , ''),
    frames: getStorageItem('frames' , []),
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
    SET_CAMERA(state, payload) {
      state.camera = payload
      localStorage.setItem('camera', JSON.stringify(payload))
    },
    SET_FFMPEG(state, payload) {
      state.ffmpeg = payload
      localStorage.setItem('ffmpeg', JSON.stringify(payload))
    },
    SET_FRAMES(state, payload) {
      state.frames = payload
      localStorage.setItem('frames', JSON.stringify(payload))
    },
  },
  actions: {

  }
})

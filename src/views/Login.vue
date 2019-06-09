<template>
  <div class="flex justify-center items-center mt-24">
    <GoogleLogin
      class="bg-indigo-500 hover:bg-indigo-300 text-white p-4"
      :params="params"
      :onSuccess="onSuccess"
      :onFailure="onFailure"
    >Login</GoogleLogin>
  </div>
</template>

<script>
import GoogleLogin from 'vue-google-login';

export default {
  name: 'login',
  components: {
      GoogleLogin,
  },
  data() {
    return {
        params: {
            client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID,
            scope:"profile https://www.googleapis.com/auth/photoslibrary https://www.googleapis.com/auth/photoslibrary.sharing"
        }
    }
  },
  methods: {
    onSuccess(googleUser) {
      this.$store.commit('SET_GOOGLE_USER', googleUser)
      this.$router.push('album')
    },
    onFailure(googleUser) {
      console.log(googleUser);
    }
  }
}
</script>


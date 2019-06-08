<template>
  <div class="flex justify-center items-center mt-24">
    <BaseButton>
      <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure">Login</GoogleLogin>
    </BaseButton>
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


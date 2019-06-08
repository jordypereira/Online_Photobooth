<template>
  <div>
    <BaseHeading>Choose or create an album</BaseHeading>
    <div>
      <ul>
        <li v-for="album in albums" :key="album.id">{{ album.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Album',
  data() {
    return {
      albums: []
    }
  },
  mounted() {
    this.fetchAlbums();
  },
  methods: {
    async fetchAlbums() {
      try {
          console.log("TCL: fetchAlbums -> this.$store.state.googleUser.Zi.accessToken", this.$store.state.googleUser.Zi.access_token)
        const resp = await axios.get('https://photoslibrary.googleapis.com/v1/sharedAlbums', {
          headers: {
            Authorization: `Bearer ${this.$store.state.googleUser.Zi.access_token}`,
          },
        });

        console.log(resp);

        this.albums = resp.data.sharedAlbums;
      } catch (error) {
        console.log(error);

        if (error.response && error.response.status === 401) {
          this.$router.push('/login');
        }
      }
    }
  }
}
</script>

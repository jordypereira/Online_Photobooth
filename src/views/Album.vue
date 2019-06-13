<template>
  <div>
    <div class="flex justify-around mt-4">
      <BaseButton @click="$router.go(-1)">Back</BaseButton>
      <BaseButton @click="$router.push('/start')">Continue</BaseButton>
    </div>
    <BaseHeading>Choose or create an album</BaseHeading>
    <div class="flex justify-center mb-4">
      <span class="mr-4 self-center">New Album</span>
      <BaseTextInput v-model="newAlbum" class/>
      <BaseButton @click="createAlbum">Create</BaseButton>
    </div>
    <div>
      <ul class="text-center">
        <li
          v-for="album in albums"
          :key="album.id"
          class="hover:text-blue-700 cursor-pointer"
          @click="setSelectedAlbum(album)"
        >{{ album.title }}</li>
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
      albums: [],
      newAlbum: ''
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
    },
    setSelectedAlbum(album) {
      this.$store.commit('SET_SELECTED_ALBUM', album);
    },
    async createAlbum() {
    const {newAlbum} = this;
    const accessToken = this.$store.state.googleUser.Zi.access_token;
    console.log("TCL: createAlbum -> accessToken", accessToken)
    let newAlbumResponse;

    // CREATE ALBUM
    try {
      newAlbumResponse = await axios({
        method: 'POST',
        url: 'https://photoslibrary.googleapis.com/v1/albums',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-type': 'application/json',
        },
        data: {
          album: { title: newAlbum },
        },
      });
      console.log(newAlbumResponse);
    } catch (error) {
      console.log('Creating album went wrong');
      console.log(error.response);
    }

    // SHARE ALBUM
    try {
      const shareAlbumResponse = await axios({
        method: 'POST',
        url: `https://photoslibrary.googleapis.com/v1/albums/${newAlbumResponse.data.id}:share`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-type': 'application/json',
        },
        data: {
          sharedAlbumOptions: {
            isCollaborative: 'false',
            isCommentable: 'false',
          },
        },
      });

      console.log(shareAlbumResponse);
      const selectedAlbum = {
        ...newAlbumResponse.data,
        ...shareAlbumResponse.data,
      };
      console.log(selectedAlbum);

      this.setSelectedAlbum(selectedAlbum);

      this.$router.push('/start');
    } catch (error) {
      console.log('Sharing album went wrong');
      console.log(error);
    }

    return true;
  }
  }
}
</script>

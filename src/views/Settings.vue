<template>
  <div>
    <BaseHeading>Settings</BaseHeading>
    <div class="text-center">
      <div class="flex flex-col">
        <BaseHeading :level="3">Camera</BaseHeading>
        <div>
          <BaseButton class="mr-4" @click="camera = 'localhost'">Local</BaseButton>
          <BaseButton class="mr-4" @click="camera = 'webcam'">Webcam</BaseButton>
          <BaseTextInput type="text" placeholder="192.168.0.104" v-model="camera"/>
        </div>
      </div>
      <div class="flex flex-col">
        <BaseHeading :level="3">Frames</BaseHeading>
        <div>
          <ul>
            <li v-for="(file) in frames" :key="file.id">
              <span>{{file.name}}</span>
              <span v-if="file.error">{{file.error}}</span>
              <span v-else-if="file.success">success</span>
              <span v-else-if="file.active">active</span>
              <span v-else-if="file.active">active</span>
              <span v-else></span>
            </li>
          </ul>
          <file-upload
            class="bg-indigo-500 hover:bg-indigo-300 text-white p-4"
            post-action="/upload/post"
            extensions="gif,jpg,jpeg,png,webp"
            accept="image/png, image/gif, image/jpeg, image/webp"
            :multiple="true"
            :size="1024 * 1024 * 10"
            v-model="frames"
            @input-filter="inputFilter"
            @input-file="inputFile"
            ref="upload"
          >
            <i class="fa fa-plus"></i>
            Select files
          </file-upload>
        </div>
      </div>
      <div class="flex flex-col">
        <BaseHeading :level="3">FFMPEG</BaseHeading>
        <div>
          <BaseButton class="mr-4" @click="ffmpeg = 'online'">Use online server</BaseButton>
          <BaseTextInput v-model="ffmpeg" type="text" placeholder="192.168.0.104"/>
        </div>
      </div>
      <div class="flex flex-col">
        <BaseHeading :level="3">Formats</BaseHeading>
        <label>
          Single pictures
          <input type="checkbox" name="single" v-model="format.single">
        </label>

        <label>
          Gif
          <input type="checkbox" name="gif" v-model="showGif">
        </label>
      </div>
    </div>
    <div class="flex justify-around">
      <BaseButton @click="$router.go(-1)">Back</BaseButton>
      <BaseButton @click="save">Continue</BaseButton>
    </div>
  </div>
</template>

<script>
import FileUpload from 'vue-upload-component'

export default {
  data() {
    return {
      ffmpeg: '',
      camera: '',
      frames: [],
      format: {
        gif: 0,
        single: false,
      },
      showGif: false,
    }
  },
  components: {
    FileUpload
  },
  methods: {
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent()
        }
        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent()
        }
      }
    },
    inputFile(newFile, oldFile) {
      if (newFile && !oldFile) {
        // add
        console.log('add', newFile)
      }
      if (newFile && oldFile) {
        // update
        console.log('update', newFile)
      }
      if (!newFile && oldFile) {
        // remove
        console.log('remove', oldFile)
      }
    },
    async save() {
      this.$store.commit('SET_CAMERA', this.camera)
      this.$store.commit('SET_FFMPEG', this.ffmpeg)
      this.$store.commit('SET_FRAMES', this.frames)
      this.$router.push('/login')
    }
  }
}
</script>

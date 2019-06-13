<template>
  <div>
    <div class="flex justify-around mt-4">
      <BaseButton @click="$router.go(-1)">Back</BaseButton>
      <BaseButton @click="save">Continue</BaseButton>
    </div>
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
        <div>
          <BaseButton
            :activated="format.single"
            @click="format.single = !format.single"
            class="mr-4"
          >Activate Single Pictures</BaseButton>

          <BaseButton :activated="showGif" @click="showGif = !showGif">Activate Gifs</BaseButton>
          <input
            v-if="showGif"
            v-model="format.gif"
            type="number"
            class="ml-4 w-20 p-2 border border-indigo-500"
          >
        </div>
      </div>
      <div class="flex flex-col items-center">
        <BaseHeading :level="3">Filters</BaseHeading>
        <div>
          <BaseButton :activated="showFilters" @click="showFilters = !showFilters">Activate Filters</BaseButton>
        </div>
        <div v-if="showFilters" class="flex flex-wrap justify-center" style="max-width: 60vw;">
          <BaseButton
            class="m-4"
            v-for="filter in availableFilters"
            :key="filter"
            @click="addFilter(filter)"
            :activated="filters.includes(filter)"
          >{{filter}}</BaseButton>
        </div>
      </div>
      <div class="flex justify-around">
        <BaseButton @click="$router.go(-1)">Back</BaseButton>
        <BaseButton @click="save">Continue</BaseButton>
      </div>
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
      availableFilters: [
        'normal',	'clarendon',	'gingham',	'moon',	'lark',	'reyes',
'juno',	'slumber',	'crema',	'ludwig',	'aden',	'perpetua',
'amaro',	'mayfair',	'rise',	'hudson',	'valencia',	'xpro2',
'sierra',	'willow',	'lofi',	'inkwell', 'hefe',	'nashville',
'stinson',	'vesper',	'earlybird', 'brannan',	'sutro',	'toaster',
'walden',	'1977',	'kelvin',	'maven',	'ginza',	'skyline',
'dogpatch',	'brooklyn',	'helena',	'ashby',	'charmes',
      ],
      showFilters: false,
      filters: []
    }
  },
  components: {
    FileUpload
  },
  mounted() {
    const settings = this.$store.state.settings;
    this.camera = settings.camera || '';
    this.ffmpeg = settings.ffmpeg || '';
    this.showFilters = settings.filters.length > 0 ? true : false;
    this.filters = settings.filters || [];
    this.frames = settings.frames || [];
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
      this.$store.commit('settings', {
        camera: this.camera,
        ffmpeg: this.ffmpeg,
        format: {
          'single': this.format.single,
          'gif': showGif ? this.format.gif : false
          },
        filters: this.showFilters ? this.filters : false,
        frames: this.frames.length > 0 ? this.frames : false
      })
      this.$router.push('/login')
    },
    addFilter(filter) {
      if(this.filters.includes(filter)) {
        this.filters = this.filters.filter(item => item !== filter)
      } else {
        this.filters = [...this.filters, filter]
      }
    }
  }
}
</script>



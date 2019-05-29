<template>
  <div>
    <div class="mx-1 my-3">
      <b-form-file v-model="directory"
                 directory
                 placeholder="Choose a output file..."
                 no-drop></b-form-file>
    </div>
    <div class="mx-1 my-3">
      <b-form-input v-model="name" placeholder="Enter file name..."></b-form-input>
    </div>
    <div class="mx-3" v-if="print" id="print">{{ print }}</div>
    <div class="mx-1">
      <b-button block variant="info" @click="work">Go!!!</b-button>
    </div>
    <b-alert show>{{ options }}</b-alert>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { execFile } from 'child_process'

export default {
  data () {
    return {
      directory: null,
      name: null,
      print: null
    }
  },
  methods: {
    work: function () {
      if (!this.name || !this.directory) {
        alert('Name or/and Path is empty!!!')
      }
      this.$store.dispatch('_global/updateOutputFile', this.outputFile)
      var ffmpegPath = process.env.NODE_ENV !== 'development' ? `${global.__static}/ffmpeg` : 'static/ffmpeg'
      const ffmpeg = execFile(
        ffmpegPath,
        this.options
        // ['-hide_banner', '-i', this.$store.state._global.inputFile.path.trim().replace(/\s+/g, '\\ '), this.outputFile.trim().replace(/\s+/g, '\\ ')]
      )
      ffmpeg.stderr.on('data', (data) => {
        console.log(data)
        this.print = data
      })
      ffmpeg.stdout.on('data', (data) => {
        console.log(data)
        this.print = data
      })
      ffmpeg.on('close', () => console.log(ffmpeg))
    }
  },
  computed: {
    outputFile: function () {
      return this.directory.path + '/' + this.name
    },
    options: function () {
      if (!this.name || !this.directory) {
        return 'no output file'
      }
      var _options = this.$store.state._global.options
      if (!_options) {
        return 'no options'
      }
      var _optionsParse = _options.globalOptions.concat(_options.inputOptions, ['-i', this.$store.state._global.inputFile.path], _options.outputOptions, [this.outputFile.trim().replace(/\s+/g, '\\ ')])
      return _optionsParse
    }
  },
  watch: {}
}
</script>

<style>
#print {
font-size: 0.8rem
}
</style>


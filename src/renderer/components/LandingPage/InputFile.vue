<template>
  <div>
    <div class="mx-1 my-3">
      <b-form-file v-model="file"
                 placeholder="选择或拖入一个文件..."
                 drop-placeholder="拖到这里..."></b-form-file>
    </div>
    <b-alert show v-if="showerror!='no error'">{{ showerror }}</b-alert>
    <div v-if="info">
      <div class="mt-2">
        <b-button v-b-toggle.collapse-1
                  variant="info"
                  class="m-1">封装信息</b-button>
        <b-collapse visible id="collapse-1">
          <b-card class="mx-1">
            <li v-for="(value, key) in info.format" :key="key.id">
              {{key}}: {{value}}
            </li>
          </b-card>
        </b-collapse>
      </div>
      <div class="mt-2">
        <b-button v-b-toggle.collapse-2
                  variant="info"
                  class="m-1">流信息</b-button>
        <b-collapse id="collapse-2">
          <b-card class="mx-1" v-for="stream in info.streams" :key="stream.id">
            <li v-for="(value, key) in stream" :key="key.id">
              {{key}}: {{value}}
            </li>
          </b-card>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { execSync, execFileSync } from 'child_process'
import path from 'path'
import { platform, arch } from 'os'
export default {
  data () {
    return {
      file: this.$store.state._global.inputFile,
      info: this.$store.state._global.inputFileInfo,
      showerror: 'no error'
    }
  },
  methods: {},
  computed: {},
  watch: {
    file: function () {
      if (!this.file) return
      this.$store.dispatch('_global/updateInputFile', this.file)
      console.log(this.file.path)
      var ffprobePath = process.env.NODE_ENV !== 'development' ? `${global.__static}/ffprobe` : 'static/ffprobe'
      ffprobePath += process.platform === 'win32' ? '.exe' : ''
      var inputFileName = process.platform === 'win32' ? this.file.path.trim() : this.file.path.trim().replace(/\s+/g, '\\ ')
      try {
        this.info = JSON.parse(
          execFileSync(
            ffprobePath,
            [inputFileName, '-print_format', 'json', '-show_format', '-show_streams', '-v', '0'],
            { encoding: 'utf-8' }
          )
        )
      } catch (error) {
        this.showerror = error
        alert(error)
      }

      this.inputFileInfo = this.info
      this.$store.dispatch('_global/updateInputFileInfo', this.info)
    }
  }
}
</script>

<style>
.card li {
  font-size: 0.8rem;
}
.custom-file-label {
  word-break: keep-all;
  white-space: nowrap;
  overflow: auto;
  text-overflow: ellipsis;
}

</style>


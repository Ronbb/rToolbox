<template>
  <div>
    <b-form-file v-model="file"
                 :state="Boolean(file)"
                 placeholder="Choose a input file..."
                 drop-placeholder="Drop input file here..."></b-form-file>
    <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
    <div v-if="inputFileInfo">
      <div class="m-2">
        <b-button visible v-b-toggle.collapse-1
                  class="m-1">Format</b-button>
        <b-collapse id="collapse-1">
          <b-card>
            <li v-for="(value, key) in inputFileInfo.format" :key="key.id">
              {{key}}: {{value}}
            </li>
          </b-card>
        </b-collapse>
      </div>
      <div class="m-2">
        <b-button visible v-b-toggle.collapse-2
                  class="m-1">Stream</b-button>
        <b-collapse id="collapse-2">
          <b-card v-for="stream in inputFileInfo.streams" :key="stream.id">
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
import Global_ from '@/components/Utils/Global_'
import { execSync } from 'child_process'
export default {
  data () {
    return {
      file: null,
      inputFileInfo: null
    }
  },
  methods: {},
  computed: {},
  watch: {
    file: function () {
      if (!this.file) return
      Global_.InputFile = this.file
      console.log(this.file.path)
      var info = JSON.parse(
        execSync(
          `static/ffprobe ${this.file.path} -print_format json -show_format -show_streams -v 0 `,
          { encoding: 'utf-8' }
        )
      )
      console.log(info)
      this.inputFileInfo = info
      for (const key in info.format) {
        if (info.format.hasOwnProperty(key)) {
          const element = info.format[key]
          console.log(key)
          console.log(element)
        }
      }
    }
  }
}
</script>

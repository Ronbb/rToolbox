<template>
  <div>
    <div class="mx-1 my-3">
      <b-form-file v-model="file"
                 placeholder="Choose a input file..."
                 drop-placeholder="Drop input file here..."></b-form-file>
    </div>
    <div v-if="info">
      <div class="mt-2">
        <b-button v-b-toggle.collapse-1
                  variant="info"
                  class="m-1">Format</b-button>
        <b-collapse visible id="collapse-1">
          <b-card>
            <li v-for="(value, key) in info.format" :key="key.id">
              {{key}}: {{value}}
            </li>
          </b-card>
        </b-collapse>
      </div>
      <div class="mt-2">
        <b-button v-b-toggle.collapse-2
                  variant="info"
                  class="m-1">Stream</b-button>
        <b-collapse id="collapse-2">
          <b-card v-for="stream in info.streams" :key="stream.id">
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
import { execSync } from 'child_process'
export default {
  data () {
    return {
      file: null,
      info: null
    }
  },
  methods: {},
  computed: {},
  watch: {
    file: function () {
      if (!this.file) return
      this.$store.dispatch('_global/updateInputFile', this.file)
      console.log(this.file.path)
      this.info = JSON.parse(
        execSync(
          `static/ffprobe ${this.file.path} -print_format json -show_format -show_streams -v 0 `,
          { encoding: 'utf-8' }
        )
      )
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


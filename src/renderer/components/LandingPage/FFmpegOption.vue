<template>
  <div>
    <div class="mt-2">
        <b-form @submit="onSubmit" @reset="onReset" v-if="inputFileInfo">
        <div>
          <b-button v-b-toggle.collapse-3
                    variant="info"
                    class="m-1">GlobalOpt</b-button>
          <b-collapse id="collapse-3">
            <b-card>
              <b-form-textarea 
                  id = "input-global-options"
                  no-resize
                  readonly
                  plaintext 
                  :value="JSON.stringify(ffmpegOptions.globalOptions).replace(/\:null/g,'')"></b-form-textarea > 
            </b-card>
          </b-collapse>
        </div>
        <div>
          <b-button v-b-toggle.collapse-4
                    variant="info"
                    class="m-1">InputOpt</b-button>
          <b-collapse id="collapse-4">
            <b-card>

            </b-card>
          </b-collapse>
        </div>
        <div>
          <b-button v-b-toggle.collapse-5
                    variant="info"
                    class="m-1">OutputOpt</b-button>
          <b-collapse id="collapse-5">
            <b-card>

            </b-card>
          </b-collapse>
        </div>
        </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // inputFileInfo: null,
      ffmpegOptions: this.$store.state._global.ffmpegOptions
    }
  },
  methods: {
    onSubmit () {},
    onReset () {}
  },
  computed: {
    inputFileInfo () {
      console.log(this.$store.state._global.inputFileInfo)
      return this.$store.state._global.inputFileInfo
    }
  },
  watch: {}
}
</script>

<style>
li {
  font-size: 0.8rem;
}
</style>


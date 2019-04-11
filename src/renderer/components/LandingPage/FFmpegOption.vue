<template>
  <div>
    <div class="mt-2">
      <div v-if="inputFileInfo">
        <b-button v-b-toggle.collapse-3
                  variant="info"
                  class="m-1">Format</b-button>
        <b-collapse id="collapse-3">
          <b-card>

          </b-card>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // inputFileInfo: null,
      ffmpegOption: null
    }
  },
  methods: {},
  computed: {
    inputFileInfo () {
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


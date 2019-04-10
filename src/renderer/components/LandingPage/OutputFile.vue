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
    <div class="mx-1">
      <b-button block variant="info" @click="work">Go!!!</b-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { execSync } from 'child_process'

export default {
  data () {
    return {
      directory: null,
      name: null
    }
  },
  methods: {
    work: function () {
      if (!this.name || !this.directory) {
        alert('Name or/and Path is empty!!!')
      }
      this.$store.dispatch('_global/updateOutputFile', this.outputFile)
    }
  },
  computed: {
    outputFile: function () {
      return this.directory.path + '/' + this.name
    }
  },
  watch: {}
}
</script>

<style>


</style>


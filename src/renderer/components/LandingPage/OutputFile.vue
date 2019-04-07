<template>
  <div>
    <div class="mx-1 my-3">
      <b-form-file v-model="path"
                 directory="true"
                 placeholder="Choose a output file..."
                 no-drop></b-form-file>
    </div>
    <div class="mx-1 my-3">
      <b-form-input v-model="name" placeholder="Enter file name..."></b-form-input>
    </div>
    <div class="mx-1">
      <b-button block variant="info">Go!!!</b-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { execSync } from 'child_process'
export default {
  data () {
    return {
      path: null,
      name: null
    }
  },
  methods: {},
  computed: {},
  watch: {}
}
</script>

<style>


</style>


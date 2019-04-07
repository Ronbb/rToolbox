<template>
  <b-container fluid>
    <b-row class="mt-4"> 
      <b-col>
        <b-card border-variant="info" title="Input">
          <input-file></input-file>
        </b-card>
      </b-col>
      <b-col>

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import Global_ from './Utils/Global_.vue'
import InputFile from './LandingPage/InputFile'

export default {
  name: 'landing-page',
  components: { InputFile },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    }
  },
  data () {
    return {
      file: null
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
}


</style>

<template>
  <div id="wrapper">
    <main>
      <input-file></input-file>

      <p>OK</p>
    </main>
  </div>
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

#wrapper {
  height: 100vh;
  padding: 60px 80px;
  width: 100vw;
}

main {
  display: flex;
  justify-content: space-between;
}

main > div {
  flex-basis: 50%;
}
</style>

<template>
  <b-container fluid>
    <b-row class="my-4 mx-1"> 
      <b-col>
        <b-card border-variant="info" title="输入">
          <input-file></input-file>
        </b-card>
      </b-col>
      <b-col>
        <b-card  border-variant="info" title="参数">
          <ffmpeg-option></ffmpeg-option>
        </b-card>
        <b-card  border-variant="info" class="mt-4" title="输出">
          <output-file></output-file>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import Global_ from './Utils/Global_.vue'
import InputFile from './LandingPage/InputFile'
import FfmpegOption from './LandingPage/FFmpegOption'
import OutputFile from './LandingPage/OutputFile'

export default {
  name: 'landing-page',
  components: {
    InputFile,
    FfmpegOption,
    OutputFile
  },
  methods: {},
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

* {
  font-family: 'Source Sans Pro', sans-serif;
  background-color: white;
}


</style>

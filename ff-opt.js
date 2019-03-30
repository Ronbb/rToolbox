// / <reference path="./typings/index.d.ts" />

var inputFile = ''
var OutputFile = ''

var globalOptions = []
var inputOptions = []
var outputOptions = []

var ffmpegOptions = []
var ffmpegOptionsString = ''

// test & default
inputFile = '/Users/ronbb/Desktop/233.mp4'
// outputFile = '/Users/ronbb/Desktop/234.mp4'
globalOptions = {
  '-y': '',
  '-hide_banner': '',
  //'-loglevel': 'panic',
  //'-stats': ''
}
inputOptions = {
  '-ss': 5,
  '-t': 3
}
outputOptions = {
  '-crf': 23
}

// ffmpeg [global_options] {[input_file_options] -i input_url} ... {[output_file_options] output_url} ...
parseOption = function () {
  for (const key in globalOptions) {
    if (globalOptions.hasOwnProperty(key)) {
      const element = globalOptions[key]
      ffmpegOptions.push(key)
      if (element) {
        ffmpegOptions.push(element)
      }
    }
  }
  for (const key in inputOptions) {
    if (inputOptions.hasOwnProperty(key)) {
      const element = inputOptions[key]
      ffmpegOptions.push(key)
      if (element) {
        ffmpegOptions.push(element)
      }
    }
  }

  ffmpegOptions.push('-i')
  ffmpegOptions.push(inputFile)

  for (const key in outputOptions) {
    if (outputOptions.hasOwnProperty(key)) {
      const element = outputOptions[key]
      ffmpegOptions.push(key)
      if (element) {
        ffmpegOptions.push(element)
      }
    }
  }

  ffmpegOptions.push(outputFile)
}

getOptionString = function(){
    var str = ''
    for (const iterator of ffmpegOptions) {
      str += iterator
      str += ' '
    }
    console.log(str)
    ffmpegOptionsString = str
}


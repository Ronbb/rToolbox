// / <reference path="./typings/index.d.ts" />

const os = require('os')
const {spawn} = require('child_process')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path.replace('app.asar', 'app.asar.unpacked');

start = function () {
  parseOption()
  console.log(ffmpegPath)
  var text =''
  ff = spawn(ffmpegPath, ffmpegOptions)
  area = document.getElementById('print')
  ff.stdout.on('data', (data) => {
      text += data 
    area.innerText = text
  })
  ff.stderr.on('data', (data) => {
    text += data 
    area.innerText = text
  })

  ff.on('close', (code) => {
    alert(`${code}`)
  })
}

$(() => {
})

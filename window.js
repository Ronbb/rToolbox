// / <reference path="./typings/index.d.ts" />

const os = require('os')
const {spawn} = require('child_process')

start = function () {
  ff = spawn('ffmpeg', ['-i','/Users/ronbb/screen.png','/Users/ronbb/Desktop/s.png'])
  ff.stdout.on('data', (data) => {
    alert(`${data}`);
  })
  ff.stderr.on('data', (data) => {
    alert(`${data}`);
  });
  
  ff.on('close', (code) => {
    alert(`${code}`);
  });
}

$(() => {

})

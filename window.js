// / <reference path="./typings/index.d.ts" />

const os = require('os')
const {spawn} = require('child_process')

start = function () {
  ff = spawn('ffmpeg', ['-y','-i','/Users/ronbb/Desktop/233.mp4','/Users/ronbb/Desktop/234.mp4'])
  area=document.getElementById('print');
  ff.stdout.on('data', (data) => {
    area.innerText=`${data}`;
  })
  ff.stderr.on('data', (data) => {
    area.innerText=`${data}`;
  });
  
  ff.on('close', (code) => {
    alert(`${code}`);
  });
}

$(() => {

})

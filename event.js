// / <reference path="./typings/index.d.ts" />
const {exec} = require('child_process')

$(document).ready(() => {

  document.getElementById('input-file').addEventListener('drop', (event) => {
    event.preventDefault()
    event.stopPropagation()
    const file = event.dataTransfer.files[0]
    inputFile = file.path
    document.getElementById('input-file-label').innerText = file.name
    document.getElementById('input-file').value = ''
    console.log('Input Path: ' + inputFile)
  })

  document.getElementById('input-file').addEventListener('input', (event) => {
    const file = document.getElementById('input-file').files[0]
    inputFile = file.path
    document.getElementById('input-file-label').innerText = file.name
    document.getElementById('input-file').value = ''
    console.log('Input Path: ' + inputFile)
  })

  document.getElementById('output-file').addEventListener('drop', (event) => {
    event.preventDefault()
    event.stopPropagation()
    const file = event.dataTransfer.files[0]
    outputFile = file.path
    document.getElementById('output-file-label').innerText = file.name
    document.getElementById('output-file').value = ''
    console.log('Output Path: ' + outputFile)
  })

  document.getElementById('output-file').addEventListener('input', (event) => {
    const file = document.getElementById('output-file').files[0]
    outputFile = file.path
    document.getElementById('output-file-label').innerText = file.name
    document.getElementById('output-file').value = ''
    console.log('Output Path: ' + outputFile)
  })

  document.getElementById('start').addEventListener('click', (event) => {
    parseOption()
    getOptionString()
    var text = ''
    var ffmpeg = exec('ffmpeg' + ' ' + ffmpegOptionsString)
    area = document.getElementById('print')
    ffmpeg.stdout.on('data', (data) => {
      text += data
      area.innerText = text
    })
    ffmpeg.stderr.on('data', (data) => {
      text += data
      area.innerText = text
    })

    ffmpeg.on('close', (code) => {
        delete text
        ffmpegCloseNotification = new Notification('FFmpeg finished',{
            body:'Exit with code ' + code
        })
        //alert(`${code}`)
    })
  })
})

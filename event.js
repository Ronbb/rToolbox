$(document).ready(() => {

  document.getElementById('input-file').addEventListener('drop', (event) => {
    event.preventDefault()
    event.stopPropagation()
    const file = event.dataTransfer.files[0]
    inputFile = file.path
    document.getElementById('input-file-label').innerText = file.name
    document.getElementById('input-file').value = ''
    console.log('Input Path: '+inputFile)
  })

  document.getElementById('input-file').addEventListener('input', (event) => {
    const file = document.getElementById('input-file').files[0]
    inputFile = file.path
    document.getElementById('input-file-label').innerText = file.name
    document.getElementById('input-file').value = ''
    console.log('Input Path: '+inputFile)
  })
})

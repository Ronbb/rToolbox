/// <reference path="./typings/index.d.ts" />

const {app,BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let window = null

app.once('ready',()=>{
    window = new BrowserWindow({
        width:500,
        height:800,
        titileBarStyle:'hiddenInset',
        backgroundColor:'#111',
        show:false
    })

    window.loadURL(url.format({
        pathname:path.join(__dirname,'index.html'),
        protocol:'file:',
        slashes:true
    }))

    window.once('ready-to-show',()=>{
        window.show()
    })
})


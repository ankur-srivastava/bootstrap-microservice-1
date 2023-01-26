const express = require('express')
const fs = require('fs')

const app = express()
const port = 3000

app.get('/video', (req, res) => {
    const videoPath = './videos/SampleVideo_1280x720_1mb.mp4'
    fs.stat(videoPath, (err, stats) => {
        if(err) {
            console.error(err)
            res.sendStatus(500)
            return
        }
        res.writeHead(200, {
            "Content-Length": stats.size,
            "Content-Type": "video/mp4"
        })
        fs.createReadStream(videoPath).pipe(res)
    })
})

app.listen(port, () => {
    console.log('server started at port ', port)
})
const express = require('express')
const app  = express()


app.get('/hello', (req, res) => {
    res.send('Hello')
})


app.listen(8080, (req, res) => {
    console.log('Server is running...')
})
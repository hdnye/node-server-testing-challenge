const express = require('express')
const cors = require('cors')

const server = express()

//mw
server.use(express.json())
server.use(cors())
//api get message
server.get('/', (req, res, next) => {
    res.json({
        message: 'Welcome to my API'
    })
})
//err msg
server.use((err, res, req, next) => {
    console.log(err)
    res.json({
        message: 'Unable to complete request'
    })
})
module.exports = server;
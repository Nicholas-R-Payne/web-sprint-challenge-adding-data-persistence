// build your server here and require it from index.js
const express = require('express')

const server = express()

server.use('*', (req, res) => {
    res.json({ api: 'Working' })
})

module.exports = server
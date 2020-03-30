const express     = require('express')
const config      = require('config')
const info        = require('../package.json')
const mountRoutes = require('./routes')

const app = express()
var http = require('http').createServer(app)
var io = require('socket.io')(http)

app.use(express.json())
mountRoutes(app)

const port = config.get('port')

app.get('/', (req, res) => res.send(`${info.name}@${info.version}`))

app.listen(port, () => console.log(`${info.name}@${info.version} running at: ${port}!`))

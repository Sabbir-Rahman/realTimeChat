const http = require('http')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')


// list of all available routes
const userRouter =  require('./routes/user')

const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 3000;

app.use('/', userRouter)

const server = http.createServer(app);
server.listen(port)

server.on('listening', ()=>{
    console.log('listening on port', port)
})
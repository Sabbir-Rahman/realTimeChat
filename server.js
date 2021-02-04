const http = require('http')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express();

app.use(cors());
app.use(morgan('dev'));

const port = 3000;

app.use('/', (req, res, next) => {
    return res.status(200).json({success:true, message: 'Job well done'})
})

const server = http.createServer(app);
server.listen(port)

server.on('listening', ()=>{
    console.log('listening on port', port)
})
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3001

// Middleware parser for the Body
app.use(express.json())

// DB connection
 mongoose.connect('mongodb://admin:admin@localhost:27017/todo?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
 })

 const db = mongoose.connection;
 db.on('error', err => console.log(err));
 db.once('open', () => console.log('connection open'));

// HTTTP METHODS
// GET - Retreive Data
app.get('/', (request, response) => {
    response.send('welCome to the Main app ... 0x0 !!')
})
app.get('/hello', (req, res) => {
    res.send('hello world !!')
})
// POST - Create data
app.post('/create', (request, response) => {
    response.send('created..')
})
// PUT
// DELETE


app.listen(port, () => {
    console.log('started on port 3001')
})
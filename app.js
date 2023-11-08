const express = require('express')

const app = express()


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


app.listen(3001, () => {
    console.log('started on port 3001')
})
const express = require('express')
const mongoose = require('mongoose')
const taskRoutes = require('./routes/taskRoutes')

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

// HTTTP METHODS From The routes Folder
app.use(taskRoutes);


app.listen(port, () => {
    console.log('started on port 3001')
})
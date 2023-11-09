const express = require('express')
const router = express.Router();
const Task = require('../models/task')

// get the tasks list
router.get('/tasks', async (req, res) => {
    try {
        const task = await Task.find()
        res.status(200).json(task)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

// create a new task
router.post('/tasks', async (req, res) =>{
    try {
        const task = new Task(req.body);
        await task.save()
        res.status(201).json({message:'sucessflly saved ..' ,task})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})


module.exports = router;
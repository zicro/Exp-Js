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

// update a task
router.put('/tasks/:id', async (req, res) =>{
    try {
        const {id} = req.params;
        const dataToUpdate = req.body;
        const task = await Task.findByIdAndUpdate(id, dataToUpdate, {new: true});

        res.status(202).json({message:'sucessflly updated ..' ,task})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

// delete a task
router.delete('/tasks/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id)

        res.status(202).json({message:'sucessflly deleted ..' ,task})
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})


module.exports = router;
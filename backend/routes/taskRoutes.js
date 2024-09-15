const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Get tasks for a specific day
router.get('/:date', async (req, res) => {
    try {
        const tasks = await Task.find({ date: req.params.date });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Add a new task
router.post('/', async (req, res) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;

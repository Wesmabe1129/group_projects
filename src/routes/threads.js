// const express = require('express');
import express from 'express';
const router = express.Router();
// const Thread = require('../models/Thread');

// CREATE a new thread
let threads = [];

router.post('/', async (req, res) => {
    try {
        const { title, body } = req.body;
        const newThread = { id: threads.length + 1, title, body };
        threads.unshift(newThread); // Store the new thread in the array
        res.status(201).json(newThread); // Return the new thread in the response
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// READ all threads

router.get('/', async (req, res) => {
    try {
        res.json(threads); // Return the list of stored threads
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// READ a specific thread by ID
router.get('/:id', async (req, res) => {
    try {
        // const thread = await Thread.findByPk(req.params.id);
        // if (!thread) return res.status(404).json({ message: 'Thread not found' });
        res.json({
            message: `You read specific thread where id is ${req.params.id}`
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE a thread
router.delete('/:id', async (req, res) => {
    try {
        // const deleted = await Thread.destroy({ where: { id: req.params.id } });
        // if (!deleted) return res.status(404).json({ message: 'Thread not found' });
        // res.json({ message: 'Thread deleted successfully' });
        if (!req.params.id){
            res.json({
                message: "No indicated thread to delete!"
            })
        }
        res.json({
            message: `Successfully Deleted thread where id is ${req.params.id}`
        })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
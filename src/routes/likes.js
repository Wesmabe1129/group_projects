// const express = require('express');
import express from 'express';
const router = express.Router();
// const Like = require('../models/Like');

// LIKE a thread
router.post('/:threadId/like', async (req, res) => {
    try {
        // const like = await Like.create({ thread_id: req.params.threadId });
        res.status(201).json({
            message: `you like a thread where thread id is ${req.params.threadId}`
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// LIKE a comment
router.post('/comments/:commentId/like', async (req, res) => {
    try {
        // const like = await Like.create({ comment_id: req.params.commentId });
        res.status(201).json({
            message: `You like a comment where comment id is ${req.params.commentId}`
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// module.exports = router;
export default router;


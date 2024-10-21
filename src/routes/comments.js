// const express = require('express');
import express from 'express';
const router = express.Router();
// const Comment = require('../models/Comment.js');


let comments = [];

// CREATE a new comment on a thread
router.post('/:threadId/comments', async (req, res) => {
    try {
        // const { body } = req.body;
        const { threadId, text } = req.body;
        const newComment = { id: comments.length + 1, threadId, text };
        comments.push(newComment);
        // const comment = await Comment.create({ body, thread_id: req.params.threadId });
        res.status(201).json({
            success: 'true',
            message: `Creating a new comment where thread id is ${req.params.threadId}`,
            newComment,
             
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Add a new comment to a thread
router.post('/comments', async (req, res) => {
    try {
        const { threadId, text } = req.body;
        // Here you would typically save the comment to the database
        // Example:
        // const newComment = await Comment.create({ threadId, text });
        
        // For now, return a success message
        res.status(201).json({
            message: `Comment added to thread ${threadId}`,
            data: { threadId, text }
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// READ comments for a specific thread
router.get('/comments/:threadId', async (req, res) => {
    try {
        res.json(comments);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE a comment
router.delete('/comments/:commentId', async (req, res) => {
    try {
        // const deleted = await Comment.destroy({ where: { id: req.params.commentId } });
        // if (!deleted) return res.status(404).json({ message: 'Comment not found' });
        res.json({ message: `Comment deleted successfully where comment id ${req.params.commentId}` });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// module.exports = router;
export default router;


// const express = require('express');
import express from 'express';
const router = express.Router();
// const Share = require('../models/Share.js');

// SHARE a thread
router.post('/:threadId/repost', async (req, res) => {
    try {
        // const share = await Share.create({ thread_id: req.params.threadId });
        res.status(201).json({
            message: `You reposted thread where thread id is ${req.params.threadId}`
        });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// module.exports = router;
export default router;


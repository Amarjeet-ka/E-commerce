// routes/messageRoutes.js
const express = require('express');
const Message = require('../models/messageModel');

const router = express.Router();

// Create a new message
router.post('/messages', async (req, res) => {
  try {
    const { text } = req.body;
    const newMessage = new Message({ text });
    await newMessage.save();
    res.status(201).json({ message: 'Message created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create message' });
  }
});

module.exports = router;

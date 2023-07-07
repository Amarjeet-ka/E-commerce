// routes/messageRoutes.js
const express = require('express');
const Message = require('../models/messageModel');

const router = express.Router();

// Create a new message
// router.post('/postmessages', async (req, res) => {
//   try {
//     const { purchaseId, text } = req.body;
//     const newMessage = new Message({ text, purchaseId });
//     await newMessage.save();
//     res.status(201).json({ message: 'Message created successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to create message' });
//   }
// });
// Create a new message
router.post('/postmessages', async (req, res) => {
  try {
    const { purchaseId, text } = req.body;
    const timestamp = new Date(); // Get the current timestamp

    const newMessage = new Message({ text, purchaseId, timestamp });
    await newMessage.save();

    res.status(201).json({ message: 'Message created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create message' });
  }
});


// Get all messages
router.get('/getmessages', async (req, res) => {
  try {
    const messages = await Message.find().select('-createdAt -updatedAt'); // Exclude createdAt and updatedAt fields
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve messages' });
  }
});

module.exports = router;

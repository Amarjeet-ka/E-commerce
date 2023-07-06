// models/messageModel.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  
  purchaseId: {
    type: String,
    required : true
  },
  text: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;

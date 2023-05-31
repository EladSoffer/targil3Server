const mongoose = require('mongoose');
const User = require('../models/User'); // Update the path to the User model file
const Message = require('../models/Message');

const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  users: {
    type: [User.schema] // Use User.schema to reference the schema of the User model
  },
  messages: {
    type: [Message.schema] // Make sure the Message model is imported correctly as well
  }
});

module.exports = mongoose.model('Chat', ChatSchema);














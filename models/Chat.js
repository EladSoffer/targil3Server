const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id:{
    type: Number,
    unique: true
  },
  username: String,
  displayName: String,
  profilePic: String
});

const MessageSchema = new Schema({
  content: String,
  timestamp: Date,
  sender: UserSchema
});

const ChatSchema = new Schema({
  users: [UserSchema],
  messages: [MessageSchema]
});

module.exports = mongoose.model('Chat', ChatSchema);

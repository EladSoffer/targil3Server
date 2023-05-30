
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Chat  = new Schema({
    id: {
        type: Number
    },
    users: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }]
});
module.exports = mongoose.model('Chat', Chat);

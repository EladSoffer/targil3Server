    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;


    const Message = new Schema({
        created: {
            type: Date,
            default: Date.now
        },
        sender: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        content: {
             type: String
        }
    });

    module.exports = mongoose.model('Message', Message);
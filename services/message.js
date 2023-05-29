const Message = require('../models/Message');

const createMessage = async( content, username) =>{
    const message = new Message({ sender: username, content: content});
    return await message.save();
};

module.exports = {createMessage};
const Message = require('../models/Message');

const createMessage = async( content) =>{
    const message = new Message({ sender: sender, content: content}); ///////////////////how i get the sender???
    return await message.save();
};


module.exports = {createMessage};
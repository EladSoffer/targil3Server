const Chats = require('../models/Chat');


const getOneChat = async (chatId) => {
    try {
        const chat = await Chats.findById(chatId);
        if (!chat) {
            return 1; /// there isn't this chat
        } else {
            return chat;
        }
    } catch (error) {
        throw new Error('Failed to get the chat in mongodb');
    }
};



const deleteChat = async (chatId) => {
  console.log("gg");
  try {
    console.log("gg");
    const deletedChat = await Chats.findByIdAndDelete(chatId);
    if (!deletedChat) {
      return 1; // Chat not found
    }
    console.log("gg");
    return 0;
  } catch (error) {
    throw new Error('Failed to delete the chat in MongoDB');
  }
};

module.exports = { getOneChat, deleteChat};


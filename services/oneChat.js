const Chats = require('../models/Chat');

const deleteChat = async (chatId) => {
  try {
    const deletedChat = await Chats.findByIdAndDelete(chatId);
    if (!deletedChat) {
      return 1; // Chat not found
    }
    // Chat successfully deleted
    return 0;
  } catch (error) {
    throw new Error('Failed to delete the chat in MongoDB');
  }
};

const Chat = require('../models/Chat');

const getChats = async (username) => {
  try {
    const chats = await Chat.find({ users: { $elemMatch: { username: username } } });
    const allChats = [];
    chats.forEach((chat) => {
        const otherUser = chat.users.find((user) => user.username !== username);
        let lastMes = null;
        if(chat.messages.length != 0){
             lastMes = chat.messages[0];
        } 
        const chatData = {
            id: chat.id,
            user: otherUser,
            lastMessage: lastMes
          };
          
          allChats.push(chatData);
    });
    return allChats;
  } catch (error) {
    throw new Error('Failed to get chats in mongodb');
  }

};

module.exports = { getChats };

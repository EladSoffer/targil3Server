const Chat = require('../models/Chat');
const Check = require('../models/UserPassName');
const User = require('../models/User');
const Message = require('../models/Message');

const Chat = require('../models/Chat');
const User = require('../models/User');
const Message = require('../models/Message');
const UserPassName = require('../models/UserPassName');


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
const postChats = async (username,newUser) => {
  const userCount = await Chat.countDocuments();
  const newChatContact = await Check.findOne({username : newUser});
  if (newChatContact === null){
    return -1;
  }
  console.log("pp");
  const me = await Check.findOne({username : username})
  const me2 = new User({
    id: userCount + 100,
    username: me.username,
    displayName: me.displayName,
    profilePic: me.profilePic
  });
  console.log("pp");
  const newChatContact2 = new User({
    id: userCount + 1,
    username: newChatContact.username,
    displayName: newChatContact.displayName,
    profilePic: newChatContact.profilePic
  });
  const msg = [];
  console.log("pp");
  const users = new User[newChatContact2, me2];
  console.log("pp");
  const value = new Chat({users: users ,messages:msg});
  console.log(value);
  console.log(Chat);
  console.log(Chat);
  const A = await value.save();

  //const newChatContact3 = ;
  //console.log(newChatContact2);
  console.log("pp");
  return {id:newChatContact2.id,
          user:newChatContact2};
}



module.exports = { getChats, postChats };

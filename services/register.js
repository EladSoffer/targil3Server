const UserPassName = require('../models/UserPassName');


const createUser = async( username, password, displayName, profilePic) =>{
    const user = new UserPassName({username: username, password: password, displayName: displayName, profilePic: profilePic}); ///////////////////how i get the sender???
    return await user.save();
};


module.exports = {createUser};
const registerService = require('../service/register');


// Check if the user already exists
const existingUser = await UserPassName.findOne({ username: username });
if (existingUser) {
  // User with the same username already exists
  return res.status(409).json({ error: 'Username already taken. Please choose a different username.' });

}

const createUser = async(req, res) => {
    res.sendStatus(200).json(await registerService.createUser(req.body.title)); //////do i need .json twice????
};


module.exports = {createUser};
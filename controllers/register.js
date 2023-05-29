const registerService = require('../service/register');
const UserPassName = require('../models/UserPassName')

const createUser = async (req, res) => {
  const username = req.body.username;

  // Check if the user already exists
  const existingUser = await UserPassName.findOne({ username: username });
  if (existingUser) {
    // User with the same username already exists
    return res.status(409).json({ error: 'Username already taken. Please choose a different username.' });
  }

  const createdUser = await registerService.createUser(req.body.title);
  return res.status(200).json(createdUser);
};

module.exports = { createUser };

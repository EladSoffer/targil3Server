const chatsService = require('../services/chats');

const getChats = async(req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, key);
    try{
    res.json(await chatsService.getChats(data.username));
    } catch{
        res.status(500).json({ error: 'Failed to retrieve mongodb' });
    }
};

module.exports = {getChats};
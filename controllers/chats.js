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
const postChats = async(req, res) =>{
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, key);
    const newUser = req.body.username;
    try{
        const temp = await chatsService.postChats(data.username, newUser);
        if (temp === -1){
            res.status(400).json({ error: 'There no such contact' })
        }
        else{
            res.status(200).json({temp});
        }
        } catch{
            res.status(500).json({ error: 'Failed to retrieve mongodb' });
        }

};


module.exports = {getChats,postChats};
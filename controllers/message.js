const messageService = require('../services/message');

const createMessage = async(req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, key);
    const chatId = req.params.id;
    try{
    const temp = (await messageService.createMessage(req.body.msg, data.username, chatId));
    if(temp === 1){
        res.status(400).json({ error: 'Error there is no chat with this id' });
    } else{
         res.status(200).json({temp});
    }
    } catch{
        res.status(500).json({ error: 'Failed to retrieve mongodb' });
    }
};




module.exports = {createMessage};
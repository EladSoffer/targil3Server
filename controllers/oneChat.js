const oneChatService = require('../services/oneChat');

const deleteChat = async(req, res) =>{
    const chatId = req.params.id;
    try{
        const temp = (await oneChatService.deleteChat(chatId));
        if(temp === 1){
            res.status(400).json({ error: 'Error there is no chat with this id' });
        } else{
             res.status(200);
        }
        } catch{
            res.status(500).json({ error: 'Failed to retrieve mongodb' });
        }

};

module.exports = {deleteChat};
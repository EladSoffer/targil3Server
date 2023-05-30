const messageService = require('../services/message');

const createMessage = async(req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, key);
    res.json(await messageService.createMessage(req.body.msg, data.username));
};


module.exports = {createMessage};
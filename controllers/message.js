const messageService = require('../service/message');

const createMessage = async(req, res) => {
    res.json(await messageService.createMessage(req.body.title));
};


module.exports = {createMessage};
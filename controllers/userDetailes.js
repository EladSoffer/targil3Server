const userDetailesService = require('../service/userDetails');

const getDetailes = async(req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const data = jwt.verify(token, key);
    res.json(await userDetailesService.getDetailes(data.username));
};

module.exports = {getDetailes};
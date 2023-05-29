const messageControllers = require('../controllers/message');
const express = require('express');
var router = express.Router();

router.route('/').post(messageControllers.createMessage);

module.exports = router;
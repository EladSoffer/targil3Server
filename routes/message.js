const messageControllers = require('../service/message');
const express = require('express');
var router = express.Router();

router.route('/')
       .post(messageControllers.craeteMessage);

module.exports = router;
const { isLoggedIn } = require('../controllers/login');
const oneChatControllers = require('../controllers/oneChat');
const express = require('express');
var router = express.Router();

router.get('/',isLoggedIn,oneChatControllers.getOneChat);

module.exports = router;
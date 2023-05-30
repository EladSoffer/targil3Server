
import { isLoggedIn }  from '../controllers/login.js'
const chatsControllers = require('../controllers/chats');
const express = require('express');
var router = express.Router();

router.get('/',isLoggedIn,chatsControllers.getChats);
router.post('/',isLoggedIn,chatsControllers.postChat);

module.exports = router;



import { isLoggedIn }  from '../controllers/login.js'
const messageControllers = require('../controllers/message');
const express = require('express');
var router = express.Router();

router.post('/',isLoggedIn,messageControllers.createMessage);
router.get('/',isLoggedIn,messageControllers.getMessages);

module.exports = router;



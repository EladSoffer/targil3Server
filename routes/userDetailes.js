import { isLoggedIn }  from '../controllers/login.js'

const userDetailesController = require('../controllers/userDetailes');
const express = require('express');
var router = express.Router();

router.get('/',isLoggedIn,userDetailesController.getDetailes);

module.exports = router;
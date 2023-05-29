const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


const costumEnv = require('custom-env');
customEnv.env(process.env.NODE_ENV, './config');


const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const messages = require('./routes/message');
app.use('./messages', messages)

 app.set('view engine', 'ejs');

 app.use('/', require('./routes/login'));

 app.listen(8080)

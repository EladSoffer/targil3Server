const express = require('express');
var app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
server.use(bodyParser.urlencoded({ extended: true }));


const costumEnv = require('custom-env');
costumEnv.env(process.env.NODE_ENV, './config');


const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



const messages = require('./routes/message');
const login = require('/routes/login');
app.use('/api/Chats/:id/Messages/', messages);
app.use('/api/Tokens',login);

app.set('view engine', 'ejs');


app.listen(8080)

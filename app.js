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

app.use('./api/Chats/:id/Messages', messages)

const register = require('./routes/register');
app.use('./api/Users', register)

const login = require('/routes/login');
app.use('/api/Chats/:id/Messages', messages);
app.use('/api/Tokens',login);

const userDetailes = require('./routes/userDetailes');
app.use('/api/Users/:username', userDetailes);

const chats = require('./routs/chats');
app,ues('/api/Chats',chats);


app.set('view engine', 'ejs');


app.listen(8080)

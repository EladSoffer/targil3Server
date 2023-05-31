const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/mydatabase';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(5000, () => {
      console.log('Server started on port 5000');
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const messages = require('./routes/message');
app.use('/api/Chats', messages);


const register = require('./routes/register');

app.use('/api/Users', register)

const login = require('./routes/login');
app.use('/api/Tokens', login);

const userDetailes = require('./routes/userDetailes');
app.use('/api/Users/:username', userDetailes);

const chats = require('./routes/chats');
app.use('/api/Chats', chats);


const chat = require('./routes/oneChat.js');
app.use('/api/Chat/:id', chat);


app.set('view engine', 'ejs');

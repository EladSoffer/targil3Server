const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const customEnv = require('custom-env');
customEnv.env(process.env.NODE_ENV, './config');

const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/mydatabase';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(8080, () => {
      console.log('Server started on port 8080');
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const messages = require('./routes/message');
app.use('/api/Chats/:id/Messages', messages);

const register = require('./routes/register');
app.use('/api/Users', register);

const login = require('./routes/login');
app.use('/api/Tokens', login);

app.set('view engine', 'ejs');

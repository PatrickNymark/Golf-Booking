const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const logger = require('morgan');

// initialize
const app = express();

// .env config
require('dotenv').config();

// logger config
app.use(logger('dev'));

// database config
mongoose
  .connect(process.env.mongoURI, {
    useNewUrlParser: true
  })
  .then(res => console.log('Database connected'))
  .catch(err => console.log(err));

// body-parser middleware
app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

// passport Config
require('./middleware/passport')(passport);
app.use(passport.initialize());

// routes
const users = require('./routes/api/auth');

// use routes
app.use('/api/users', users);

const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`Server running on ${port}`));
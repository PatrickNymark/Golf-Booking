const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const errorHandler = require('./helpers/error-handler');

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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/auth', require('./controllers/auth.controller'));
app.use('/api/staff', require('./controllers/staff.controller'));
app.use('/api/course', require('./controllers/course.controller'));
app.use('/api/player', require('./controllers/player.controller'));
app.use('/api/booking', require('./controllers/booking.controller'));



// global error handler
app.use(errorHandler);



const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`Server running on ${port}`));
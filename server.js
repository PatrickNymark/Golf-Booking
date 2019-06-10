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
const auth = require('./routes/api/auth');
const bookings = require('./routes/api/bookings/bookings');
const staff = require('./routes/api/staff/staff');
const clubs = require('./routes/api/clubs/clubs');

// use routes
app.use('/api/auth', auth);
app.use('/api/bookings', bookings);
app.use('/api/staff', staff);
app.use('/api/clubs', clubs);

const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`Server running on ${port}`));
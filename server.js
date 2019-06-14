const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
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

// passport Config
// require('./middleware/passport')(passport);
// app.use(passport.initialize());

// routes
const bookings = require('./routes/api/bookings/bookings');
const staff = require('./routes/api/staff/staff');
const courses = require('./routes/api/courses/courses');

// use routes
// app.use('/api/bookings', bookings);
// app.use('/api/staff', staff);
// app.use('/api/courses', courses);

app.use('/api/auth', require('./controllers/auth.controller'));

// global error handler
app.use(errorHandler);



const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`Server running on ${port}`));
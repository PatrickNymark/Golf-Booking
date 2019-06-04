const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

// Initialize
const app = express();

// .env config
require('dotenv').config();

// Database config
mongoose
  .connect(process.env.mongoURI, {
    useNewUrlParser: true
  })
  .then(res => console.log('Database connected'))
  .catch(err => console.log(err));

// Body-parser middleware
app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

// Passport Config
app.use(passport.initialize());
require('./middleware/passport')(passport);

// Routes
const clubs = require('./routes/api/clubs');

// Use routes
app.use('/api/clubs', clubs);

const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`Server running on ${port}`));
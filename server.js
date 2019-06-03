const express = require('express');
const mongoose = require('mongoose');

// Initialize
const app = express();

// Database config
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, {
    useNewUrlParser: true
  })
  .then(res => console.log('Database connected'))
  .catch(err => console.log(err));

// Body-parser middleware
app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

// Routes
const clubs = require('./routes/api/clubs');

// Use routes
app.use('/api/clubs', clubs);

const port = 5000 || process.env.PORT;

app.listen(port, () => console.log(`Server running on ${port}`));
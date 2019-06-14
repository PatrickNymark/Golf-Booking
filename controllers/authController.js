const jwt = require('jsonwebtoken');

// validators
const userValidator = require('../validation/newUser');

// models
const User = require('../models/User');

exports.register = (req, res) => {
  const { isValid, errors } = userValidator(req.body);

  if(!isValid) {
    return res.status(422).json(errors)
  }

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  })

  newUser.save().then(user => res.json(user)).catch(err => {
    res.status(500).json(err.message)
  })
}

exports.login = (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if(!user) {
      return res.status(422).json({ error: 'Email not found'})
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
      if(!isMatch) {
        return res.status(422).json({ error: 'Password incorrect'})
      }

      const payload = {
        id: user.id,
        email: user.email,
        role: user.role
      }

      jwt.sign(payload, process.env.secretOrKey, { expiresIn: '2h'}, (err, token) => {
        if (err) throw err;
        res.json({ success: true, token: 'bearer ' + token });
      })
    });
  })
}

exports.getAll = (req, res) => {
  User.find().then(users => {
    res.json(users)
  })
}


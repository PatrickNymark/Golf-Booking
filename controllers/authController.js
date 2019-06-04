const jwt = require('jsonwebtoken');

// Models
const User = require('../models/User');

exports.register = (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    role: 'admin'
  })

  newUser.save().then(user => res.json(user))

}

exports.login = (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if(!user) {
      return res.status(404).json({ 'notfound' : 'Email not found'})
    }

    user.comparePassword(req.body.password, (err, isMatch) => {
      if(!isMatch) {
        return res.status(404).json({ 'incorrect' : 'Password incorrect'})
      }

      const payload = {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        role: user.role
      }

      jwt.sign(payload, process.env.secretOrKey, { expiresIn: '2d'}, (err, token) => {
        res.json({ success: true, token: 'bearer ' + token });
      })
    });
  })
}

exports.roleAuthorization = function(roles) {
  return function(req, res, next) {
    const user = req.user;

    User.findOne({ email: user.email }).then(user => {
      if (!user) {
        return res.status(422).json({ error: 'No user found '});
      }

      if (roles.indexOf(user.role) > -1) {
        return next();
      }

      return res.status(401).json({ error: 'You are not authorized to view this content'});
    })
  }
}

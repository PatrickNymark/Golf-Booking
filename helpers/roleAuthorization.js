exports.authenticate = (roles) => {
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
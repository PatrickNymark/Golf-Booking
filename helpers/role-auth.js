const jwt = require('express-jwt');
const isEmpty = require('../helpers/is-empty.js');

function authorize(roles = []) {
    // roles param can be a single role string (e.g. Role.User or 'User') 
    // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return [
        // authenticate JWT token and attach user to request object (req.user)
        // if the JWT has an expiration (exp), it will be checked
        jwt({ secret: process.env.secretOrKey }),

        // authorize based on user role
        (req, res, next) => {
            // staff authorization
            if(isEmpty(req.user.role.staff) && roles.includes('staff'))  {
              return res.status(401).json({ message: 'Unauthorized' });
            }

            // authentication and authorization successful
            next();
        }
    ];
}

module.exports = authorize;

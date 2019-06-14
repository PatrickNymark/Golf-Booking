const express = require('express');
const router = express.Router();
const authService = require('../services/auth.service');
const authorize = require('../helpers/role-auth');

// routes
router.post('/user/register', registerUser);
router.post('/staff/register', registerStaff);
router.post('/login', loginUser);
router.get('/test', getAll);
module.exports = router;

function registerUser(req, res, next) {
  authService.registerUser(req.body)
    .then(user => res.json(user))
    .catch(err => next(err));
}

function registerStaff(req, res, next) {
  authService.registerStaff(req.body)
    .then(staff => res.json(staff))
    .catch(err => next(err))
}

function loginUser(req, res, next) {
  authService.loginUser(req.body.email, req.body.password)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err))
}

function getAll(req, res, next) {
  authService.getAll()
    .then(users => users ? res.json(users) : res.sendStatus(404))
    .catch(err => next(err))
}
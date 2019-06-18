const express = require('express');
const router = express.Router();
const authService = require('../services/auth.service');
const authorize = require('../helpers/role-auth');

// routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/delete/:id', deleteUser);
router.get('/all', authorize('staff'), getAll);
module.exports = router;

function registerUser(req, res, next) {
  authService.registerUser(req.body)
    .then(user => res.json(user))
    .catch(err => next(err));
}

function loginUser(req, res, next) {
  authService.loginUser(req.body.email, req.body.password)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err))
}

function deleteUser(req, res, next) {
  authService.deleteUser(req.params.id)
    .then(user => res.json(user))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  authService.getAll()
    .then(users => res.json(users))
    .catch(err => next(err))
}
const express = require('express');
const router = express.Router();
const staffService = require('../services/staff.service');

// routes
router.post('/create', createStaff);
router.post('/delete/:id', deleteStaff);
router.post('/update/:id', updateStaff);
module.exports = router;

function createStaff(req, res, next) {
  staffService.createStaff(req.body)
    .then(staff => res.json(staff))
    .catch(err => next(err))
}

function deleteStaff(req, res, next) {
  staffService.deleteStaff(req.params.id)
    .then(staff => res.json(staff))
    .catch(err => next(err))
}

function updateStaff(req, res, next) {
  staffService.deleteStaff(req.params.id, req.body)
    .then(staff => res.json(staff))
    .catch(err => next(err))
}
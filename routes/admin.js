const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/Users',adminController.getUsers);

router.get('/deleteBooking/:UserId',adminController.deleteUser);

router.post('/addBooking',adminController.addUser);

module.exports = router;
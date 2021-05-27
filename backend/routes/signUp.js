const express = require('express');
const router = express.Router();
const userValidator = require('../middleware/UserValidator');
const userController = require('../controllers/userController');

router.get('/sign-up', userController.showSignUpPage);

router.post('/sign-up', userValidator, userController.createUser);

module.exports = router;

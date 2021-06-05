const express = require('express');
const router = express.Router();
const userValidator = require('../middlewares/UserValidator');
const userController = require('../controllers/userController');

router.get('/', userController.showSignUpPage);

router.post('/', userValidator, userController.createUser);

module.exports = router;

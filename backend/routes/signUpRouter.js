const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.showSignUpPage);
router.get('/sucesso', userController.showSuccessPage);

module.exports = router;

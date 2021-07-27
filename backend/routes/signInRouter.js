const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.showSignInPage);
router.post('/', userController.signInUser);
router.get('/reset-password', userController.showResetPage);
router.post('/reset-password', userController.resetPassword);

module.exports = router;

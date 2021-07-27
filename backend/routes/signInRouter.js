const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.showSignInPage);
router.post('/', userController.signInUser);
router.get('/forgot-password', userController.showForgotPage);
router.post('/forgot-password', userController.forgotPassword);
router.get('/forgot-password-success', userController.showForgotSuccessPage);
router.get('/reset-password', userController.showResetPage);
router.post('/reset-password', userController.resetPassword);
router.get('/reset-password-success', userController.showResetSuccessPage);

module.exports = router;

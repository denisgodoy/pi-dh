const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.showSignInPage);
router.post('/', userController.signInUser);
module.exports = router;

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const Auth = require('../middlewares/Auth');
const AlunoValidator = require('../middlewares/AlunoRouteValidator');

router.get('/', Auth, AlunoValidator, UserController.showUserProfile);

module.exports = router;

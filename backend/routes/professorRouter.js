const express = require('express');
const router = express.Router();
const Auth = require('../middlewares/Auth');
const ProfessorValidator = require('../middlewares/ProfessorRouteValidator');
const UserController = require('../controllers/UserController');

router.get('/', Auth, ProfessorValidator, UserController.showUserProfile);

module.exports = router;

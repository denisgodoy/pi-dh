const express = require('express');
const router = express.Router();

const Auth = require('../middlewares/Auth');
const AlunoValidator = require('../middlewares/AlunoRouteValidator');
const ProfessorValidator = require('../middlewares/ProfessorRouteValidator');

const UserController = require('../controllers/UserController');

//Rota perfil de aluno
router.get(
  '/aluno/profile',
  Auth,
  AlunoValidator,
  UserController.showUserProfile
);

//Rota perfil de professor
router.get(
  '/professor/profile',
  Auth,
  ProfessorValidator,
  UserController.showUserProfile
);

module.exports = router;

const express = require('express');
const router = express.Router();

const AlunoValidator = require('../middlewares/AlunoRouteValidator');
const ProfessorValidator = require('../middlewares/ProfessorRouteValidator');

const UserController = require('../controllers/UserController');

//Rota perfil de aluno
router.get('/aluno/profile', AlunoValidator, UserController.showUserProfile);

//Rota perfil de professor
router.get(
  '/professor/profile',
  ProfessorValidator,
  UserController.showUserProfile
);

module.exports = router;

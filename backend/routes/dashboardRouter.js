const express = require('express');
const router = express.Router();

const alunoAtividadeController = require('../controllers/AlunoAtividadeController');
const alunoTurmaController = require('../controllers/AlunoTurmaController');
const dashboardController = require('../controllers/DashboardController');
const UserController = require('../controllers/UserController');
const rankingController = require('../controllers/RankingController');

const AlunoValidator = require('../middlewares/AlunoRouteValidator');
const ProfessorValidator = require('../middlewares/ProfessorRouteValidator');

//ROTAS ALUNO
router.get('/aluno', dashboardController.indexStudent);
router.get('/aluno/profile', AlunoValidator, UserController.showUserProfile); 
router.get('/aluno/turmas', alunoTurmaController.getAllClasses);
router.post('/aluno/turmas', alunoTurmaController.createAssociation);
router.get('/aluno/turmas/:idTurma', alunoTurmaController.getClassById);
router.get('/aluno/turmas/:idTurma/atividades', alunoAtividadeController.getAllActivities);
router.get('/aluno/turmas/:idTurma/atividade/:id', alunoAtividadeController.getActivityById);
router.post('/aluno/turmas/:idTurma/atividade/:id', alunoAtividadeController.sendActivity);

//to-do
// router.get('/');
// router.delete('/aluno/turmas/:idTurma/atividade/:id', alunoAtividadeController.destroyAssociation);
// router.post('/aluno/turmas/:idTurma', alunoTurmaController.destroyAssociation);
// router.get('/aluno/turmas/:idTurma/atividades/:idAtividade', alunoAtividadeController.getAtividadeById);
// router.post('/aluno/turmas/:idTurma/atividades/:idAtividade', alunoAtividadeController.createAssociation);
// router.delete('/aluno/turmas/:idTurma/atividades/:id', alunoAtividadeController.destroyAssociation);
// router.get('/aluno/turmas/:idTurma/ranking', rankingController.index);


//Rota perfil de aluno

//Rota perfil de professor
router.get(
  '/professor/profile',
  ProfessorValidator,
  UserController.showUserProfile
);

module.exports = router;

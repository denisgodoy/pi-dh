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
router.get('/aluno/profile', UserController.showUserProfile); 
router.get('/aluno/turmas', alunoTurmaController.getAllClasses);
router.post('/aluno/turmas', alunoTurmaController.createAssociation);
router.get('/aluno/turmas/:idTurma', alunoTurmaController.getClassById);
router.post('/aluno/turmas/:idTurma', alunoTurmaController.destroyAssociation);
router.get('/aluno/turmas/:idTurma/ranking', rankingController.index);
router.get('/aluno/turmas/:idTurma/atividades', alunoAtividadeController.getAllActivities);
router.get('/aluno/turmas/:idTurma/atividades/:idAtividade', alunoAtividadeController.enrollActivity);
router.post('/aluno/turmas/:idTurma/atividades/:idAtividade', alunoAtividadeController.createAssociation);
router.get('/aluno/turmas/:idTurma/atividade/:id', alunoAtividadeController.getActivityById);
router.post('/aluno/turmas/:idTurma/atividade/:id', alunoAtividadeController.sendActivity);
router.post('/aluno/turmas/:idTurma/atividade/:id/desistir', alunoAtividadeController.destroyAssociation);
router.get('/aluno/atividades-pendentes', alunoAtividadeController.getPending);
router.get('/aluno/atividades-corrigidas', alunoAtividadeController.getSent);
router.get('/aluno/novas-atividades', alunoAtividadeController.getAllNew);

//Rota perfil de professor
router.get(
  '/professor/profile',
  ProfessorValidator,
  UserController.showUserProfile
);

module.exports = router;

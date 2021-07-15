const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/DashboardController');
const alunoAtividadeController = require('../controllers/AlunoAtividadeController');
const alunoTurmaController = require('../controllers/AlunoTurmaController');
const UserController = require('../controllers/UserController');
const professorRouteValidator = require('../middlewares/ProfessorRouteValidator');
const rankingController = require('../controllers/RankingController');


// ROTAS PROFESSOR
// router.get('/professor/', userController.indexAllProfessores);

// router.get('/professor/atividades/', dashboardController.indexAtividades);
// router.get('/professor/atividades/criar', dashboardController.criarAtividade);
// router.get('/professor/:idUser', dashboardController.indexProfessor);
// router.post('/professor/atividades', dashboardController.criarAtividade);
// router.delete('/professor/atividades/:id', dashboardController.deletarAtividade);

// router.get('/professor/atividades', professorRouteValidator, dashboardController.indexAtividades);



//ROTAS ALUNO
router.get('/aluno', dashboardController.indexStudent);
router.get('/aluno/profile', UserController.showUserProfile); 
router.get('/aluno/turmas', alunoTurmaController.getAllClasses);
router.post('/aluno/turmas', alunoTurmaController.createAssociation);
router.get('/aluno/turmas/:idTurma', alunoTurmaController.getClassById);
router.post('/aluno/turmas/:idTurma', alunoTurmaController.destroyAssociation);
router.get('/aluno/turmas/:idTurma/atividades', alunoAtividadeController.getAllActivities);
router.get('/aluno/turmas/:idTurma/atividades/:idAtividade', alunoAtividadeController.enrollActivity);
router.post('/aluno/turmas/:idTurma/atividades/:idAtividade', alunoAtividadeController.createAssociation);
router.get('/aluno/turmas/:idTurma/atividade/:id', alunoAtividadeController.getActivityById);
router.post('/aluno/turmas/:idTurma/atividade/:id', alunoAtividadeController.sendActivity);
router.post('/aluno/turmas/:idTurma/atividade/:id/desistir', alunoAtividadeController.destroyAssociation);

//Rota perfil de professor
router.get(
  '/professor/profile',
  professorRouteValidator,
  UserController.showUserProfile
);
module.exports = router;
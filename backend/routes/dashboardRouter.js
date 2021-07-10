const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/DashboardController');
const alunoAtividadeController = require('../controllers/AlunoAtividadeController');
const alunoTurmaController = require('../controllers/AlunoTurmaController');
const userController = require('../controllers/UserController');
const professorRouteValidator = require('../middlewares/ProfessorRouteValidator');


// ROTAS PROFESSOR
// router.get('/professor/', userController.indexAllProfessores);
router.get('/professor/atividades/', dashboardController.indexAtividades);
router.get('/professor/atividades/criar', dashboardController.criarAtividade);
router.get('/professor/:idUser', dashboardController.indexProfessor);
router.post('/professor/atividades', dashboardController.criarAtividade);
router.delete('/professor/atividades/:id', dashboardController.deletarAtividade);
// router.get('/professor/atividades', professorRouteValidator, dashboardController.indexAtividades);



//ROTAS ALUNO
// router.get('/', userController.indexByType);
router.get('/aluno/:idUser', dashboardController.indexAluno);
router.get('/aluno/:idUser/turmas', alunoTurmaController.getAllClasses);
router.get('/aluno/:idUser/turmas/:idTurma', alunoTurmaController.getClassById);
router.get('/aluno/:idUser/turmas/:idTurma/atividades', alunoAtividadeController.getAllAtividades);
router.get('/aluno/:idUser/turmas/:idTurma/atividades/:idAtividade', alunoAtividadeController.getAtividadeById);
router.post('/aluno/:idUser/turmas/:idTurma/atividades/:idAtividade', alunoAtividadeController.createAssociation);
router.post('/aluno/:idUser/turmas/:idTurma/atividades/:id', alunoAtividadeController.sendAtividade);
router.delete('/aluno/:idUser/turmas/:idTurma/atividades/:id', alunoAtividadeController.destroyAssociation);
router.get('/aluno/:idUser/turmas/:idTurma/ranking');

module.exports = router;
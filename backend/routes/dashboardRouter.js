const express = require('express');
const router = express.Router();

const alunoAtividadeController = require('../controllers/AlunoAtividadeController');
const alunoTurmaController = require('../controllers/AlunoTurmaController');
const dashboardController = require('../controllers/DashboardController');
const rankingController = require('../controllers/RankingController');

// ROTAS TESTE
// router.get('/criar/:codigo/qrcode', alunoTurmaController.createQrCode);
// router.delete('/excluir/:id', alunoAtividadeController.destroyAssociation);

//ROTAS ALUNO
router.get('/aluno/:idUser', dashboardController.indexStudent);
router.get('/aluno/:idUser/turmas', alunoTurmaController.getAllClasses);
router.post('/aluno/:idUser/turmas', alunoTurmaController.createAssociation);
router.get('/aluno/:idUser/turmas/:idTurma', alunoTurmaController.getClassById);
router.get('/aluno/:idUser/turmas/:idTurma/atividades', alunoAtividadeController.getAllActivities);
router.get('/aluno/:idUser/turmas/:idTurma/atividade/:id', alunoAtividadeController.getActivityById);
router.post('/aluno/:idUser/turmas/:idTurma/atividade/:id', alunoAtividadeController.sendActivity);

//to-do
// router.get('/');
// router.delete('/aluno/:idUser/turmas/:idTurma/atividade/:id', alunoAtividadeController.destroyAssociation);
// router.post('/aluno/:idUser/turmas/:idTurma', alunoTurmaController.destroyAssociation);
// router.get('/aluno/:idUser/turmas/:idTurma/atividades/:idAtividade', alunoAtividadeController.getAtividadeById);
// router.post('/aluno/:idUser/turmas/:idTurma/atividades/:idAtividade', alunoAtividadeController.createAssociation);
// router.delete('/aluno/:idUser/turmas/:idTurma/atividades/:id', alunoAtividadeController.destroyAssociation);
// router.get('/aluno/:idUser/turmas/:idTurma/ranking', rankingController.index);

module.exports = router;

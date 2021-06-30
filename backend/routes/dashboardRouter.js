const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/DashboardController');
const alunoAtividadeController = require('../controllers/AlunoAtividadeController');
const alunoTurmaController = require('../controllers/AlunoTurmaController');
const userController = require('../controllers/UserController');

// ROTAS PROFESSOR
router.post('/criar', alunoTurmaController.create);
router.get('/criar/:codigo/qrcode', alunoTurmaController.createQrCode);

//ROTAS ALUNO
router.get('/aluno', userController.indexByType, dashboardController.indexAluno);
router.get('/aluno/turmas', alunoTurmaController.getAllTurmas);
router.get('/aluno/turmas/:idTurma', alunoTurmaController.getTurmaById);
router.get('/aluno/turmas/:idTurma/atividades', alunoAtividadeController.getAllAtividades);
router.get('/aluno/turmas/:idTurma/atividades/:idAtividade', alunoAtividadeController.getAtividadeById);
router.post('/aluno/turmas/:idTurma/atividades/:idAtividade', alunoAtividadeController.sendAtividade);
router.get('/aluno/turmas/:idTurma/ranking');

module.exports = router;
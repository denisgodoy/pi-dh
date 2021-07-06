const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/DashboardController');
const alunoAtividadeController = require('../controllers/AlunoAtividadeController');
const alunoTurmaController = require('../controllers/AlunoTurmaController');
const userController = require('../controllers/UserController');

// ROTAS TESTE
// router.post('/criar', alunoTurmaController.create);
// router.get('/criar/:codigo/qrcode', alunoTurmaController.createQrCode);
// router.post('/atividade', alunoAtividadeController.create);
// router.post('/:idUser/:idAtividade', alunoAtividadeController.createAssociation);
// router.get('/atividade/:idAtividade', alunoAtividadeController.getAtividadeById);
// router.post('/:id', alunoAtividadeController.sendAtividade);
// router.get('/:idUser', alunoAtividadeController.getAllAtividades);
// router.delete('/excluir/:id', alunoAtividadeController.destroyAssociation);

//ROTAS ALUNO
router.get('/', userController.indexByType);
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

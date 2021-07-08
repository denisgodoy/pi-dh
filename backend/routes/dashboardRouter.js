const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/DashboardController');
const alunoAtividadeController = require('../controllers/AlunoAtividadeController');
const alunoTurmaController = require('../controllers/AlunoTurmaController');
const alunoValidator = require('../middlewares/AlunoRouteValidator');

// ROTAS TESTE
// router.post('/criar', alunoTurmaController.create);
// router.get('/criar/:codigo/qrcode', alunoTurmaController.createQrCode);
// router.post('/atividade', alunoAtividadeController.create);
// router.post('/:idUser/:idTurma', alunoTurmaController.createAssociation);
// router.get('/atividade/:idAtividade', alunoAtividadeController.getAtividadeById);
// router.post('/:id', alunoAtividadeController.sendAtividade);
// router.get('/:idUser', alunoAtividadeController.getAllAtividades);
// router.delete('/excluir/:id', alunoAtividadeController.destroyAssociation);

//ROTAS ALUNO
router.get('/', alunoValidator);
router.get('/aluno/:idUser', dashboardController.indexAluno);
router.get('/aluno/:idUser/turmas', alunoTurmaController.getAllClasses);
router.post('/aluno/:idUser/turmas', alunoTurmaController.createAssociation);
router.get('/aluno/:idUser/turmas/:idTurma', alunoTurmaController.getClassById);

//to-do
router.get('/aluno/:idUser/turmas/:idTurma/atividades', alunoAtividadeController.getAllAtividades);
router.get('/aluno/:idUser/turmas/:idTurma/atividades/:idAtividade', alunoAtividadeController.getAtividadeById);
router.post('/aluno/:idUser/turmas/:idTurma/atividades/:idAtividade', alunoAtividadeController.createAssociation);
router.post('/aluno/:idUser/turmas/:idTurma/atividades/:id', alunoAtividadeController.sendAtividade);
router.delete('/aluno/:idUser/turmas/:idTurma/atividades/:id', alunoAtividadeController.destroyAssociation);
router.get('/aluno/:idUser/turmas/:idTurma/ranking');

module.exports = router;

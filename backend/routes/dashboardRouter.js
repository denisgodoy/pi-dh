const express = require('express');
const router = express.Router();

const alunoAtividadeController = require('../controllers/AlunoAtividadeController');
const professorAtividadeController = require('../controllers/ProfessorAtividadeController');
const alunoTurmaController = require('../controllers/AlunoTurmaController');
const professorTurmaController = require('../controllers/ProfessorTurmaController');
const dashboardController = require('../controllers/DashboardController');
const UserController = require('../controllers/UserController');
const rankingController = require('../controllers/RankingController');

const UserInfo = require('../middlewares/UserInfo');
const AlunoValidator = require('../middlewares/AlunoRouteValidator');
const ProfessorValidator = require('../middlewares/ProfessorRouteValidator');

//Middleware para propagar informações do usuário nas sessions
router.use(UserInfo);

//ROTAS ALUNO
router.get('/', AlunoValidator, dashboardController.redirect);
router.get('/aluno', AlunoValidator, dashboardController.indexStudent);
router.get('/aluno/profile', AlunoValidator, UserController.showStudentProfile);
router.get(
  '/aluno/profile/avatar',
  AlunoValidator,
  UserController.showStudentUpdateAvatar
);
router.get(
  '/aluno/profile/success',
  AlunoValidator,
  UserController.showStudentProfileSuccess
);
router.get('/aluno/turmas', AlunoValidator, alunoTurmaController.getAllClasses);
router.post(
  '/aluno/turmas',
  AlunoValidator,
  alunoTurmaController.createAssociation
);
router.get(
  '/aluno/turmas/:idTurma',
  AlunoValidator,
  alunoTurmaController.getClassById
);
router.post(
  '/aluno/turmas/:idTurma',
  AlunoValidator,
  alunoTurmaController.destroyAssociation
);
router.get(
  '/aluno/turmas/:idTurma/ranking',
  AlunoValidator,
  rankingController.index
);
router.get(
  '/aluno/turmas/:idTurma/atividades',
  AlunoValidator,
  alunoAtividadeController.getAllActivities
);
router.get(
  '/aluno/turmas/:idTurma/atividades/:idAtividade',
  AlunoValidator,
  alunoAtividadeController.enrollActivity
);
router.post(
  '/aluno/turmas/:idTurma/atividades/:idAtividade',
  AlunoValidator,
  alunoAtividadeController.createAssociation
);
router.get(
  '/aluno/turmas/:idTurma/atividade/:id',
  AlunoValidator,
  alunoAtividadeController.getActivityById
);
router.post(
  '/aluno/turmas/:idTurma/atividade/:id',
  AlunoValidator,
  alunoAtividadeController.sendActivity
);
router.post(
  '/aluno/turmas/:idTurma/atividade/:id/desistir',
  AlunoValidator,
  alunoAtividadeController.destroyAssociation
);
router.get(
  '/aluno/atividades-pendentes',
  AlunoValidator,
  alunoAtividadeController.getPending
);
router.get(
  '/aluno/atividades-corrigidas',
  AlunoValidator,
  alunoAtividadeController.getSent
);
router.get(
  '/aluno/novas-atividades',
  AlunoValidator,
  alunoAtividadeController.getAllNew
);

//Rota perfil de professor
router.get(
  '/professor/profile',
  ProfessorValidator,
  UserController.showProfessorProfile
);

router.get(
  '/professor/profile/avatar',
  ProfessorValidator,
  UserController.updateUserAvatar
);
router.get(
  '/professor/profile/success',
  ProfessorValidator,
  UserController.showProfessorProfileSuccess
);

//ROTAS PROFESSOR

router.get(
  '/professor',
  ProfessorValidator,
  dashboardController.indexProfessor
);

router.get(
  '/professor/profile/success',
  ProfessorValidator,
  UserController.showProfessorProfileSuccess
);

router.get('/professor/atividades/:idTurma',
  ProfessorValidator,
  professorAtividadeController.getAllActivitiesByClass
);

router.get('/professor/turmas',
  ProfessorValidator,
  professorTurmaController.getClasses
);

router.get('/professor/turmas/nova',
  ProfessorValidator,
  professorTurmaController.createClass
);

router.get('/professor/atividade/:idTurma/nova',
  ProfessorValidator,
  professorAtividadeController.createActivity
);

router.post(
  '/professor/turmas/nova',
  ProfessorValidator,
  professorTurmaController.sendClass
);

router.post(
  '/professor/atividade/:idTurma/nova',
  ProfessorValidator,
  professorAtividadeController.sendActivity
);

router.get(
  '/professor/atividades/:idAtividade/alterar',
  ProfessorValidator,
  professorAtividadeController.updateFormActivity
);

router.post(
  '/professor/atividade/:idAtividade/alterar',
  ProfessorValidator,
  professorAtividadeController.updateActivity
);

router.delete(
  '/professor/turmas/:idTurma/deletar',
  ProfessorValidator,
  professorTurmaController.destroyClass
);

router.get('/professor/turmas/:idTurma',
  ProfessorValidator,
  professorTurmaController.updateFormClass
);

router.post(
  '/professor/turmas/:idTurma/alterar',
  ProfessorValidator,
  professorTurmaController.updateClass
);

module.exports = router;

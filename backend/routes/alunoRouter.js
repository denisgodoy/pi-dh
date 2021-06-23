const express = require('express');
const router = express.Router();
const AlunoController = require('../controllers/AlunoController');
const Auth = require('../middlewares/Auth');
const AlunoValidator = require('../middlewares/AlunoRouteValidator');

router.get('/', Auth, AlunoValidator, AlunoController.showDashboardAluno);

module.exports = router;

const express = require('express');
const router = express.Router();
const AlunoController = require('../controllers/AlunoController');
const Auth = require('../middlewares/Auth');

router.get('/', Auth, AlunoController.showDashboardAluno);

module.exports = router;

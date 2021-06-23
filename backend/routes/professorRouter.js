const express = require('express');
const router = express.Router();
const Auth = require('../middlewares/Auth');
const ProfessorValidator = require('../middlewares/ProfessorRouteValidator');

router.get('/', Auth, ProfessorValidator, (req, res) => {
  res.send('Seja bem vindo, professor!');
});

module.exports = router;

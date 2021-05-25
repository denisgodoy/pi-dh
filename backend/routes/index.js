const express = require('express');
const router = express.Router();

const controller = require('../controllers/HomeController');

const contatoValidator = require('../middlewares/ContatoValidator');

router.get('/', controller.index);
router.post('/', contatoValidator, controller.form);
router.get('/sucesso', controller.redirect);

module.exports = router;

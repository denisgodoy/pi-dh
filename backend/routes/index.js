const express = require('express');
const router = express.Router();

const controller = require('../controllers/HomeController');

router.get('/', controller.index);
router.post('/', controller.form);
router.get('/sucesso', controller.redirect);

module.exports = router;

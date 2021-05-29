const express = require('express');
const router = express.Router();

const controller = require('../controllers/HomeController');

const validator = require('../middlewares/ContactFormValidator');

router.get('/', controller.index);
router.get('/contato', controller.contactUs);
router.post('/contato/sucesso', validator, controller.sendMail);

module.exports = router;

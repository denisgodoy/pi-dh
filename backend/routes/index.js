const express = require('express');
const router = express.Router();

const controller = require('../controllers/HomeController');

const contactFormValidator = require('../middlewares/ContactFormValidator');

router.get('/', controller.index);
router.post('/contato', contactFormValidator, controller.sendMail);

module.exports = router;

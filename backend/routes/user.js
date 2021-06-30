const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const userValidator = require('../middlewares/UserValidator');
const userApiValidator = require('../middlewares/UserApiValidator');
/* API REST */

router.get('/users', userController.indexAll);
router.post('/users', userValidator, userController.createUser);
router.put('/users/:idUser', userApiValidator, userController.updateUser);
router.delete('/users/:idUser', userController.destroy);

router.get('/users/:idUser', userController.indexById);

module.exports = router;
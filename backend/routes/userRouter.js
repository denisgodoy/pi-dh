const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const userValidator = require('../middlewares/UserValidator');
const UserUpdateValidator = require('../middlewares/UserUpdateValidator');
const uploadFirebase = require('../middlewares/Firebase');
const UserInfo = require('../middlewares/UserInfo');

const multer = require('multer');
const multerConfig = require('../database/config/multer');
const uploadFile = multer(multerConfig);

router.post(
  '/users/upload',
  uploadFile.single('avatar'),
  uploadFirebase,
  userController.updateUserAvatar
);

/* API REST */
router.get('/users', userController.indexAll);
router.post('/users', userValidator, userController.createUser);
router.put('/users/:idUser', UserUpdateValidator, userController.updateUser);
router.delete('/users/:idUser', userController.destroy);
router.get('/users/:idUser', userController.indexById);

module.exports = router;

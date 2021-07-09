const UserService = require('../services/UserService');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

const UserController = {
  showSignUpPage: (req, res) => {
    return res.render('user/sign-up');
  },
  showSignInPage: (req, res) => {
    return res.render('user/sign-in');
  },
  showSuccessPage: (req, res) => {
    return res.render('user/sign-up-success');
  },
  createUser: async (req, res) => {
    let { nome, sobrenome, email, senha, tipoUser } = req.body;

    const verifyUser = await UserService.findUser(email);
    if (verifyUser) {
      return res.status(400).json({
        err: 'Usuário já cadastrado. Insira outro endereço de e-mail',
      });
    }

    senha = await UserService.hashPassword(senha);

    const user = await UserService.createUser(
      nome,
      sobrenome,
      email,
      senha,
      tipoUser
    );

    return res.json(user);
  },
  signInUser: async (req, res) => {
    const { email, senha } = req.body;
    const user = await UserService.findUser(email);

    if (user == undefined) {
      return res.status(400).json({ err: 'E-mail não encontrado' });
    }

    const verifyPassword = await UserService.checkPassword(senha, user);

    if (!verifyPassword) {
      return res.status(400).json({ err: 'Senha inválida' });
    }

    const userToken = await UserService.createWebToken(user);

    req.session.userToken = userToken;

    return res.json(user);
  },
  indexAll: async (req, res) => {
    const list = await UserService.getUserList();
    return res.json(list);
  },
  indexById: async (req, res) => {
    const { idUser } = req.params;
    const user = await UserService.getById(idUser);

    if (!user) {
      return res.status(404).json({ error: `User ${idUser} not found` });
    }
    return res.json(user);
  },

  updateUser: async (req, res) => {
    let { idUser } = req.params;
    let { nome, sobrenome, email, senha, tipoUser } = req.body;

    senha = await UserService.hashPassword(senha);

    let updatedUser = await UserService.updateUser(
      idUser,
      nome,
      sobrenome,
      email,
      senha,
      tipoUser
    );

    res.json(updatedUser);
  },
  destroy: async (req, res) => {
    let { idUser } = req.params;
    let destroyedUser = await UserService.destroy(idUser);
    return res.json(destroyedUser);
  },

  showUserProfile: async (req, res) => {
    let userInfo = req.user;
    let user = await UserService.getById(userInfo.id);

    return res.render('user/profile', { user: user });
  },
};
module.exports = UserController;

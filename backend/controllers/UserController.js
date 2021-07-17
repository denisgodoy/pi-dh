const UserService = require('../services/UserService');

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
    let { idUser, nome, sobrenome, email, senha, tipoUser } = req.body;

    if (!senha) {
      user = await UserService.getUserPassword(idUser);
      senha = user.senha;
    } else {
      senha = await UserService.hashPassword(senha);
    }

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
    try {
      let { idUser } = req.params;
      let destroyedUser = await UserService.destroy(idUser);
      req.session.userToken = '';
      return res.json(destroyedUser);
    } catch (error) {
      return res.status(400).json({
        err: 'Você deve sair de todas as turmas antes de deletar o seu perfil',
      });
    }
  },

  showUserProfile: async (req, res) => {
    let userInfo = req.user;
    let user = await UserService.getById(userInfo.idUser);

    return res.render('user/profile', { user: user });
  },
  showUserProfileSuccess: async (req, res) => {
    return res.render('user/profile-success');
  },
  showStudentProfile: async (req, res) => {
    let userInfo = req.user;
    let user = await UserService.getById(userInfo.idUser);

    return res.render('dashboard-student/profile', { user: user });
  },
  showStudentProfileSuccess: async (req, res) => {
    return res.render('dashboard-student/profile-success');
  },
};

module.exports = UserController;

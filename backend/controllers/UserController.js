const UserService = require('../services/UserService');

const UserController = {
  showSignUpPage: (req, res) => {
    return res.render('sign-up');
  },
  showSignInPage: (req, res) => {
    return res.render('sign-in');
  },
  createUser: async (req, res) => {
    let { nome, sobrenome, email, senha, tipoUser } = req.body;

    senha = await UserService.hashPassword(senha);

    const user = await UserService.createUser(
      nome,
      sobrenome,
      email,
      senha,
      tipoUser
    );
    console.log(user);
    return res.render('sign-up-success');
  },
  signInUser: async (req, res) => {
    let { email, senha } = req.body;
    const validaUser = await UserService.signInUser(email);

    if (validaUser == undefined) {
      return res.send('E-mail não encontrado');
    }

    const validaSenha = await UserService.checkPassword(senha, validaUser);

    if (!validaSenha) {
      return res.send('Senha inválida.');
    } else {
      return res.send('Seja bem-vindo!');
    }
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
  indexByType: async (req, res) => {
    const { idUser } = req.params;
    const userType = await UserService.getById(idUser);

    switch (userType.tipoUser) {
      case "aluno":
        return res.redirect('/dashboard/aluno');
      case "professor":
        return res.redirect('/dashboard/professor');
    };
  }
};
module.exports = UserController;

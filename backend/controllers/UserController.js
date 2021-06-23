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
    const { email, senha } = req.body;
    const user = await UserService.findUser(email);

    if (user == undefined) {
      return res.status(401).json({ err: 'E-mail não encontrado' });
    }

    const verifyPassword = await UserService.checkPassword(senha, user);

    if (!verifyPassword) {
      return res.status(401).json({ err: 'Senha inválida' });
    }

    const userToken = await UserService.createWebToken(user);

    req.session.userToken = userToken;

    switch (user.tipoUser) {
      case 'professor':
        return res.redirect('/professor');
      case 'aluno':
        return res.redirect('/aluno');
    }
  },
};
module.exports = UserController;

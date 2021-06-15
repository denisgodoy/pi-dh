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
    }

    req.session.user = validaUser;

    switch (validaUser.tipoUser) {
      case 'professor':
        return res.redirect('/professor');
      case 'aluno':
        return res.redirect('/aluno');
    }
  },
};
module.exports = UserController;

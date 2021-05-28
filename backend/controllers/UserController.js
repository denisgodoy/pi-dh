const UserService = require('../services/UserService');

const UserController = {
	showSignUpPage: (req, res) => {
		return res.render('sign-up');
	},
	createUser: async (req, res) => {
		const { nome, sobrenome, email, senha, tipoUser } = req.body;
		const user = await UserService.createUser(nome, sobrenome, email, senha, tipoUser);
		return res.json(nome);
	},
};

module.exports = UserController;

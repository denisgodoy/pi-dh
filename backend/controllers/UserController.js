const UserService = require('../services/UserService');
const bcryptjs = require('bcryptjs');

const UserController = {
	showSignUpPage: (req, res) => {
		return res.render('sign-up');
	},
	showSignInPage: (req, res) => {
		return res.render('sign-in');
	},
	createUser: async (req, res) => {
		let { nome, sobrenome, email, senha, tipoUser } = req.body;

		senha = bcryptjs.hashSync(senha, 8);

		const user = await UserService.createUser(nome, sobrenome, email, senha, tipoUser);
		return res.render('sign-up-sucess');
	},
};

module.exports = UserController;

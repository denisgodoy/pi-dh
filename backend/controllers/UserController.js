const UserService = require('../services/UserService');

const UserController = {
	showSignUpPage: (req, res) => {
		return res.send('página de cadastro');
	},
	createUser: async (req, res) => {
		const { nome, sobrenome, email, senha, userType } = req.body;
		const user = await UserService.createUser(nome, sobrenome, email, senha, userType);
		return res.json(user);
	},
};

module.exports = UserController;

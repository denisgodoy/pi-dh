const database = require('../database/models/index');

const UserService = {
	createUser: async (nome, sobrenome, email, senha, tipoUser) => {
		const newUser = await database.User.create({
			nome,
			sobrenome,
			email,
			senha,
			tipoUser,
		});
		return newUser;
	},
};

module.exports = UserService;

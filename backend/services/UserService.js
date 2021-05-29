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
	signInUser: async (email) => {
		const user = await database.User.findOne({
			where: {
				email: email,
			},
		});
		return user;
	},
};

module.exports = UserService;

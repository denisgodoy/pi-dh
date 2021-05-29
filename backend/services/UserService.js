const database = require('../database/models/index');
const bcryptjs = require('bcryptjs');

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
	hashPassword: async (senha) => {
		const hashPassword = await bcryptjs.hash(senha, 8);
		return hashPassword;
	},
	checkPassword: async (senha, validaUser) => {
		const validaSenha = await bcryptjs.compareSync(senha, validaUser.senha);
		return validaSenha;
	},
};

module.exports = UserService;

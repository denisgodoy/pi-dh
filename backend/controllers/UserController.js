const UserService = require('../services/UserService');

const UserController = {
	showSignUpPage: (req, res) => {
		return res.render('sign-up');
	},
	createUser: (req, res) => {
		const { name, lastName, email, password, userType } = req.body;
		return res.json(name);
	},
};

module.exports = UserController;

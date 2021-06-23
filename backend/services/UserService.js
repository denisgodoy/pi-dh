const database = require('../database/models/index');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

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
  findUser: async (email) => {
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

  checkPassword: async (senha, user) => {
    const verifyPassword = await bcryptjs.compare(senha, user.senha);
    return verifyPassword;
  },
  createWebToken: async (user) => {
    const token = await jwt.sign(
      {
        id: user.idUser,
        nome: user.nome,
        tipoUser: user.tipoUser,
      },
      jwtSecret,
      { expiresIn: '48h' }
    );
    return token;
  },
  getUserList: async () => {
    const results = await database.User.findAll({
      attributes: ['idUser', 'nome', 'sobrenome', 'email', 'tipoUser'],
    });
    return results;
  },
  getById: async (idUser) => {
    return await database.User.findByPk(idUser, {
      attributes: ['idUser', 'nome', 'sobrenome', 'email', 'tipoUser'],
    });
  },
  updateUser: async (idUser, nome, sobrenome, email, senha, tipoUser) => {
    const updatedUser = await database.User.update(
      {
        nome,
        sobrenome,
        email,
        senha,
        tipoUser,
      },
      {
        where: {
          idUser,
        },
      }
    );
    return updatedUser;
  },
  destroy: async (idUser) => {
    const destroyedUser = await database.User.destroy({ where: { idUser } });
    return destroyedUser;
  },
};

module.exports = UserService;

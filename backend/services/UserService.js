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
    const validaSenha = await bcryptjs.compare(senha, validaUser.senha);
    return validaSenha;
  },
  getUserList: async () => {
    const results = await database.User.findAll();
    return results;
  },
  getById: async (idUser) => {
    return await database.User.findByPk(idUser);
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

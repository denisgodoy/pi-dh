const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');

const database = require('../database/models/index');
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
        idUser: user.idUser,
        nome: user.nome,
        tipoUser: user.tipoUser,
        avatar: user.avatar,
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
      attributes: [
        'idUser',
        'nome',
        'sobrenome',
        'email',
        'tipoUser',
        'avatar',
      ],
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
  getUserPassword: async (idUser) => {
    return (password = await database.User.findByPk(idUser, {
      attributes: ['senha'],
    }));
  },
  updateAvatar: async (idUser, avatar) => {
    const updatedAvatar = await database.User.update(
      {
        avatar: avatar,
      },
      {
        where: { idUser: idUser },
      }
    );
    return updatedAvatar;
  },
  clearResetToken: async (email) => {
    const clearResetToken = await database.ResetTokens.update(
      {
        used: 1,
      },
      {
        where: {
          email: email,
        },
      }
    );
    return clearResetToken;
  },
  setResetToken: async (email, fpSalt, expireDate) => {
    const setResetToken = await database.ResetTokens.create({
      email: email,
      expiration: expireDate,
      token: fpSalt,
      used: 0,
    });
    return setResetToken;
  },
  clearExpiredTokens: async () => {
    await database.ResetTokens.destroy({
      where: {
        expiration: { [Op.lt]: Sequelize.fn('CURDATE') },
      },
    });
  },
  findToken: async (email, token) => {
    const record = await database.ResetTokens.findOne({
      where: {
        email: email,
        expiration: { [Op.gt]: Sequelize.fn('CURDATE') },
        token: token,
        used: 0,
      },
    });
    return record;
  },
  updatePassword: async (email, senhaHash) => {
    const saveNewPassword = await database.User.update(
      {
        senha: senhaHash,
      },
      {
        where: {
          email: email,
        },
      }
    );
    return saveNewPassword;
  },
};

module.exports = UserService;

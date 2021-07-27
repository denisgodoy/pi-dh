module.exports = (sequelize, DataTypes) => {
  const ResetTokens = sequelize.define(
    'ResetTokens',
    {
      id: {
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      token: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      expiration: {
        type: DataTypes.DATE(),
        allowNull: false,
      },
      used: {
        type: DataTypes.INTEGER(11),
        defaultValue: '0',
      },
    },
    {
      tableName: 'resettokens',
      timestamps: true,
    }
  );
  return ResetTokens;
};

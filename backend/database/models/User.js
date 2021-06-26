module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			idUser: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			nome: {
				type: DataTypes.STRING(30),
				allowNull: false,
			},
			sobrenome: {
				type: DataTypes.STRING(60),
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			senha: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			avatar: {
				type: DataTypes.STRING(250),
				defaultValue: 'image',
			},
			tipoUser: {
				type: DataTypes.STRING(10),
				allowNull: false,
			},
		},
		{
			tableName: 'user',
			timestamps: false,
		}
	);

	User.associate = function(models) {
		User.belongsToMany(models.Atividade, {
			through: models.AtividadeAluno,
			foreignKey: 'idUser',
			otherKey: 'idAtividade'				
		});
	}
	return User;
};

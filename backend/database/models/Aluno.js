module.exports = (sequelize, DataTypes) => sequelize.define("Aluno", 
    {
        idAluno: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING(250),
            allowNull: false
        }
    },
    {
        tableName: 'ALUNO',
        timestamps: false,
    }
);
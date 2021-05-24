module.exports = (sequelize, DataTypes) => sequelize.define("Contato", 
    {
        idContato: {
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
        mensagem: {
            type: DataTypes.STRING(300),
            allowNull: false
        }
    },
    {
        tableName: 'CONTATO',
        timestamps: false,
    }
);
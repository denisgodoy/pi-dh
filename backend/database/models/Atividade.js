module.exports = (sequelize, DataTypes) => sequelize.define("Atividade", 
    {
        idAtividade: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        titulo: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING(450),
            allowNull: false
        },
        pontuacao: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dataInicio: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        dataTermino: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    },
    {
        tableName: 'ATIVIDADE',
        timestamps: false
    }
);
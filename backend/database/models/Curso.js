module.exports = (sequelize, DataTypes) => sequelize.define("Curso", 
    {
        idCurso: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        codigo: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        titulo: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        dataInicio: {
            type: DataTypes.DATE(),
            allowNull: false
        },
        dataTermino: {
            type: DataTypes.DATE(),
            allowNull: false
        }
    },
    {
        tableName: 'CURSO',
        timestamps: false,
    }
);
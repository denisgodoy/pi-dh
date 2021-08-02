module.exports = (sequelize, DataTypes) => {
    const Atividade = sequelize.define("Atividade", 
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
                type: DataTypes.STRING(10),
                allowNull: true
            },
            dataTermino: {
                type: DataTypes.STRING(10),
                allowNull: false
            }
        },
        {
            tableName: 'ATIVIDADE',
            timestamps: false
        }
    );

    Atividade.associate = function(models) {
        Atividade.belongsToMany(models.User, {
            through: models.AtividadeAluno,
            foreignKey: 'idAtividade',
            otherKey: 'idUser'
        });
        Atividade.belongsTo(models.AtividadeTurma, {
            foreignKey: 'idAtividade'
        });
    }
    return Atividade;
};

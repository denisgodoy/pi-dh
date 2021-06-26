module.exports = (sequelize, DataTypes) => {
    const AtividadeAluno = sequelize.define("AtividadeAluno", 
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            textField: {
                type: DataTypes.STRING(1000),
                allowNull: true
            }
        },
        {
            tableName: 'ATIVIDADE_ALUNO',
            timestamps: false,
        }
    );

    AtividadeAluno.associate = function(models) {
        AtividadeAluno.belongsTo(models.User, {
            foreignKey: 'idUser'
        });
        AtividadeAluno.belongsTo(models.Atividade, {
            foreignKey: 'idAtividade'
        });
    }
    return AtividadeAluno;
};

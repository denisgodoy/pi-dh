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
                allowNull: false
            },
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: true
            }
        },
        {
            tableName: 'ATIVIDADE_ALUNO',
            timestamps: false,
        }
    );
    // RELACIONAR O PROFESSOR PARA QUE ELE POSSA RECEBER E CORRIGIR A ATIVIDADE??
    AtividadeAluno.associate = function(models) {
        AtividadeAluno.belongsTo(models.User, {
            as: 'aluno',
            foreignKey: 'idUser'
        });
        AtividadeAluno.belongsTo(models.Atividade, {
            as: 'atividade',
            foreignKey: 'idAtividade'
        });
    }
    return AtividadeAluno;
};
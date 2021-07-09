module.exports = (sequelize, DataTypes) => {
    const AtividadeTurma = sequelize.define("AtividadeTurma", 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    },
    {
        tableName: 'ATIVIDADE_TURMA',
        timestamps: false,
    }
    );
    
    AtividadeTurma.associate = function(models) {
        AtividadeTurma.belongsTo(models.Turma, {
            foreignKey: 'idTurma'
        });
        AtividadeTurma.belongsTo(models.Atividade, {
            foreignKey: 'idAtividade'
        });
    }
    return AtividadeTurma;
};

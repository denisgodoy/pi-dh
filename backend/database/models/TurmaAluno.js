module.exports = (sequelize, DataTypes) => {
    const TurmaAluno = sequelize.define("TurmaAluno", 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    },
    {
        tableName: 'TURMA_ALUNO',
        timestamps: false,
    }
    );
    
    TurmaAluno.associate = function(models) {
        TurmaAluno.belongsTo(models.User, {
            foreignKey: 'idUser'
        });
        TurmaAluno.belongsTo(models.Turma, {
            foreignKey: 'idTurma'
        });
    }
    return TurmaAluno;
};

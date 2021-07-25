module.exports = (sequelize, DataTypes) => {
    const TurmaProfessor = sequelize.define("TurmaProfessor", 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    },
    {
        tableName: 'TURMA_PROFESSOR',
        timestamps: false,
    }
    );
    
    TurmaProfessor.associate = function(models) {
        TurmaProfessor.belongsTo(models.User, {
            foreignKey: 'idUser'
        });
        TurmaProfessor.belongsTo(models.Turma, {
            foreignKey: 'idTurma'
        });
    }
    return TurmaProfessor;
};

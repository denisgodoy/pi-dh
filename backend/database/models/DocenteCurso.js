module.exports = (sequelize, DataTypes) => {
    const DocenteCurso = sequelize.define("DocenteCurso", 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    },
    {
        tableName: 'CURSO_DOCENTE',
        timestamps: false,
    }
    );

    DocenteCurso.associate = function(models) {
        DocenteCurso.belongsTo(models.Docente, {
            as: 'docente',
            foreignKey: 'ID_DOCENTE'
        });
        DocenteCurso.belongsTo(models.Curso, {
            as: 'curso',
            foreignKey: 'ID_CURSO'
        });
    }

    return DocenteCurso;
};
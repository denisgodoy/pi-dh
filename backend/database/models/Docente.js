module.exports = (sequelize, DataTypes) => { 
    const Docente = sequelize.define("Docente", 
    {
        idDocente: {
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
        senha: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING(250),
            allowNull: false
        }
    },
    {
        tableName: 'DOCENTE',
        timestamps: false,
    }
);

    Docente.associate = function(models) {        
        Docente.belongsToMany(models.Curso, {
            through: models.DocenteCurso,
            foreignKey: 'ID_DOCENTE',
            otherKey: 'ID_CURSO'
        });
    }

    return Docente;
};
module.exports = function (sequelize, DataTypes) {
  const Team = sequelize.define('Team',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      area: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      establishedAt: {
        type: DataTypes.INTEGER
      }
    }, {
      paranoid: true,
      classMethods: {
        associate: function (models) {
          Team.hasMany(models.Player,
            {
              as: 'players',
              constraints: false,
              foreignKey: {
                name: 'teamId',
                allowNull: false
              }
            })
        }
      }
    })
  return Team
}

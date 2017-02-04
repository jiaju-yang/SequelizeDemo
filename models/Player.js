module.exports = function (sequelize, DataTypes) {
  const Player = sequelize.define('Player',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: DataTypes.TEXT,
        allowNull: false
        // field: 'first_name'
      },
      lastName: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {min: 0}
      }
    }, {
      // freezeTableName: true,
      paranoid: true,
      // hooks: {
      //   afterCreate: function (question, options) {
      //     //...
      //   }
      // },
      classMethods: {
        associate: function (models) {
          Player.belongsTo(models.Team,
            {
              as: 'team',
              constraints: false,
              foreignKey: {
                name: 'teamId',
                allowNull: false
              }
            })
        }
      }
    })
  return Player
}

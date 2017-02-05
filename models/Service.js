module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Service',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      startedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      endedAt: {
        type: DataTypes.DATE
      }
    }, {
      timestamps: false
    })
}

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('compulsory_routines', {
    name: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    routine: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'routines',
        key: 'routine_id'
      }
    }
  }, {
    tableName: 'compulsory_routines'
  });
};
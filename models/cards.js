/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cards', {
    card_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date_created: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    compulsory_routine: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'routines',
        key: 'routine_id'
      }
    },
    optional_routine: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'routines',
        key: 'routine_id'
      }
    },
    level: {
      type: DataTypes.STRING(3),
      allowNull: false
    }
  }, {
    tableName: 'cards'
  });
};

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('routines', {
    1: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'elements',
        key: 'element_id'
      }
    },
    2: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'elements',
        key: 'element_id'
      }
    },
    3: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'elements',
        key: 'element_id'
      }
    },
    4: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'elements',
        key: 'element_id'
      }
    },
    5: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'elements',
        key: 'element_id'
      }
    },
    6: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'elements',
        key: 'element_id'
      }
    },
    7: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'elements',
        key: 'element_id'
      }
    },
    8: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'elements',
        key: 'element_id'
      }
    },
    9: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'elements',
        key: 'element_id'
      }
    },
    10: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'elements',
        key: 'element_id'
      }
    },
    routine_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    diff1: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    },
    diff2: {
      type: DataTypes.INTEGER(2),
      allowNull: true
    }
  }, {
    tableName: 'routines'
  });
};

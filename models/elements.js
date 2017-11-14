/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elements', {
    element_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name_en: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    name_nl: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    fig_code: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    diff_trampoline: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    diff_dmt: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'elements'
  });
};

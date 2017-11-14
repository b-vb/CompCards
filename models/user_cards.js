/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_cards', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    card_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'cards',
        key: 'card_id'
      }
    }
  }, {
    tableName: 'user_cards'
  });
};

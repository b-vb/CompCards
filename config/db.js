const Sequelize = require('sequelize');
const env = require('./env');

const connection = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    dialect: env.DATABASE_DIALECT,
    define: {
        underscored: true,
    },
});

const db = {};

db.Sequelize = Sequelize;
db.connection = connection;

// Models/tables
db.cards = require('../models/cards.js')(connection, Sequelize);
db.compulsory_routines = require('../models/compulsory_routines.js')(connection, Sequelize);
db.elements = require('../models/elements.js')(connection, Sequelize);
db.routines = require('../models/routines.js')(connection, Sequelize);
db.users = require('../models/users')(connection, Sequelize);


// Relations
for (let i = 1; i < 11; i++) {
    db.routines.belongsTo(db.elements, { as: `element${i}`, foreignKey: `element_${i}` });
}
db.users.hasMany(db.cards);
db.cards.belongsTo(db.users);
db.routines.hasOne(db.compulsory_routines);
db.cards.belongsTo(db.routines, { as: 'optionalRoutine', foreignKey: 'optional_routine' });
db.cards.belongsTo(db.routines, { as: 'compulsoryRoutine', foreignKey: 'compulsory_routine' });

module.exports = db;

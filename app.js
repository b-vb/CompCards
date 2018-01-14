const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const db = require('./config/db');
const env = require('./config/env');

const app = express();

// Setup app
app.set('port', env.PORT);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));

// Setup routing
const elementsRouter = require('./routes/elementsRouter');

app.use('/elements', elementsRouter);

const routinesRouter = require('./routes/routinesRouter');

app.use('/routines', routinesRouter);

const compRoutinesRouter = require('./routes/compRoutinesRouter');

app.use('/compulsoryRoutines', compRoutinesRouter);

const cardsRouter = require('./routes/cardsRouter');

app.use('/cards', cardsRouter);

db.connection.sync({
    // force: true,
}).then(() => {
    app.listen(app.get('port'), () => console.error(`✔️ - Compcards is listening on port ${app.get('port')}`));
}).catch((err) => {
    console.error('❌ - Unable to connect to the database:', err);
});

const express = require('express'),
  logger = require('morgan'),
  bodyParser = require('body-parser');

const app = express();

//Setup app
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

//Setup database connection
const sequelize = require('./config/databaseConnection');
sequelize
  .authenticate()
  .then(() => {
    console.log('✔️ - Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('❌ - Unable to connect to the database:', err);
  });

//Setup routing  
const elementsRouter = require('./routes/elementsRouter');
app.use('/elements', elementsRouter);

app.listen(app.get('port'), () => console.log('✔️ - Compcards is listening on port ' + app.get('port')));
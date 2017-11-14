const express = require('express'),
      logger = require('morgan'),
      bodyParser = require('body-parser'),
      Sequelize = require('sequelize'); 

const app = express();

// Log requests to the console.
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const sequelize = new Sequelize('CompetitionCards', 'root', '0000', {
    host: 'localhost',
    dialect: 'mysql',  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    operatorsAliases: false,
    define: { timestamps: false }
});

//Models
const Elements = sequelize.import(__dirname + "/models/elements")

//Configure app
app.set('port', process.env.PORT || 3000);

sequelize
  .authenticate()
  .then(() => {
    console.log('✔️ - Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('❌ - Unable to connect to the database:', err);
  });

var router = express.Router();
//Routes
router.get('/elements', function (req, res) {
 
    Elements.findAll().then(elements => {
      res.send(elements)
    })
})

router.get('/elements/:elementId', function (req, res) {
    
    Elements.findById(req.params.elementId).then(elements => {
      res.send(elements)
    })
})

app.use('/', router);

app.listen(app.get('port'), () => console.log('✔️ - Compcards is listening on port ' + app.get('port')));

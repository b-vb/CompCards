const express = require('express'),
    router = express.Router();

const sequelize = require('../config/databaseConnection');
const Elements = sequelize.import(__dirname + "./../models/elements");

// invoked for any requested passed to this router
router.use(function (req, res, next) {
    // .. some logic here .. like any other middleware
    next();
});

router.get('/', function (req, res, next) {
    Elements.findAll().then(elements => {
        res.send(elements)
    })
})

router.get('/:elementId', function (req, res, next) {
    Elements.findById(req.params.elementId).then(elements => {
        res.send(elements)
    })
})

module.exports = router;
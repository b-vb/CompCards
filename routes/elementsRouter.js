const express = require('express'),
    router = express.Router();

const sequelize = require('../config/databaseConnection');
const Elements = sequelize.import(__dirname + "./../models/elements");

// invoked for any requested passed to this router
router.use(function (req, res, next) {
    // .. some logic here .. like any other middleware
    next();
});

//Get all elements from database
router.get('/', function (req, res, next) {
    Elements.findAll().then(elements => {
        res.send(elements)
    })
})

//Get element by Id from database
router.get('/:elementId', function (req, res, next) {
    Elements.findById(req.params.elementId).then(elements => {
        res.send(elements)
    })
})

//Save element in database
router.post('/new', function (req, res, next) {
    const newElement = Elements.create({
        name_en: req.body.name_en,
        name_nl: req.body.name_nl,
        fig_code: req.body.fig_code,
        diff_trampoline: req.body.diff_trampoline,
        diff_dmt: req.body.diff_dmt
    }).then(
        res.sendStatus(200)
    ).catch(err => {
        console.error(err);
    })
})

//Update element in database
router.put('/:elementId', function (req, res, next) {
    Elements.findById(req.params.elementId).then(element => {
        element.update({
            name_en: req.body.name_en,
            name_nl: req.body.name_nl,
            fig_code: req.body.fig_code,
            diff_trampoline: req.body.diff_trampoline,
            diff_dmt: req.body.diff_dmt
        }).then(
            res.sendStatus(200)
        ).catch(err => {
            console.error(err);
        })
    })
})

//Delete element from database
router.delete('/:elementId', function (req, res, next) {
    Elements.destroy({
        where: {
            element_id: req.params.elementId
        }
    }).then(element => {
        res.sendStatus(200);
    }).catch(err => {
        console.log(err);
    })
})

module.exports = router;
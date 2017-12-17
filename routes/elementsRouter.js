const express = require('express');
const db = require('../config/db');

const router = express.Router();

// invoked for any requested passed to this router
router.use((req, res, next) => {
    // .. some logic here .. like any other middleware
    next();
});

// Get all elements from database
router.get('/', (req, res) => {
    db.elements.findAll().then((elements) => {
        res.send(elements);
    }).catch((err) => {
        console.error(err);
    });
});

// Get element by Id from database
router.get('/:elementId', (req, res) => {
    db.elements.findById(req.params.elementId).then((elements) => {
        res.send(elements);
    }).catch((err) => {
        console.error(err);
    });
});

// Save element in database
router.post('/new', (req, res) => {
    db.elements.create({
        name_en: req.body.name_en,
        name_nl: req.body.name_nl,
        position: req.body.position,
        fig_code: req.body.fig_code,
        position_code: req.body.position_code,
        diff_trampoline: req.body.diff_trampoline,
        diff_dmt: req.body.diff_dmt,
    }).then(res.sendStatus(200)).catch((err) => {
        console.error(err);
    });
});

// Update element in database
router.put('/:elementId', (req, res) => {
    db.elements.findById(req.params.elementId).then((element) => {
        element.update({
            name_en: req.body.name_en,
            name_nl: req.body.name_nl,
            position: req.body.position,
            fig_code: req.body.fig_code,
            position_code: req.body.position_code,
            diff_trampoline: req.body.diff_trampoline,
            diff_dmt: req.body.diff_dmt,
        }).then(res.sendStatus(200)).catch((err) => {
            console.error(err);
        });
    });
});

// Delete element from database
router.delete('/:elementId', (req, res) => {
    db.elements.destroy({
        where: {
            id: req.params.elementId,
        },
    }).then(res.sendStatus(200))
        .catch((err) => {
            console.error(err);
        });
});

module.exports = router;

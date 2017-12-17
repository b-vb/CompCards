const express = require('express');
const db = require('../config/db');

const router = express.Router();

// Get all routines from database
router.get('/', (req, res) => {
    const elementsToInclude = [];
    for (let i = 1; i < 11; i += 1) {
        elementsToInclude.push({
            model: db.elements,
            as: `element${i}`,
        });
    }
    db.routines.findAll({
        include: elementsToInclude,
    }).then((routines) => {
        res.send(routines);
    });
});

// Get routine by Id from database
router.get('/:routineId', (req, res) => {
    db.routines.findById(req.params.routineId).then((routines) => {
        res.send(routines);
    });
});

// Save routine in database
router.post('/new', (req, res) => {
    db.routines.create(req.body)
        .then(res.sendStatus(200))
        .catch((err) => {
            console.error(err);
        });
});

// Update routine in database
router.put('/:routineId', (req, res) => {
    db.routines.findById(req.params.routineId).then((routine) => {
        routine.update({
            name_en: req.body.name_en,
            name_nl: req.body.name_nl,
            fig_code: req.body.fig_code,
            diff_trampoline: req.body.diff_trampoline,
            diff_dmt: req.body.diff_dmt,
        }).then(res.sendStatus(200))
            .catch((err) => {
                console.error(err);
            });
    });
});

// Delete routine from database
router.delete('/:routineId', (req, res) => {
    db.routines.destroy({
        where: {
            id: req.params.routineId,
        },
    })
        .then(res.sendStatus(200))
        .catch((err) => {
            console.error(err);
        });
});

module.exports = router;

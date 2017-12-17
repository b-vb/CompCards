const express = require('express');
const db = require('../config/db');

const router = express.Router();

// Get all compulsory routines from database
router.get('/', (req, res) => {
    db.compulsory_routines.findAll().then((routines) => {
        res.send(routines);
    }).catch((err) => {
        console.error(err);
    });
});

// Get compulsory routine by Id from database
router.get('/:compRoutineId', (req, res) => {
    db.compulsory_routines.findById(req.params.compRoutineId).then((routines) => {
        res.send(routines);
    }).catch((err) => {
        console.error(err);
    });
});

// Save compulsory routines in database
router.post('/new', (req, res) => {
    db.compulsory_routines.create({
        name: req.body.name,
        routine_id: req.body.routine_id,
    }).then(res.sendStatus(200)).catch((err) => {
        console.error(err);
    });
});

// Update compulsory routines in database
router.put('/:compRoutineId', (req, res) => {
    db.compulsory_routines.findById(req.params.compRoutineId).then((routine) => {
        routine.update({
            name: req.body.name,
            routine_id: req.body.routine_id,
        }).then(res.sendStatus(200)).catch((err) => {
            console.error(err);
        });
    });
});

// Delete card from database
router.delete('/:compRoutineId', (req, res) => {
    db.compulsory_routines.destroy({
        where: {
            id: req.params.compRoutineId,
        },
    })
        .then(res.sendStatus(200))
        .catch((err) => {
            console.error(err);
        });
});

module.exports = router;

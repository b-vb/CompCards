const express = require('express');
const db = require('../config/db');

const router = express.Router();

// Get all cards from database
router.get('/', (req, res) => {
    db.cards.findAll({
        include: [{
            model: db.routines,
            as: 'compulsoryRoutine',
        }, {
            model: db.routines,
            as: 'optionalRoutine',
        }],
    }).then((cards) => {
        res.send(cards);
    });
});

// Get card by Id from database
router.get('/:cardId', (req, res) => {
    db.cards.findById(req.params.cardId).then((card) => {
        res.send(card);
    });
});

// Save card in database
router.post('/new', (req, res) => {
    db.cards.create({
        user_id: req.body.user_id,
        name: req.body.name,
        compulsory_routine: req.body.compulsory_routine,
        optional_routine: req.body.optional_routine,
        level: req.body.level,
    }).then(res.sendStatus(200)).catch((err) => {
        console.error(err);
    });
});

// Update card in database
router.put('/:cardId', (req, res) => {
    db.cards.findById(req.params.cardId).then((card) => {
        card.update({
            user_id: req.body.user_id,
            name: req.body.name,
            compulsory_routine: req.body.compulsory_routine,
            optional_routine: req.body.optional_routine,
            level: req.body.level,
        })
            .then(res.sendStatus(200))
            .catch((err) => {
                console.error(err);
            });
    });
});

// Delete card from database
router.delete('/:cardId', (req, res) => {
    db.cards.destroy({
        where: {
            id: req.params.cardId,
        },
    }).then(res.sendStatus(200))
        .catch((err) => {
            console.error(err);
        });
});

module.exports = router;

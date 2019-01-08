const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route 
 */
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM events;`
    pool.query(queryText).then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

/**
 * POST route 
 */
router.post('/', (req, res) => {
    let newEvent = req.body;
    console.log('testing location', req.body);
    const queryText = `INSERT INTO "events" ("name", "date", "time", "description", "location") VALUES ($1, $2, $3, $4, $5);`
    pool.query(queryText, [newEvent.name, newEvent.date, newEvent.time, newEvent.description, newEvent.location ] ) 
    .then(result => {
        res.sendStatus(200);

    }).catch(error => {
        console.log('error on post query', error);
        res.sendStatus(500);
    })

});

// DELETE route
router.delete('/:id', (req, res) => {
    console.log('testing delete route', req.params.id);
    let id = req.params.id
    let queryText = `DELETE FROM events WHERE id = $1;`;
    pool.query(queryText, [id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in delete route', error);
        res.sendStatus(500)
    })
})

module.exports = router;
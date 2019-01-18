const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route 
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    let queryText = `SELECT * FROM events ORDER BY id ASC;`
    pool.query(queryText).then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

router.get('/org', rejectUnauthenticated, (req, res) => {
    let queryText = `SELECT * FROM "Organization";`
    pool.query(queryText).then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

router.get('/convention', rejectUnauthenticated, (req, res) => {
    let queryText = `SELECT * FROM "Convention";`
    pool.query(queryText).then((result) => {
        res.send(result.rows)
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

router.get('/count', rejectUnauthenticated, (req, res) => {
    let sql = `SELECT * FROM "person";`
    pool.query(sql).then((response) => {
        res.send(response.rows)
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});


router.get('/clickedInterest', rejectUnauthenticated, (req, res) => {
    let sql = `SELECT "events"."name" AS "events_name", "events"."time" AS "events_time","events"."location" AS "events_location" FROM "events"
    JOIN "Going_to_event" ON "Going_to_event"."event_id" = "events"."id"
    JOIN "person" ON "person"."id" = "Going_to_event"."person_id"
    WHERE "person"."id" = $1;`;
    pool.query(sql, [req.user.id ]).then((response) => {
        res.send(response.rows)
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});



/**
 * POST route 
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    let newEvent = req.body;
    console.log('testing location', req.body);
    const queryText = `INSERT INTO "events" ("name", "dates", "time", "description", "location") VALUES ($1, $2, $3, $4, $5);`
    pool.query(queryText, [newEvent.name, newEvent.dates, newEvent.time, newEvent.description, newEvent.location ] ) 
    .then(result => {
        res.sendStatus(200);

    }).catch(error => {
        console.log('error on post query', error);
        res.sendStatus(500);
    })

});

router.post('/interests', rejectUnauthenticated, (req, res) => {
    let sqlText = `INSERT INTO "Going_to_event" ("person_id", "event_id")
    VALUES ($1, $2)`
    pool.query(sqlText, [req.body.person_id, req.body.event_id ])
        .then(result => {
            res.sendStatus(200);
        }).catch(err => {
            console.log('error in post interest query:', err);
            res.sendStatus(500);
        })

});

router.put('/admins', rejectUnauthenticated, (req, res) => {
    let sqlText = `UPDATE "person" SET "admin"= $1 WHERE id=$2;`;
    console.log('admin post route', req.body);
    pool.query(sqlText, [true, req.body.data ])
        .then(result => {
            res.sendStatus(201);
        }).catch(err => {
            console.log('error in post admin query:', err);
            res.sendStatus(500);
        })

});


// DELETE route
router.delete('/:id', rejectUnauthenticated, (req, res) => {
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

router.delete('/:id/org', rejectUnauthenticated, (req, res) => {
    console.log('testing delete route', req.params.id);
    let id = req.params.id
    let queryText = `DELETE FROM "Organization" WHERE id = $1;`;
    pool.query(queryText, [id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in delete route', error);
        res.sendStatus(500)
    })
})

router.delete('/:id/convention', rejectUnauthenticated, (req, res) => {
    console.log('testing delete route', req.params.id);
    let id = req.params.id
    let queryText = `DELETE FROM "Convention" WHERE id = $1;`;
    pool.query(queryText, [id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in delete route', error);
        res.sendStatus(500)
    })
})

router.delete('/:id/count', rejectUnauthenticated, (req, res) => {
    console.log('testing delete route', req.params.id);
    let id = req.params.id
    let queryText = `DELETE FROM "person" WHERE id = $1;`;
    pool.query(queryText, [id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in delete route', error);
        res.sendStatus(500)
    })
})

router.delete('/interest/:id', rejectUnauthenticated, (req, res) => {
    console.log('testing DElete route', req.body);
    let queryText = `DELETE FROM "Going_to_event" WHERE "person_id"=$1 AND "event_id"=$2;`;
    pool.query(queryText, [req.body.person_id, req.body.event_id]).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in delete route', error);
        res.sendStatus(500)
    })
})


// PUT route 
router.put(`/:id`, rejectUnauthenticated, (req, res) => {
    const eventId = req.params.id;
    const {name, date, time, description, location } = req.body;
    console.log('in put route', req.body);
    const queryText = `UPDATE events SET "name"=$1, "date"=$2, "time"=$3, "description"=$4, "location"=$5
    WHERE id=$6;`;
    pool.query(queryText, [name, date, time, description, location, eventId ] )
    .then(result => {
        res.sendStatus(204);
    })
    .catch( (error) => {
        console.log('error in PUT', error);
        res.sendStatus(500);
    })
})// end of PUT route

router.put(`/:id/org`, rejectUnauthenticated, (req, res) => {
    const orgId = req.params.id;
    const {name, description} = req.body;
    console.log('in put route', req.body);
    const queryText = `UPDATE "Organization" SET "name"=$1, "description"=$2
    WHERE id=$3;`;
    pool.query(queryText, [name, description, orgId ] )
    .then(result => {
        res.sendStatus(204);
    })
    .catch( (error) => {
        console.log('error in PUT', error);
        res.sendStatus(500);
    })
})// end of PUT route

router.put(`/:id/convention`, rejectUnauthenticated, (req, res) => {
    const conventionId = req.params.id;
    const {name, description} = req.body;
    console.log('in put route', req.body);
    const queryText = `UPDATE "Convention" SET "name"=$1, "description"=$2
    WHERE id=$3;`;
    pool.query(queryText, [name, description, conventionId ] )
    .then(result => {
        res.sendStatus(204);
    })
    .catch( (error) => {
        console.log('error in PUT', error);
        res.sendStatus(500);
    })
})// end of PUT route




module.exports = router;
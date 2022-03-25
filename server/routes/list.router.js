const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...


module.exports = router;

router.get('/', (req, res) => {

    const sqlText = `SELECT * FROM cart ORDER BY item, purchased DESC;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

router.delete('/:id', (req, res) => {
    console.log('DELETE ', req.params.id);
    let id = req.params.id;

    const queryText = `
      DELETE FROM "cart"
      WHERE "id" = $1;
    `;

    const values = [id];

    pool.query(queryText, values)
        .then(result => {
            res.sendStatus(204);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        });

});

router.delete('/', (req, res) => {


    const queryText = `
      DELETE FROM "cart";
      `;

    pool.query(queryText )
        .then(result => {
            res.sendStatus(204);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        });

});
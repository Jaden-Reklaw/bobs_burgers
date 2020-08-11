const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//Status codes for modifying the database
const CREATED = 201;
const ACCEPTED = 202;
const INTERNAL_SERVER_ERROR = 500;

//Route for getting employees from database
router.get('/get', (req, res) => {
    // returns all employees
    console.log('connected to database for get request');
    const queryText = `SELECT * FROM  "employees";`;
    pool.query(queryText)
    .then( (result) => {
        res.send(result.rows);
    })
    .catch( (error) => {
        console.log(`Error on query ${error}`);
        res.sendStatus(INTERNAL_SERVER_ERROR);
    });
});

module.exports = router;
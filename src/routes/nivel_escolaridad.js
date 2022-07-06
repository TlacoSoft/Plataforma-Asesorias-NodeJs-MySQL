const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

// GET all Users
router.get('/get', (req, res) => {
    mysqlConnection.query('SELECT * FROM nivel_escolaridad', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;
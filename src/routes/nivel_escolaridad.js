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




// // DELETE An escolaridad
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM nivel_escolaridad  WHERE idNivel = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'nivel Deleted' });
        } else {
            console.log(err);
        }
    });
});

// // INSERT An User
router.post('/create', (req, res) => {
    const { nivel } = req.body;
    // id must be 0 to create new row
    const query = 'INSERT INTO `nivel_escolaridad` (`idNivel`, `nivel`) VALUES (NULL, ?)';
    mysqlConnection.query(query, [nivel], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'nivel Saved' });
        } else {
            console.log(err);
        }
    });
});

// //  Update User
router.put('/:id', (req, res) => {
    const { nivel } = req.body;
    const { id } = req.params;
    const query = 'UPDATE `nivel_escolaridad` SET `nivel` = ? WHERE `nivel_escolaridad`.`idNivel` = ?';
    mysqlConnection.query(query, [nivel, id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'nivel Updated' });
        } else {
            console.log(err);
        }
    });
});

module.exports = router;
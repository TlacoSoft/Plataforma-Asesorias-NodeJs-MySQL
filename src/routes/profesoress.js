const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

// GET all profesores
router.get('/get', (req, res) => {
    mysqlConnection.query('SELECT * FROM profesores', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});




// // DELETE profesores
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM profesores WHERE idProfesor = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'profeosres Deleted' });
        } else {
            console.log(err);
        }
    });
});

// // INSERT An User profesores
router.post('/create', (req, res) => {
    const { idAlumno, edad, sexo, titulo, cedula_profesional, grado_estudio, certificaciones } = req.body;
    // id must be 0 to create new row
    const query = 'INSERT INTO `profesores` (`idProfesor`, `idAlumno`, `edad`, `sexo`, `titulo`, `cedula_profesional`, `grado_estudio`, `certificaciones`) VALUES (NULL, ?,?,?,?,?,?,?)';
    mysqlConnection.query(query, [idAlumno, edad, sexo, titulo, cedula_profesional, grado_estudio, certificaciones], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Asesoria Saved' });
        } else {
            console.log(err);
        }
    });
});

// //  Update User profesores
router.put('/:id', (req, res) => {
    const { idAlumno, edad, sexo, titulo, cedula_profesional, grado_estudio, certificaciones } = req.body;
    const { id } = req.params;
    const query = 'UPDATE `profesores` SET `idAlumno` = ?, `edad` = ?, `sexo` = ?, `titulo` = ?, `cedula_profesional` = ?, `grado_estudio` = ?, `certificaciones` = ? WHERE `profesores`. `idProfesor` = ? ';
    mysqlConnection.query(query, [idAlumno, edad, sexo, titulo, cedula_profesional, grado_estudio, certificaciones, id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'asesoria Updated' });
        } else {
            console.log(err);
        }
    });
});

module.exports = router;
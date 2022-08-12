const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');

// GET all Users
router.get('/get', (req, res) => {
    mysqlConnection.query('SELECT * FROM asesoria INNER JOIN usuarios on usuarios.idUsuario = asesoria.alumno', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

// Obtener un usuario
router.get('/:id', (req, res) => {
    const { id } = req.params; 
    mysqlConnection.query('SELECT * FROM asesoria WHERE idAsesoria = ?', [id], (err, rows, fields) => {
      if (!err) {
        if(rows!=''){
          res.json(rows[0]);  
        }else{                
          res.json({status: "User not found"})
        }
      } else {
        console.log(err);
      }
    });
  });


// // DELETE An escolaridad
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('DELETE FROM asesoria WHERE idAsesoria = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'asesoria Deleted' });
        } else {
            console.log(err);
        }
    });
});

// // INSERT An User
router.post('/create', (req, res) => {
    const { tema, encargado, alumno, fecha, hora, modalidad, estatus } = req.body;
    // id must be 0 to create new row
    const query = 'INSERT INTO `asesoria` (`idAsesoria`, `tema`, `encargado`, `alumno`, `fecha`, `hora`, `modalidad`, `estatus`) VALUES (NULL,?,?,?,?,?,?,?)';
    mysqlConnection.query(query, [tema, encargado, alumno, fecha, hora, modalidad, estatus], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Asesoria Saved' });
        } else {
            console.log(err);
        }
    });
});

// //  Update User
router.put('/:id', (req, res) => {
    const { tema, encargado, alumno, fecha, hora, modalidad, estatus } = req.body;
    const { id } = req.params;
    const query = 'UPDATE `asesoria` SET `tema` = ?, `encargado` = ?, `alumno` = ?, `fecha` = ?, `hora` = ?, `modalidad` = ?, `estatus` = ? WHERE `asesoria`.`idAsesoria` = ? ';

    mysqlConnection.query(query, [tema, encargado, alumno, fecha, hora, modalidad, estatus, id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'asesoria Updated' });
        } else {
            console.log(err);
        }
    });
});

module.exports = router;
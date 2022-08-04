const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// Obtener todos los usuarios
router.get('/get', (req, res) => {
  mysqlConnection.query('SELECT * FROM usuarios', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// Obtener un usuario
router.get('/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM usuarios WHERE idUsuario = ?', [id], (err, rows, fields) => {
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

// Ruta para hacer el login
router.post("/login", (req,res) => {

  let correo =  req.body.correo
  let password = req.body.password 

  query = `SELECT * FROM usuarios WHERE correo = '${correo}' AND password = '${password}'`
 
  mysqlConnection.query(query, (err, rows, fields) => {
            if (!err) {
              if(rows!=''){
                res.json(rows[0]);  
              }else{                
                res.json({status: "User not found"})
              }
            } else {
              return res.status(500).json( {
                message: 'Error',
                error: err
              })
            }
  });
});

// // DELETE An User
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM usuarios WHERE idUsuario = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'User Deleted'});
    } else {
      console.log(err);
    }
  });
});

// // INSERT An User
router.post('/create', (req, res) => {
  const {nombre,apellido_p,apellido_m,edad,sexo,correo,password,telefono,imagen} = req.body;

  mysqlConnection.query(`SELECT * FROM usuarios WHERE correo = '${correo}'`, (err,rows) => {
    if(!err){
      if(rows!=''){
        res.json({status: 'El correo ya ha sido registrado'});
      }else
      mysqlConnection.query('INSERT INTO `usuarios` (`idUsuario`, `nombre`, `apellido_p`, `apellido_m`, `edad`, `sexo`, `correo`, `password`, `telefono`, `imagen`) VALUES (NULL,?,?,?,?,?,?,?,?,?)', [nombre,apellido_p,apellido_m,edad,sexo,correo,password,telefono,imagen], (err, rows, fields) => {
        if(!err) {
          res.json({status: 'Usuario registrado'});
          } else {
            console.log(err);
          }
        });
      }else{
      return res.status(500).json( {
        message: 'Error',
        error: err
      })
    }
  });
});

// //  Update User
router.put('/:id', (req, res) => {
  const { nombre,apellido_p,apellido_m,edad,sexo,correo,password,telefono,imagen } = req.body;
  const { id } = req.params;

  mysqlConnection.query('UPDATE `usuarios` SET `nombre` = ?, `apellido_p` = ?, `apellido_m` = ?, `edad` = ?, `sexo` = ?, `correo` = ?, `password` = ?, `telefono` = ?, `imagen` = ? WHERE `idUsuario` = ? ', [nombre,apellido_p,apellido_m,edad,sexo,correo,password,telefono,imagen,id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Usuario actualizado'});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;
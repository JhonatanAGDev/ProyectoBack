const { application } = require('express');
const { conection } = require('../databaseConection');

const ruta = require('express').Router();

/*Login*/

ruta.get('/login', (req, res) => {

    res.send('Ruta Login');

});

/*Busqueda por ID*/

ruta.get('/bd/:id', (req, res) => {

    conection.query(
        `SELECT * FROM usuario WHERE IdUser = ${req.params.id}`,
        function (err, results) {
            res.json(results);
        }
    )
});

/*Eliminar datos*/

ruta.delete('/delete/:id', (req, res) => {

    conection.query(
        `DELETE FROM usuario WHERE IdUser=${req.params.id}`,
        function (err, results) {
            res.json(results);
        }
    )
});

/*Agregar datos*/

ruta.post('/agregar', (req, res) => {

    let sql = `INSERT INTO usuario (IdUser, Nombre) VALUES ('${req.body.IdUser}', '${req.body.Nombre}')`;

    conection.query (sql, (err,rows) =>{
        if(!err) {
            res.json('Insertado');
        }else{
            console.error(err);
        }
    });
});

/*Actualizar datos*/

ruta.put('/update/:id', (req, res) => {

    conection.query (`UPDATE usuario SET ? WHERE IdUser = ?`,[req.body, req.params.id], (err,rows) =>{
        if(!err) {
            res.json('Actualizado');
        }else{
            console.error(err);
        }
    });
});

/*Muestra la tabla usuarios con las llaves foraneas*/

ruta.get('/users', (req, res) => {

    conection.query(
        'SELECT usuario.Nombre, rol.dess FROM userrol INNER JOIN rol, usuario WHERE userrol.IdRol = rol.IdRol AND userrol.IdUser = usuario.IdUser',
        function (err, results) {
            res.json(results);
        },
    )
});

/*Muestra todos los datos de la tabla usuario*/

ruta.get('/usuarios', (req, res) => {

    conection.query(
        'SELECT * FROM usuario',
        function (err, results) {
            res.json(results);
        }
    )
});

/*Muestra todos los datos de la tabla rol*/

ruta.get('/rol', (req, res) => {

    conection.query(
        'SELECT * FROM rol',
        function (err, results) {
            res.json(results);
        }
    )
});

/*Muestra todos los datos de la tabla User Rol*/

ruta.get('/userrol', (req, res) => {

    conection.query(
        'SELECT * FROM userrol',
        function (err, results) {
            res.json(results);
        }
    )
});


module.exports = ruta;
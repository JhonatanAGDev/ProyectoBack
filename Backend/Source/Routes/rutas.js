const { application } = require('express');
const { conection } = require('../databaseConection');

const ruta = require('express').Router();

ruta.get('/login', (req, res) => {

    res.send('Ruta Login');

});

ruta.get('/users', (req, res) => {

    conection.query(
        'select usuario.Nombre, rol.dess from userrol inner join rol, usuario where userrol.IdRol = rol.IdRol and userrol.IdUser = usuario.IdUser',
        function (err, results) {
            res.json(results);
        },
    )
});

ruta.get('/rol', (req, res) => {

    conection.query(
        'SELECT * FROM rol',
        function (err, results) {
            res.json(results);
        }
    )
});

ruta.get('/userrol', (req, res) => {

    conection.query(
        'SELECT * FROM userrol',
        function (err, results) {
            res.json(results);
        }
    )
});


module.exports = ruta;
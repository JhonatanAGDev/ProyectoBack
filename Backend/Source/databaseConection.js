const mysql = require('mysql2');

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'administracion'
})

if (conection) {
    console.log('conexion a la bd');
} else {

    return;
}


exports.conection = conection;
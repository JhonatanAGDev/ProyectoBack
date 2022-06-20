console.log('Hola soy servidor de Jhonatan');

const express = require('express');
const app = express();
const port = (process.env.PORT || 3000);

app.set('port', port);
app.listen(app.set('port'));

app.use('/', require('../Source/Routes/rutas.js'));
app.use('/users', require('../Source/Routes/rutas.js'));


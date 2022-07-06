console.log('Hola soy servidor de Jhonatan');

const express = require('express');
const app = express();
const port = (process.env.PORT || 3000);

const cors = require('cors');
app.use(express.json());
app.use(cors());

app.set('port', port);
app.listen(app.set('port'));

app.use('/', require('../Source/Routes/rutas.js'));
app.use('/users', require('../Source/Routes/rutas.js'));


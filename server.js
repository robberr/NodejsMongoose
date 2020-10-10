const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/datadb', { useNewUrlParser: true, useUnifiedTopology: true })
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Conectado a la BD...');

});

connection.on('error', (err) => {
    console.error('Error con la BD:', err.message);
});
app.listen(1337, () => { console.log('app listen in 1337', 1337) });

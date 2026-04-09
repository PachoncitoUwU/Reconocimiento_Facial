const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'reconocimiento',
    port: 3306,
    ssl: false // Desactiva SSL
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos: ', err.stack);
        return;
    }
    console.log('Conectado a la base de datos MySQL. ID de conexión: ' + connection.threadId);
});


module.exports = connection;


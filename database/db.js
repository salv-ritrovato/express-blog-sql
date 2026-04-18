const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'supersecretusername',
    password: process.env.DB_PASSWORD || 'thenumberz',
    database: process.env.DB_NAME || 'thenuuumberz_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('I am connected');
});

module.exports = connection;
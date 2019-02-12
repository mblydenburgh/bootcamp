const connection = require('./config/connection.js');

console.log(connection.then(function(connection){
    connection.query(`SELECT * FROM parties`)
}));
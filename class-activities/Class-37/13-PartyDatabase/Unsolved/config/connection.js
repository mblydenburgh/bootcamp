const mysql = require('promise-mysql');

const connection = async function () {
    await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '#SadieMombo1114',
            database: 'parties_db'
        })
        .then((err) => {
            console.log(err)
        })
}
module.exports = connection;
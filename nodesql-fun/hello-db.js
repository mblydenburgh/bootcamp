const mysql = require('mysql');

const cursor = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'#SadieMombo1114'
});

cursor.connect(function(error){
    if(error) throw error;
    console.log(`Connected`);
    cursor.query("CREATE DATABASE testdb",)
})
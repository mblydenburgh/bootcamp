const mysql = require("promise-mysql");
let cursor;

// const cursor = mysql.createConnection({
//     host: "localhost",
//     user:"root",
//     password:"#SadieMombo1114",
//     database:"playlist_db"
// });

// const databaseConnect = function(){
//     return new Promise(function(resolve,reject){
//         cursor.connect(function(err){
//             if (err){
//                 reject(err)
//             }
//             resolve(console.log(`Connected`));
//         });
//     })
// }

// databaseConnect().then(function(){
//     sql = `SELECT * FROM playlist`
//     cursor.query(sql);
//     cursor.end();
// });

mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"#SadieMombo1114",
    database:"playlist_db"
}).then(function(conn){
    cursor = conn;
    const result = cursor.query(`SELECT * from playlist`);
    // cursor.end();
    return result;
}).then(function(rows){
    rows.map(entry=>console.log(entry.title));
})
.catch(function(error){
    console.log(error);
});



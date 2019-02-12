const express = require('express');
const mysql = require('promise-mysql');
const expressBars = require('express-handlebars');

const PORT = process.env.PORT || 3001;

const app = express();

app.engine("handlebars", expressBars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
    mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "#SadieMombo1114",
        database: "wish_db"
    }).then(async function (connection) {
        let data = await connection.query(`SELECT * FROM wishlist`);
        console.log(data);
        res.render('index', { wishes: data });
    })
});

app.post('/', function (req, res) {
    console.log(req.body.wish);
    mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "#SadieMombo1114",
        database: "wish_db"
    }).then(async function(connection){
        await connection.query(`INSERT INTO wishlist (wish) VALUES (?)`,[req.body.wish]);
        res.redirect('/');
    })
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
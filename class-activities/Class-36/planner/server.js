const express = require('express');
const mysql = require('promise-mysql');
const expressBars = require('express-handlebars');

const PORT = process.env.PORT || 3001;

const app = express();

let sql;

app.engine("handlebars", expressBars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

async function connectDB(sql,values) {
    const connection = await mysql.createConnection({
        host: '127.0.0.1',
        user: "root",
        password: '#SadieMombo1114',
        database: 'planner_db'
    })

    if(values){
        const data = await connection.query(sql,values);
        return data;
    }
    else{
        const data = await connection.query(sql);
        return data;
    }
}

app.get('/', async function (req, res) {
    sql = `SELECT * FROM plans`;
    let data = await connectDB(sql);
    res.render('index',{plans:data});
});

app.post('/', async function(req,res){
    sql = `INSERT INTO plans (plan) VALUES (?)`
    values = [req.body.plan];
    console.log(values);
    let data = await connectDB(sql,values);
    console.log(data);
});

app.delete('/api/cats/:id', async function(req,res){
    const id = req.params.id;
    sql = `DELETE FROM plans WHERE id = ?`
    values = [id];
    let data = await connectDB(sql,values);
    console.log(data);
})



app.listen(PORT, () => console.log(`Serving fools at port ${PORT}`));
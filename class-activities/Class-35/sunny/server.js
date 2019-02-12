const express = require('express');
const mysql = require('promise-mysql');

const PORT = process.env.PORT || 4242;

const app = express();

function queryCast(){
    return mysql.createConnection({
        host:'127.0.0.1',
        user:'root',
        password:'#SadieMombo1114',
        database:'sunny_db'
    })
    .then(async function(connection){
        let data = await connection.query(`SELECT * FROM actors`);
        connection.end();
        return data;
    })
}

function queryCoolness(){
    return mysql.createConnection({
        host:'127.0.0.1',
        user:'root',
        password:'#SadieMombo1114',
        database:'sunny_db'
    })
    .then(async function(connection){
        let data = await connection.query(`SELECT * FROM actors ORDER BY coolness_points DESC`);
        connection.end();
        return data;
    })
}

function queryAttitude(query){
    return mysql.createConnection({
        host:'127.0.0.1',
        user:'root',
        password:'#SadieMombo1114',
        database:'sunny_db'
    })
    .then(async function(connection){
        let data = await connection.query(`SELECT * FROM actors WHERE attitude = ?`,[query]);
        connection.end();
        return data;
    })
}

app.get('/cast',async (req,res)=>{
    const data = await queryCast();
    console.log(data);
    res.send(await queryCast());
});

app.get('/coolness-chart',async (req,res)=>{
    res.send(await queryCoolness());
});

app.get('/attitude-chart/:att',async (req,res)=>{
    const attitude = req.params.att;
    res.send(await queryAttitude(attitude));
});

app.get('*',(req,res)=>{
    res.send(`Unable to find route`)
})

app.listen(PORT,()=>console.log(`Serving fools at port ${PORT}`));
const inquirer = require("inquirer");
const mysql = require("promise-mysql");
let sql;
let result;


function connectToDB(sql,artist){
    mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'#SadieMombo1114',
        database:'top_songsDB'
    }).then(function(connection){
        result = connection.query(sql,[artist]);
        console.log(`result:${result}`);
    }).catch(function(error){
        console.log(error);
    })
}

function initialPrompt(){
    inquirer.prompt([
        {
            type:'list',
            name:'initialPrompt',
            message:'Choose a query',
            choices:['Songs by Artist','Multiple Top 5000','Songs by Rating Range','Specific Song']
        }
    ]).then(function(response){
        let {initialPrompt} = response;
        // console.log(initialPrompt);
        switch (initialPrompt){
            case 'Songs by Artist':
                queryArtist();
                break;
            case 'Multiple Top 5000':
                getMultipleTop();
                break;
            case 'Songs by Rating Range':
                getSongsByRange();
                break;
            case 'Specific Song':
                getSong();
                break;
        }
    })
}

function queryArtist(){
    inquirer.prompt([
        {
            name:'artist',
            message:'Choose an artist to search for:'
        }
    ]).then(function(error,response){
        if (error) throw error;
        let {artist} = response;
        sql = 'SELECT * FROM top_songs WHERE artist = ?';
        connectToDB(sql,artist);
    }).catch(function(error){
        console.log(error);
    })
}

initialPrompt();
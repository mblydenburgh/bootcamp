const inquirer = require('inquirer');
const fs = require('fs');
const axios = require('axios');
const moment = require('moment');
const Actor = require('./Actor');


function Actor({name:name,birthday:birthday,country:country,url:url,gender:gender}){
    this.name = name
    this.birthday = birthday
    this.country = country
    this.gender = gender
    this.url = url

    this.showTheDeets = function(){
        console.log(`Name: ${this.name}`);
        updateLog(`Name: ${this.name}\n`)
        console.log(`Birthday: ${this.birthday}`);
        updateLog(`Birthday: ${this.birthday}\n`)
        console.log(`Country: ${this.country}`);
        updateLog(`Country: ${this.country}\n`);
        console.log(`Gender: ${this.gender}`);
        updateLog(`Gender: ${this.gender}\n`);
        console.log(`url: ${this.url}`);
        updateLog(`url: ${this.url}\n`);
    }
}

function Show({name:name,genre:genre,rating:rating,network:network,summary:summary}){
    this.name = name
    this.genre = genre
    this.rating = rating
    this.network = network
    this.summary = summary
}

function promptActor(){
    inquirer.prompt([
        {
            name:"actor",
            message:"Enter an actor to search for:"
        }
    ])
    .then(function(response){
        console.log(`Searching for ${response.actor}`);
        getActorData(response.actor);
    });
}

function promptTVShow(){
    inquirer.prompt([
        {
            name:"show",
            message:"Enter a show to search for:"
        }
    ])
    .then(function(response){
        console.log(`Searching for ${response.show}`)
    });
}

function getActorData(query){
    let url = `http://api.tvmaze.com/search/people?q=${query}`;
    axios.get(url)
    .then(function(response){
        // console.log(response.data)
        let actors = response.data;
        actors.map(actor=>{
            // console.log(actor);
            const {url,name,birthday,gender} = actor.person;
            const {name:country} = actor.person.country;
            // console.log(name,birthday,gender,country);
            let newActor = new Actor({name:name,birthday:birthday,gender:gender,country:country,url:url});
            newActor.showTheDeets();
        })
    })
    .catch(function(error){
        console.log(error)
    });
}

function getShowData(query){

}

function updateLog(string){
    let time = moment();
    fs.appendFile(`log.txt`,`${time}:  ${string}`,function(error){
        if(error){
            console.log(error);
        }
    })
}

function promptUser(){
    inquirer.prompt([
        {
            type:"list",
            name:"action",
            message:"Please select a type of query:",
            choices:["Actor","TV Show"]
        }
    ])
    .then(function(response){
        switch (response.action) {
            case 'Actor':
                console.log(`Searching for Actor`);
                updateLog(`Searching for Actor\n`)
                promptActor();
                break;
        
            case 'TV Show':
                console.log(`Searching for TV Show`);
                updateLog(`Searching for TV Show\n`)
                promptTVShow();
                break;
        }
    })
}

promptUser();
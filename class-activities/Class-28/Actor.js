const updateLog = require('./cli');

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

module.exports = Actor;
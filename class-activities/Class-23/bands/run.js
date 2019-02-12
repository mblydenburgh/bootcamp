
let genre = process.argv[2];

let bands = require('./bands');
//console.log(Object.entries(bands));

let bandsArray = Object.entries(bands);

if (genre) {
    for (let i = 0; i < bandsArray.length; i++) {
        if (bandsArray[i][0] === genre) {
            console.log(`A ${bandsArray[i][0]} band is ${bandsArray[i][1]}`);
        }
    }
} else {
    for (let i = 0; i < bandsArray.length; i++) {
        console.log(`A ${bandsArray[i][0]} band is ${bandsArray[i][1]}`);
    }
}


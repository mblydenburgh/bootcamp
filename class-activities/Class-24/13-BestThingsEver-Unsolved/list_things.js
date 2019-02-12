const fs = require('fs');

let data = fs.readFile("best_things_ever.txt", "utf8", function (error, data) {
    if (error) {
        console.log(error);
    }

    let dataArr = data.split(", ");

    dataArr.map(thing=>{console.log(thing)});
});


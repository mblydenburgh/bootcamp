// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// ...


//http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy

// Grab or assemble the movie name and store it in a variable called "movieName"
let movieArgs = process.argv.length;
console.log(movieArgs.length);
let movie = [];
for(let i = 2; i < movieArgs.length; i++){
    movie.push(movieArgs[i])
}

console.log(movie);

var movieName = "";
// ...


// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


// This line is just to help us debug against the actual URL.
//console.log(queryUrl);


// Then create a request to the queryUrl
// ...

// If the request is successful
// ...

// Then log the Release Year for the movie
// ...
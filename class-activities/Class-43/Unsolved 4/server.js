// Using the tools and techniques you learned so far,
// you will scrape a website of your choice, then place the data
// in a MongoDB database. Be sure to make the database and collection
// before running this exercise.

// Consult the assignment files from earlier in class
// if you need a refresher on Cheerio.

// Dependencies
var express = require("express");
var mongojs = require("mongojs");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");

// Initialize Express
var app = express();

// Database configuration
var databaseUrl = "scraper";
var collections = ["scrapedData"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Main route (simple Hello World Message)
app.get("/", function(req, res) {
  res.send("Hello world");
});

// TODO: make two more routes

// Route 1
// =======
// This route will retrieve all of the data
// from the scrapedData collection as a json (this will be populated
// by the data you scrape using the next route)

app.get("/scrape",(req,res) => {
  request("https://www.beeradvocate.com/beer/", function(error, response, html) {
    var $ = cheerio.load(html);
  
    // An empty array to save the data that we'll scrape
    var results = [];
  
    // Select each element in the HTML body from which you want information.
    // NOTE: Cheerio selectors function similarly to jQuery's selectors,
    // but be sure to visit the package's npm page to see how it works
    $("div#rating_fullview_container").each(function(i, element) {

      var beer = $(element).find("h6").text();
      var score= $(element).find("span.BAscore_norm").text();
  
      db.scrapper.insert({"Name":beer,"Rating":score});

      // Save these results in an object that we'll push into the results array we defined earlier
      results.push({
        beer: beer,
        score:score
      });
    });
  
    // Log the results once you've looped through each of the elements found with cheerio
    // console.log(results);
    res.json(results);
  });
});

// Route 2
// =======
// When you visit this route, the server will
// scrape data from the site of your choice, and save it to
// MongoDB.
// TIP: Think back to how you pushed website data
// into an empty array in the last class. How do you
// push it into a MongoDB collection instead?
app.get("/data",(req,res) => {
  request("/scrape",(error,response) => {
    console.log(response);
  })
  // console.log(data);
});


/* -/-/-/-/-/-/-/-/-/-/-/-/- */

// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});

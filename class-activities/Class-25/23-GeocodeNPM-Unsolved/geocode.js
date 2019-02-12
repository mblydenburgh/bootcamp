// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.

// ========================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
var NodeGeocoder = require("node-geocoder");

// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "tfcTIpExeGv5RAsoPdjc4PIxLNnPz8zh"
};

// Create a geocoder object that can query the mapquest API
var geocoder = NodeGeocoder(options);


// Take in the command line arguments
const city = process.argv[2];
const state = process.argv[3];


// Build your address as an array or string
// const url = `http://www.mapquestapi.com/geocoding/v1/address?key=${options.apiKey}&location=${city},${state}`;

geocoder.geocode(`city:${city}, state:${state}`)
  .then(response => { console.log(JSON.stringify(response,null,2)) })
  .catch(error => { console.log(error) });


// Then use the geocoder object to search the address

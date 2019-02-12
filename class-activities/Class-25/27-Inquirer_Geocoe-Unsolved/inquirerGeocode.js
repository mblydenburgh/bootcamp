// Instructions:
// Convert the below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs.
// Make sure your new code provides the exact same output as it did with process.argv.

// HINT: Don't forget to create your package.json file and save the correct packages to it.
// HINT: You should not need to change *that much* code.

// ========================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
var NodeGeocoder = require("node-geocoder");
const inquirer = require("inquirer");
let landmark;

// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "tfcTIpExeGv5RAsoPdjc4PIxLNnPz8zh"
};

var geocoder = NodeGeocoder(options);

inquirer.prompt([
  {
    type: "input",
    message: "enter a landmark to geocode",
    name: "landmark"
  }
]).then(response => {
  if (response.landmark !== "") {
    landmark = response.landmark;
    console.log(landmark);
    doGeocode(landmark);
  }

  else {
    console.log(`please enter a landmark`)
  }
});

let doGeocode = function (landmark) {
  geocoder.geocode(landmark, (error, response) => {
    if (error) {
      console.log(`womp womp`);
    } else {
      console.log(response);
    }
  })
}


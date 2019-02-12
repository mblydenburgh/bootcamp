// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your name?",
      name: "name"
    },
    // Here we create a basic password-protected text prompt.
    {
      type: "password",
      message: "Set a safe word",
      name: "password"
    },
    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "What would you like to eat?",
      choices: ["banana","a bagel","tofo","milksteak"],
      name: "food"
    },
    // Here we ask the user to confirm.
    {
      type: "confirm",
      message: "Do you dare eat?",
      name: "confirm",
      default: true
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (inquirerResponse.confirm) {
      console.log(`\nWelcome, ${inquirerResponse.name}`);
      console.log(`You would eat ${inquirerResponse.food}, fatty`);
    }
    else {
      console.log(`\nNO SOUP FOR ${(inquirerResponse.name).toUpperCase()}!\n`);
    }
  });

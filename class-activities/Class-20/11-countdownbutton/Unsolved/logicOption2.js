// Initialize Firebase (YOUR OWN APP)
firebase.initializeApp(config);
let database = firebase.database();

// Set Initial Counter
var initialValue = 100;
var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
database.ref().on("value", function (snapshot) {
  // Change the html to reflect the initial value.
  $(`#click-value`).text(snapshot.val().counter);
  // Print the initial data to the console.
  console.log(`counter: ${clickCounter}`);
  // Change the clickCounter to match the data in the database
  clickCounter = snapshot.val().counter;
  // Log the value of the clickCounter
  console.log(`database update clickCounter: ${clickCounter}`);
},
  // If any errors are experienced, log them to console.
  function (errorObject) {
    console.log(`The read failed ${errorObject}`);
  });

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function () {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Save new value to Firebase
  database.ref().set({ counter: clickCounter });

  // Log the value of clickCounter
  console.log(`click event clickCounter:${clickCounter}`);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function () {

  // Set the clickCounter back to initialValue
  clickCounter = 100;

  // Save new value to Firebase
  database.ref().set({ counter: 100 });

  // Log the value of clickCounter
  console.log(`reset counter to ${clickCounter}`);

  // Change the HTML Values

});

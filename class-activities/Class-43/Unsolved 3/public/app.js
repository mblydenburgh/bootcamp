/* TODO:

  1. Make a reusable function for creating a table body in index.html with the results from your MongoDB query
  Each row should have info for one animal.
  

  2. Make two AJAX functions that fire when users click the two buttons on index.html.
      a. When the user clicks the Weight button, the table should display the animal data sorted by weight.
      b. When the user clicks the Name button, the table should display the animal data sorted by name.

  Good luck!

  *Hint*: We don't want to keep adding to the table with each button click. We only want to show the new results.
  What can we do to the table to accomplish this?

  *Bonus*: Write code to set an 'active' state on the column header. It should make the color sorted-by column red.
  *Bonus*: Add additional ways to sort (e.g. by class or number of legs)
*/

// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in data (JSON) and creates a table body
function displayResults(data) {
  // Add to the table here...
  console.log(data);
  const tableBody = document.querySelector("tbody");
  tableBody.innerHTML = "";
  data.forEach(item => {
    console.log(item);
    const itemInfo = Object.entries(item);
    console.log(itemInfo);
    const newRow = document.createElement("tr");
    for(let i = 1; i < itemInfo[i].length; i++){
      newRow.innerHTML = `
      <td>${itemInfo[i][1]}</td>
      <td>${itemInfo[i+1][1]}</td>
      <td>${itemInfo[i+2][1]}</td>
      <td>${itemInfo[i+3][1]}</td>
      <td>${itemInfo[i+4][1]}</td>
      `;
      tableBody.appendChild(newRow);
    }


  });

}

$.getJSON("/all", function(data) {
  // Call our function to generate a table body
  displayResults(data);
});

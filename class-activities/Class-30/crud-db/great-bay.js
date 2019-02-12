const inquirer = require("inquirer");
const mysql = require("mysql");


var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "itM:5tqVbFJ:DMe",
    database: "greatBay_db"
});



function initialPrompt() {
    inquirer.prompt([{
        type: 'list',
        name: 'initialChoice',
        choices: ['Bid', 'Sell'],
        message: 'Would you like to place a bid or sell an item?'
    }]).then(function (response) {
        switch (response.initialChoice) {
            case 'Bid':
                placeBid();
                break;
            case 'Sell':
                createItem();
                break;
        }
    })
};


function createItem() {
    inquirer.prompt([{
        type: "input",
        name: "itemType",
        message: "What type of item would you like to list?"
    }]).then((response) => {
        var type = response.itemType;

        inquirer.prompt([{
            type: "input",
            name: "itemName",
            message: "What would you like your item to be named?"
        }]).then((response) => {
            var name = response.itemName;

            inquirer.prompt([{
                type: "input",
                name: "bid",
                message: "What would you like the opening bid to be?"
            }]).then((response) => {
                var bid = response.bid;

                console.log("Adding new item...\n");
                var query = connection.query(
                  "INSERT INTO auctions SET ?",
                  {
                    type: type,
                    name: name,
                    bid: bid,
                  },
                  function(err, res) {
                    console.log(res.affectedRows + " item inserted!\n");

                  }
                );
              
                // logs the actual query being run
                console.log(query.sql);
            })
        })
    })
};

function listCurrentItems() {

};

function placeBid() {
    inquirer.prompt([{
        message: "How much would you like to bid for this item?",
        name: "Bid"
}]).then((res) => {
        connection.query(`UPDATE auctions SET bid = ?`, [res.bid], function (err, res){
            if(err) throw err;
            console.log("Updated bid!");
        })
    })
};




//start great-bay
initialPrompt();
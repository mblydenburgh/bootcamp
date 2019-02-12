const fs = require('fs');
const transaction = process.argv[2];
const cash = process.argv[3];
var dataArr;

fs.readFile("bank.txt", "utf8", function (error, data) {
    if (error) {
        console.log(error);
    }

    dataArr = data.split(", ");


    switch (transaction) {
        case 'total':
            console.log(`running total`);
            let total = dataArr.reduce(function (acc, curr) {
                return (Number(acc) + Number(curr));
            });
            console.log(`You have $${total.toFixed(2)}`);
            break;

        case 'deposit':
            if(cash){
                fs.appendFile("bank.txt",`, ${cash}`,function(error){
                    if(error){
                        console.log(error)
                    }
                });
                console.log(`Deposited $${cash}`);
            }
            else{
                console.log(`Please enter an amount to deposit`)
            }
            break;

        case 'withdraw':
            if(cash){
                fs.appendFile("bank.txt",`, ${cash}`,function(error){
                    if(error){
                        console.log(error)
                    }
                    console.log(`Withdrew $${cash}`)
                });
            }
            else{
                console.log(`Please enter an amount to withdraw`)
            }

        default:
            console.log(`Please enter a valid transaction`);
            break;
    }

});


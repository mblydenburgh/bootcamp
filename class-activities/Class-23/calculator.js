// node calculator.js [operator] [x] [y]

let operator = process.argv[2];
let x = Number(process.argv[3]);
let y = Number(process.argv[4]);
//console.log(operator,x,y);

//console.log(new Boolean(NaN));

if (isNaN(x) || isNaN(y)) {
    console.log(`Enter a number please`);
} else {
    switch (operator) {
        case `add`:
            //add
            console.log(x + y);
            break;
        case `subtract`:
            //subtract
            console.log(x - y);
            break;
        case `multiply`:
            //multiply
            console.log(x * y);
            break;
        case `divide`:
            //divide
            console.log(x / y);
            break;
        case `remainder`:
            console.log(x % y);
            break;
        case `exp`:
            console.log(Math.pow(x,y));
            break;
        default:
            console.log(`Not a valid operator`);
    }
}

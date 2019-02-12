let argCount = process.argv.length;
let numArr = [];

for(let i = 2; i < argCount; i++){
    numArr.push(Number(process.argv[i]));
}
console.log(numArr);

// let sortedArr = arraySort(numArr);
let sortedArr = numArr.sort((a,b)=>{return a-b})
console.log(sortedArr);
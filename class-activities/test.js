function stringReverse(str) {
    let result = [];
    let stringArr = str.split();

    for (let i = stringArr.length - 1; i > -1; i--) {
        result.push(stringArr[i])
    }

    return result.join()
}


function checkPalindrome(str) {
    let reverse = str.split().reverse();

    return (str.toLowerCase() === reverse.join().toLowerCase());
}



const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log('The index of this number is: ' + i);
    }, 3000);
} 


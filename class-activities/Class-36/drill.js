const testString = "I am a sentence With caPital LetTers";

function changeString(str){
    return str.toLowerCase().replace(" ","");
}

const result = changeString(testString)
console.log(result);
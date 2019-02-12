const fs = require('fs');

function first(str, func) {
    console.log(str);
    func();
}

function second(bool, func) {
    bool ? func() : break;
}

function third(func,val){
    return (function(){
      return func(val);  
    })
}

fs.appendFile('message.txt','A short message...\n',function(error){
    if(error){
        console.log(error);
    }
});


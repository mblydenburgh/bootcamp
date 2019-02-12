const http = require('http');

const server1 = http.createServer((req,res)=>{
    res.end(`You did it! OMGGGGG! ^___^`);
});

const server2 = http.createServer((req,res)=>{
    res.end(`Welcome to ${req.url}`);
});

server1.listen(3000,()=>console.log(`Server 1 listening`));
server2.listen(5500,()=>console.log(`Server 2 listening`));
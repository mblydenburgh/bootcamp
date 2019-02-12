const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(`Hello World`);
    res.end(`Hello World, you requested ${req.url}`);
});

server.listen(3000,()=>console.log(`I am ready!`));
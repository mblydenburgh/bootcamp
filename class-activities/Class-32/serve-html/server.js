const http = require('http');
const fs = require('fs');

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
    let path = req.url;

    switch (path) {
        case '/home':
            return serveHome(req, res);
        case '/food':
            return serveFood(req, res);
        case '/js':
            return serveJS(req, res);
        default:
            return serve404(req, res);
    }
}

function getData(path,res){
    fs.readFile(path,'utf-8',function(err,data){
        if(err) throw data;
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(data);
        res.end();
    })
}

function serveHome(req, res) {
    let path = 'home.html';
    getData(path,res);
}

function serveFood(req, res) {
    let path = 'food.html';
    getData(path,res);
}

function serveJS(req, res) {
    let path = 'js.html';
    getData(path,res);
}

function serve404(req, res) {
    let path = '404.html';
    getData(path,res);
}

server.listen(3000, () => console.log(`We good and serving homie`));
const http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text.html; charset=utf-8'})
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(8080, function(){
    console.log('8080port 에서 기다리고 있습니다.');
});

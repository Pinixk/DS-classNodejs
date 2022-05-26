var fs = require('fs')

module.exports.intro = (req,res) => {
    res.send('<h1>Express Routing Practice</h1>')
}
module.exports.handleBook = (req,res) => {
    console.log(req.params);
    res.send(req.params)
}
module.exports.index = (req,res) => {
    fs.readFile('./dist/join.html', function(error, data){
        res.writeHead(200, {'Content-Type' : 'text/html'})        
        res.end(data)
    })
}
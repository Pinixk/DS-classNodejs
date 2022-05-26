module.exports.intro = (req,res) => {
    res.send('<h1>Express Routing Practice</h1>')
}
module.exports.handleBook = (req,res) => {
    console.log(req.params);
    res.send(req.params)
}
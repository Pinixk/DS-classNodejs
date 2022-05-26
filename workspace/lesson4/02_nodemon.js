const express = require("express")
const path = require('path')
const app = express()

app.set('port', process.env.PORT || 3000)
app.use(express.static('public'))
app.get("/", (req, res) => {
    console.log(__dirname);
    res.send(path.join(__dirname,'/public/index.html'))
})

const PORT = app.get('port')
app.listen(PORT, () => {
    console.log(`Server Running at http://127.0.0.1:${PORT}/`);
})
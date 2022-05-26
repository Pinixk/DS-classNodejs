const express = require("express")
const app = express()

app.set('port', process.env.PORT || 3000)
app.get("/", (req, res) => {
    console.log(__dirname);
    res.send('<h1>Hello Express</h1>')
})

const PORT = app.get('port')
app.listen(PORT, () => {
    console.log(`Server Running at http://127.0.0.1:${PORT}/`);
})
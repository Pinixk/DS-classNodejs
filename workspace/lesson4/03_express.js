const express = require("express")
const app = express()
app.set('port', process.env.PORT || 3000)

app.get("/", (req, res) => {
    res.send('Hello express')
})
const PORT = app.get('port')
app.listen(PORT, () => {
    console.log(`Server Running at http://127.0.0.1:${PORT}/`);
})
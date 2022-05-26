const express = require('express')
const app = express()
const loogger = require('morgan')
const PORT = 3000
const simple_module = require("./05_simple_module.js")

app.use(loogger('tiny'))
app.get("/", simple_module.intro)
app.get('/users/:userName/books/:bookName', simple_module.handleBook) // : 변수처럼 받아 쓸 수 있음

app.listen(PORT, () => {       
    console.log(`Server Running at http://127.0.0.1:${PORT}/`);
})
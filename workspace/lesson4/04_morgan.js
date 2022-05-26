const express = require('express')
const app = express()
const loogger = require('morgan')
const PORT = 3000

app.use(loogger('tiny'))
app.use((req, res, next) => {
    console.log('1 Time : ', Date.now());
    next()  
})
app.use((req, res, next) => {
    console.log('2 Time : ', Date.now());
    next()  
})
app.get("/", (req, res) => {
    console.log(__dirname);
    res.send('<h1>Hello Express</h1>')
})

app.listen(PORT, () => {       
    console.log(`Server Running at http://127.0.0.1:${PORT}/`);
})
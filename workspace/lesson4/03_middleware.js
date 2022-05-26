const express = require('express')
const app = express()
const PORT = 3000

app.use((req, res, next) => {
    console.log('1 Time : ', Date.now());
    next()
})
app.use((req, res, next) => {
    console.log('2 Time : ', Date.now());
    next()
})

app.listen(PORT, () => {
    console.log(`Server Running at http://127.0.0.1:${PORT}/`);
})
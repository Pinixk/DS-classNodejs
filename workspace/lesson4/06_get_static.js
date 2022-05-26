const simple_module = require("./05_simple_module.js")
const express = require('express')
const path = require('path')
const loogger = require('morgan')
const app = express()
const PORT = 3000
const _path = path.join(__dirname, './dist')
console.log(_path);
app.use('/dist', express.static(_path))
app.use(loogger('tiny'))

app.use((req,res,next)=>{
    console.log('요청이 왔네요~ 지나갑니다');
    next()
})

app.get('/book/:bookName',(req,res)=>{
    const {bookName} = req.params
    res.send(`안녕하세요 알라딘 입니다. ${bookName}을 주문하셨습니다.`)
})
app.get("/", simple_module.intro)
app.get('/users/:userName/books/:bookName', simple_module.handleBook) // : 변수처럼 받아 쓸 수 있음

app.listen(PORT, () => {       
    console.log(`Server Running at http://127.0.0.1:${PORT}/`);
})
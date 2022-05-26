const express = require("express")
const app = express()
// app.set('port', process.env.PORT || 3000)   // port가 env에 없을 때 3000번으로 기본값 세팅
app.set('port', process.env.PORT ??= 3000)

app.get("/", (req, res) => {    // .get request(요청)가 들어올 때
    console.log(__dirname);
    res.send('<h1>Hello Express</h1>')
})

const PORT = app.get('port')
app.listen(PORT, () => {        // server가 실행 상태로 전환
    console.log(`Server Running at http://127.0.0.1:${PORT}/`);
})
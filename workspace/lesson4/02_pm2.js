const http = require('http')
const PORT = 12010
const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
    const obj = {'이름': "KBJ"}
    res.end(JSON.stringify(obj))
})

setTimeout(() => {
    // 에러를 발생시켜서 1초마다 서버가 중지되게 함.
    JSON.parse("{Z")
}, 3000);

server.listen(PORT,()=>{
    console.log(`Server Running at http://127.0.0.1:${PORT}/`);
})
// pm2 start 02_pm2.js -l pm2.log를 하면 로그 파일이 생성됨(pm2에서만)
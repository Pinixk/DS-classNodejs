const express = require('express')
const app = express()
const PORT = 3000

// use를 통해서 web application이 실행될 때 비동기적인 job을 나눠 처리함.
// 직렬 처리보다 작업을 나눠 비동기적으로 처리함으로써 web app의 효율 향상
app.use((req, res, next) => {   
    console.log('1 Time : ', Date.now());
    next()  // 현재에 머무르지 않고 다음으로 넘김
})
app.use((req, res, next) => {
    console.log('2 Time : ', Date.now());
    next()  // next에 매개변수를 넣으면 에러 발생
})

app.listen(PORT, () => {        // 서버가 실행 상태로 전환
    console.log(`Server Running at http://127.0.0.1:${PORT}/`);
})
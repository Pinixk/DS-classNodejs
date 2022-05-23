//error를 then으로 처리하는 방법
const async1 = param => {
    return new Promise((resolve,reject)=>{
        resolve(param*2)
    })
}
const async2 = param => {
    return new Promise((resolve,reject)=>{
        throw '에러'
        resolve(param*2)
    })
}
async1(1).then(async2).then(
    result => {console.log(result);}
    ,
    reason => {console.log(`이 Promise는 ${reason}으로 종료!`);}
)   // LAFO이므로 이 Promise는 ${reason}으로 종료!만 출력
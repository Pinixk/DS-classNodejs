//then으로 error처리함의 한계
const async1 = param => {
    return new Promise((resolve,reject)=>{
        resolve(param*2)
    })
}
const async2 = param => {
    return new Promise((resolve,reject)=>{
        resolve(param*2)
    })
}
async1(1).then(async2).then(
    result => {
        console.log(result);
        throw '에러'
    },
    reason => {console.log(`이 Promise는 ${reason}으로 종료!`);}
)

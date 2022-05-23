//error를 catch로 처리하는 방법
const async1 = param => {
    return new Promise((resolve, reject) => {
        resolve(param * 2)
    })
}
const async2 = param => {
    return new Promise((resolve, reject) => {
        // throw 'error occurred'
        resolve(param * 2)
    })
}
async1(1).then(async2).then(
    result => {
        console.log(result);
        throw 'error on fullfilled state'
    }).catch(
    reason => {
        console.log(`이 Promise는 ${reason}으로 종료!`);
    }
).finally(
    () => {
        console.log('무조건 실행되는 finally');
    }
);
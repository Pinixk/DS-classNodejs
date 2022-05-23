const _ = require('fxjs/Strict')
const L = require('fxjs/Lazy')
const C = require('fxjs/Concurrency')

const arr = [1,2,3,4,5,6,7,8]
const result = _.go(            // 즉시실행 pipe함수
    arr,
    _.map(arr => arr),          // 새로운 배열 반환
    _.filter(arr => arr % 2),   // 홀수만 거름
    _.take(2)                   // 2개만 출력
)
console.log(result);            // [1, 3]
console.log([...result]);

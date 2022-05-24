const R = require('ramda')
// 일반적인 함수합성
const f_1 = R.map(a => a+1)
const f_2 = R.filter(a => a%2)      // 홀수만 filter
const result = f_2(f_1([1,2,3,4]))  // 그냥 함수를 합쳐서 연산
console.log(result);    // [3,5]

// ramda를 활용한 compose, 수식이 뒤에서 부터 해결
// Math.abs 절대값으로 반환, R.multiply 곱하기
console.log(R.compose(Math.abs, R.add(1), R.multiply(2))(-4));  // 7

// ramda를 이용한 pipe, 수식을 앞에서부터 해결
// R.nagate 음수값으로 변경, R.inc +1
console.log(R.pipe(R.negate, R.inc)(3));    // -2

// fxjs를 이용한 pipe - 권장!!
const {map,filter,pipe} = require('fxjs')
const f_pipe = pipe(
    map(a => a+1), 
    filter(a=>a%2)
)
const ret = f_pipe([1,2,3,4])
console.log(ret);  // 3, 5
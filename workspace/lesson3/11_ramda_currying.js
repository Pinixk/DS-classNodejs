// currying은 인수가 다 채워져 있지 않으면 지연효과를 가진다.
const R = require('ramda')

// ramda 미적용
const non_currying = (a,b,c) => a+b+c
console.log('non_currying(1,2): ', non_currying(1,2));  // NaN, 일반함수는 연산이 되긴 함

// ramda .add 이용
const a = R.add(1)
console.log(a);     // [Function: f1], 인수가 다 채워져 있지 않으면 작동이 안됨
const b = a(2)
console.log(b);     // 3
const c = R.add(1)(1);
console.log(c);     // 2

// ramda 이용 custom currying
const addFourNumbers = (a,b,c,d) => a+b+c+d
const curriedAddFourNumbers = R.curry(addFourNumbers)
const f = curriedAddFourNumbers(1,2)
const g = f(3)
console.log(`ramda를 적용하여 계산한 결과 : ${g(4)}`);  // 10

// ramda를 이용한 currying의 장점 : 지연효과, 단점 : 코드가 지저분함
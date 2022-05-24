// js가 일급객체(first-class object/객체가 연산을 지원)이기 때문

// 고차함수
// 1. 변수나 메서드에 함수를 할당할 수 있어야 함
// 2. 함수 안에 함수를 매개변수로 담을 수 있어야 함
// 3. 함수가 함수를 반환할 수 있어야 함


// 특정 함수 등으로 어떤 값을 받아 새로운 값을 반환하는 것을 Monad Function(.map 등)
const a = (a) => a + 10
const b = [1,2,3].map(a);                       //1. 변수나 메서드에 함수를 할당할 수 있어야 함
console.log(b);


const _call = (a,b) =>  a() + b()               // 2. 함수 안에 함수를 매개변수로 담을 수 있어야 함
_call( ()=>10 , function(){return 20} )
console.log(_call(function(){return 10},function(){return 20}));


// const c = function(val){
//     return function(){
//         return val
//     }
// }
const c = val => () => val                      // 3. 함수가 함수를 반환할 수 있어야 함
console.log(c(100));    // c가 함수를 반환함
c_lazy = c(100)         // 반환된 함수를 c_lazy에 할당함
console.log(c_lazy());
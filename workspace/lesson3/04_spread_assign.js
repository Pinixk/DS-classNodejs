const a = {'b':1}
let b = {...a}              // call by value, spread op는 배열뿐만 아니라 객체도 복사 가능
console.log(b);             // { b: 1 }

let c = Object.assign({},a) // call by value
c.b = 3;
b.b = 3;
console.log(a,b);           // 1

const aa = {
    'b' : 1,
    'c' : {'d':2}           // call by reference, 객체 값이기 때문
}
let bb = {...aa}
let cc = Object.assign({},aa)
cc.c.d = 100;
console.log(aa);            // { b: 1, c: { d: 100 } }

// array copy ==============================================================
let orig = [1,2,3,4,5]
let copy = [];
// for(let i=0; i<orig.length; i++) copy.push(orig[i]);
// copy = [...orig]         // call by value
copy = orig                 // call by assignment, 출력할 때 변수가 같이 변경
orig[0] = 10;               // call by value, 출력할 때 변가서 각각 다름
console.log(orig.toString());
console.log(copy.toString());
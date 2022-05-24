const a = [1,2,3,4]
const c = [8,9]         // 배열
// const c = {"d":1     // literal 객체
a.push(c)
let b = a.slice()
b[0] = 10;
a[4][1] = 100;          // 배열일 때
// a[4].d = 100         // literal 객체일 때

console.log(a, b);

b = a.splice(1)
console.log(a, b);
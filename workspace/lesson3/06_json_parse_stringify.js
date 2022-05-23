const a = {
    'b': 1,
    'c': {'d': 2}
}
console.log(JSON.stringify(a));             // JSON object값을 문자열로 변환
// const str = JSON.stringify(a);
// console.log(str.a.c.d);                     // 문자열이라 json 객체처럼 접근 불가
let b = JSON.parse(JSON.stringify(a))       // 문자열을 JSON object값로 변환
b.c.d + 4;                                  // json객체이기 때문에 가능
console.log(a);
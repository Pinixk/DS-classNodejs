//최근에 spread operator가 복사, 연결 등에 다방면으로 사용 중

// 문자열
var str1 = 'hello world'; 
var str2 = [...str1];   // 글자 단위로 분해
console.log(str2);      // ['h', 'e', 'l', 'l','o', ' ', 'w', 'o','r', 'l', 'd']

// 객체
const aa = {'name':'김봉조', 'mobile':'010.8977.3917'};
const bb = {...aa, "key":1}
console.log(bb);        // { name: '김봉조', mobile: '010.8977.3917', key: 1 }

// 배열
const arr1 = [1,2,3,4,5];
const arr2 = [...arr1,6,7,8,9];
console.log(arr2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const a = (b, ...rest) => {
    console.log(rest);
}
a(1, 2, 3, 4, 5); // b=1를 제외한 나머지 [2,3,4,5] 


const b = [2, 3, 4];
const a2 = function (a, b, c, d, e) {
    console.log(a, b, c, d, e);
}
a2(1, ...b, 5) // 배열을 분해해서 각각 a,b,c 로 넣었음, 1 2 3 4 5


const a3 = [1, 2, 3, 4, 5]
const [head, body, ...rest] = a3 // head=1, body=2로 값이 정해짐 그리고 나머지 배열이 담김
console.log(head, rest, body); // 1 [ 3, 4, 5 ] 2


const x = [1,2,3]
const y = [4,5,6]
const z = [7,8,9]
const v = [...x,...y,...z];         // 일반적으로 2개 이상 배열을 합칠 때
const w = x.concat(y).concat(z);    // 일반적으로 2개의 배열을 합칠 때
// const v = x.concat(y, z);
console.log(v); 
console.log(w);

console.log(Math.max(v));           // NaN, 객체([])로서 1개 값만 들어옴
console.log(Math.max(...v));        // 9, 분해된 배열(1,2,...,9)로서 들어옴
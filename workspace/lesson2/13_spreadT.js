//최근에 spread operator가 복사, 연결등에 다방면으로 많이 사용

const a = (b, ...rest)=>{ //묶음 :: 매개변수가 ...매개변수->배열
  console.log(rest); // [2,3] 출력
}
a(1,2,3); //spread op가 입력값에 없고 매개변수에 있을 때

const b = [1,2,3]
const a2 = function(a,b,c,d){
  console.log(a,b,c,d);
}
a2(1,...b); //분해 :: ...매개변수가 매개변수->분해

const a3 = [1,2,3,4,5] //spread op가 입력값에 없고 매개변수에 있을 때
const [head, ...rest] = a3;
console.log(head, rest); //1, [2,3,4,5] 출력

//spread operator 복사
var arr3 = ['철수','영희'];
var arr4 = [...arr3]; //배열이 배열로!

const arr1 = [1,2,3,4,5];
const arr2 = [...arr1, 6,7,8,9]; //배열이 배열 안으로!
console.log(arr2);

var str1 = 'hello world';
var str2 = [...str1]; //문자열이 배열 안으로!
console.log(str2);

const aa = {"name":"LGH", "mobile":"010-3446-7374"}
const bb = {...aa, "key":1} // 객체를 객체 안으로!
console.log(bb);

const zz = [4,2,6,7,3,9];
console.log(Math.max(...zz)); //배열이 매개변수로!
console.log(Math.max(z)); // NaN

//배열 병합
const x = [1,2,3]
const y = [4,5,6]
const xx = [7,8,9]
const z = [...x, ...y, ...xx];//분리 :: 2개 이상의 배열을 합칠 때
const w = x.concat(y).concat(xx);//2개의 배열을 합칠 때
console.log(z);
console.log(w);

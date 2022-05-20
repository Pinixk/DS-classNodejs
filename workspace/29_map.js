const myMap = new Map();
myMap.set(0,'zero'); // 키값, value값
myMap.set(1,'one');
myMap.set(2,'two');
myMap.set(2,'이'); // key가 겹치면 최종 입력이 우선
myMap.set(3,'이'); // value가 겹치면 상관없음
// console.log(myMap.get(3)); // zero, key로 값 불러 올 수 있음.
// myMap.delete(3);
// console.log(myMap);

// for (const [key, val] of myMap) {console.log(`${key} : ${val}`);}
// for (const key of myMap.keys()) {console.log(`key : ${key}/${myMap.get(key)}`);}
// for (const val of myMap.values()) {console.log(`value : ${val}`);}
// for (const [key,val] of myMap.entries()) {console.log(`key : ${key}`);}
// myMap.forEach((v,k)=>{console.log(k+":"+v);});

const it = myMap.entries()
let i = 0;
while (i++ < myMap.size) {
    const result = it.next().value;
    console.log(result);
    console.log(`>> k : ${result[0]} / v : ${result[1]}}`)
}
// while(it.next().done){
//     const [k, v] = it.next().value;
//     console.log(`k:${k} / v:${v}`);
// }    //작동 안함

const arr1 = [[1,'one'],[2,'two'],[3,'three']]
const arr2 = [[1,'uno'],[2,'dos']]
const first = new Map([...arr1]);
const second = new Map([...arr2]);
console.log(first);
const merge = new Map([...first,...second]) // key값이 중복되어 Map(3) { 1 => 'uno', 2 => 'dos', 3 => 'three' } 가 나옴
console.log(merge);
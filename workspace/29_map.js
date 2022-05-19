const myMap = new Map();
myMap.set(0,'zero'); // 키값, value값
myMap.set(1,'one');
myMap.set(2,'two');
myMap.set(2,'이'); // key가 겹치면 최종 입력이 우선
myMap.set(3,'이'); // value가 겹치면 상관없음
// console.log(myMap.get(3)); // zero, key로 값 불러 올 수 있음.
myMap.delete(3);
// console.log(myMap);

// for (const [key, val] of myMap) {console.log(`${key} : ${val}`);}
// for (const key of myMap.keys()) {console.log(`key : ${key}/${myMap.get(key)}`);}
// for (const val of myMap.values()) {console.log(`value : ${val}`);}
// for (const [key,val] of myMap.entries()) {console.log(`key : ${key}`);}

// myMap.forEach((v,k)=>{console.log(k+":"+v);});
// const it = myMap.entries()
// while(it.next().done){
//     const [k, v] = it.next().value;
//     console.log(`k:${k} / v:${v}`);
// }

// const arr1 = [[1,'one'],[2,'two'],[3,'three']]
// const arr2 = [[1,'uno'],[2,'dos']]
// const first = new Map([...arr1]);
// const second = new Map([...arr2]);
// console.log(first);
// const merge = new Map([...first,...second])
// console.log(merge);
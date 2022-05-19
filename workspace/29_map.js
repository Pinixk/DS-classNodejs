const myMap = new Map();
myMap.set(0,'zero'); // 키값, value값
myMap.set(1,'one');
myMap.set(2,'two');
myMap.set(2,'이'); // key가 겹치면 최종 입력이 우선
myMap.set(3,'이'); // value가 겹치면 상관없음

for (const [key, val] of myMap) {console.log(`${key} : ${val}`);}
for (const key of myMap.keys()) {console.log(`key : ${key}/${myMap.get(key)}`);}
for (const val of myMap.values()) {console.log(`value : ${val}`);}
for (const [key,val] of myMap.entries()) {console.log(`key : ${val}`);}
myMap.forEach((v,k)=>{console.log(k+":"+v);});
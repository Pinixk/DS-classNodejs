const a = [1,2,3,4,5]
console.log(a.includes(3));

const pets = ['cat','dog,','fish']
console.log(pets.includes('at'));
console.log(pets.includes('cat'));

console.log([1,2,3].includes(2)); // true
console.log([1,2,3].includes(4)); // false
console.log([1,2,3].includes(3,2)); // (3,2) 3은 찾는 값, 인덱스 2부터 찾음
console.log([1,2,3,NaN].includes(NaN)); // NaN도 찾을 수 있음

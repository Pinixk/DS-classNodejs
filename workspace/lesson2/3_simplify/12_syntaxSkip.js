const name = 'KBJ';
const age = '27';
const job = '학생';

const data_used = {name, age, job}
const data_not_used = {"name" : name, "age" : age, "job" : job}

console.log(data_used.name);
console.log(data_not_used.name);
// 둘의 결과값이 같다 { name: 'KBJ', age: '27', job: '학생' }
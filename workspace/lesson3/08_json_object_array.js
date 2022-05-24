// JSON Object 형식
var obj = {"id":"4"}
console.log(JSON.stringify(obj));   // {"id":"4"}


// JSON  Array 형식
var months = [{"id":1 , "name":"Jan"}, {"id":2, 'name':'Feb'}]
var jasonMonths = JSON.parse(JSON.stringify([...months]))
console.log(jasonMonths);           // [ { id: 1, name: 'Jan' }, { id: 2, name: 'Feb' } ]
console.log(typeof jasonMonths);    // object
console.log(jasonMonths[0].name);   // Jan


// string to JSON
let a = '{"name":"KBJ"}'
console.log(typeof a);      // string, 문자열 객체
console.log(a.name);        // undefined
a = JSON.parse(a);
console.log(typeof a);      // object, json object로 바뀜
console.log(a.name);        // KBJ


// array to JSON
const myArr = ["banana", 'apple']
console.log(JSON.stringify(myArr));
const jsonArr = JSON.parse(JSON.stringify(myArr))
console.log(typeof jsonArr)
console.log(jsonArr);


// object to JSON
const myObj = {name : "Son", data : new Date()}
const jsonObj = JSON.parse(JSON.stringify(myObj))
console.log(typeof jsonObj);
console.log(jsonObj.data);
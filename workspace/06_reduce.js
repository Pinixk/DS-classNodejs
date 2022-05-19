var arr = [10, 2, 3, 4, 5];
var maxCallback = (a, b) => {
    return Math.max(a, b);
}
// const result = arr.reduce(maxCallback);
const result = arr.reduce((a, b) => {
    return Math.max(a, b);
}, 0);
console.log(result);



var arr2 = ['a', 'b', 'C', 'D', 'e'];
const result2 = arr2.reduce((a, b) => {
    return Math.min(a, b.charCodeAt(0)); // charCodeAt(idx) inx는 문자열 자릿수
}, 1000);
console.log(String.fromCharCode(result2));



const result3 = [{x:22}, {x:42}].reduce((max, cur)=>{ // typeof = object
    return Math.max(max.x , cur.x);                   // object값이므로 값을 꺼내줌
}) 
console.log(result3);
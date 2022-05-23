const {odd, even} = require('./36_CJS_a')
const checkOddOrEven = require('./36_CJS_a_func')

function checkStringOddOrEven(str){
    return (str.length%2)?odd:even;
}

console.log(checkOddOrEven(10));
console.log(checkStringOddOrEven('hello javascript'))
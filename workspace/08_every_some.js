const numbers = [1, 3, 5, 4];
const isEveryOdd = numbers.every(e => e % 2) // 화살표 함수
const isSomeOdd = numbers.some(e => e % 2) // 0 = false, 1 = true 이기 때문
console.log(isEveryOdd, isSomeOdd); // false, true

const isBelow = cur => cur < 40;
const number = [14, 34, 36, 23, 11, 23];
console.log(number.every(isBelow));

// const isFind = (cur,find) => cur='l';
// const string = ['h','e','l','l','o'];
// console.log(string.some(isFind));



const arr = ['h', 'e', 'l', 'l', 'o'];
const isFind = function (arr, val) {
    return arr.some(function (cur) {
            return cur == val
        }
    )
}
console.log("결과 : " + isFind(arr, 'e'));

var fruits = ['apple', 'banana', 'mango', 'guava'];
const checkAvailability = function (arr, val) {
    return arr.some(function (arrVal) {
            return arrVal === val;
        }
    )
}
console.log(checkAvailability(fruits, 'kela'));
console.log(checkAvailability(fruits, 'banana'));

var arr = new Array(10);
for (i = 0; i < arr.length; i++) arr[i] = i;

var isEven = function (value) {
    // console.log(value % 2 === 0 ? value : '홀수');
    // return arr % 2 === 0?value:'홀수';
    return value %2 === 0;
}

// var newArr = arr.map(isEven); // 콜백함수의 변경결과로 새로운 배열 출력
var newArr = arr.filter(isEven); // 콜백함수의 해당원소로 새로운 배열 출력
console.log(newArr.toString());

// arr.forEach(isEven); // 콜백함수의 각 원소에 대한 실행만
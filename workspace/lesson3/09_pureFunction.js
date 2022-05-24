const b = 1
const pure = function (a, b) { // 순수함수, 함수 자체로 완전함
    return a + b // 값을 도출하면 소멸함, 재사용 가능
}
const not_pure = function (a) { // 전역변수 b를 가져야 함수가 성립이 됨
    return a + b // 값을 도출해도 메모리가 남음, 재사용 불가능
}

console.log('pure(1,1): ', pure(1, 1));
console.log('not_pure: ', not_pure(1));

// 순수 함수 3가지 주의점
// 1. 최대한 지역변수만을 이용해서 구연
// 2. 인수로 넘기는 값의 본체까지 수정하지 않기
// 3. 매개변수로 넘기는 값이 객체면 원본 객체에 변이를 일으키지 않기

let c = 0
// 나쁜 예 : 매개변수로 받지도 않고 전역변수를 변환하고 반환한다.
const bad_f = () => {
    return c++
}
bad_f();
console.log(c); // 1

// 좋은 예 : 매개변수를 받아 +1을 한다.
const good_f = (c) => {
    return c + 1
}
console.log(c)  // 1
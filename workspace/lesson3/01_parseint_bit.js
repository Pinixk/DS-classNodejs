for (let i = 0; i < 100000; i++) {
    let a = 123.456789;
    // b = parseInt(a);    // parseInt
    b = ~~(a);          // bit 연산자
}   // bit연산자가 더 빠름

// let a = 123.856789;
// b = parseInt(a)      // Int 버림
// b = ~~(a);
// console.log(b);      // 123

// https://jsbench.me/z3kjkk0ul0/6
for (let i = 0; i < 100000; i++) {
    let a = 123.456789;
    // b = parseInt(a);    // parseInt
    b = ~~(a);          // bit 연산자, 더 빠름
}
// let a = 123.856789;
// b = parseInt(a)         // Int 버림
// b = ~~(a);
// console.log(b);
const a = [1,2,3,4]

let b = a.slice(1)
console.log(a, b);  // [ 1, 2, 3, 4 ] [ 2, 3, 4 ]
b[0] = 10;
console.log(a, b);  // [ 1 ] [ 2, 3, 4 ]

b = a.splice(2)
console.log(a, b);  // [ 1, 2 ] [ 3, 4 ]
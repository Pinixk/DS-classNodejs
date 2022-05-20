const f1 = obj => obj = null
let b1 = {"a" : 1}
f1(b1);
console.log(b1);    // {a: 1}


const f2 = arr => arr = null
let b2 = []
let a2 = b2
f2(b2)
console.log(a2);    // []
console.log(b2);    // []


const swap = (a,b) => { // a,b 값은 그저 복사만 할 뿐
    let temp = a
    a = b
    b = temp
}
let x = 1 
let y = 2
swap(x, y)
console.log(x,y); // 1, 2


const arr = {'a':1}
const fnc = function(c){
    c.a = 2
}
fnc(arr)
console.log(arr);   // {'a':2} 
//객체일 때는 call by reference, 주의!
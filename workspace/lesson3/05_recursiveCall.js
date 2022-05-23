// 3! = 3*2*1 = 6
function factorial(num) {
    let result = 0;
    // if (num != 1)
    //     result = 3 * factorial(num - 1)
    // else
    //     result = num * 1;

    result = (num != 1) ? num * factorial(num - 1) : num * 1;
    return result;
}
// console.log(factorial(5));


const copy = function (obj) {
    let out = {}
    let value, key
    for (key in obj) {
        value = obj[key]
        out[key] = (typeof value === 'object' && value != null) ? copy(value) : value
    }
    return out;
}
const aa = {
    'b': 1,
    'c': {'d': 2}
}
let bb = copy(aa);
bb.c.d = 100;
console.log(aa);
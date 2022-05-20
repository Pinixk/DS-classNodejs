const log = console.log
log('hello js')

// const add = function(a){
//     return a+10;
// }
const add = a => a+10
const a = [1,2,3]
const result = a.map(add)
log(result)

function* gen(func, arr){
    for(const item of arr){
        yield func(item)
    }
}
// log(map(add, a)); // 에러
log([...gen(add, a)]);

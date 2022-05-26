const fxjs = require('fxjs')
const _ = require('fxjs/Strict')
const L = require('fxjs/Lazy')
const C = require('fxjs/Concurrency')
const log = a => console.log(`${new Date()} : ${a}`);

const delay = val => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(val)
        }, 1000);
    })
}
async function test_fp(){
    const list = [1,3,5,7,9]
    return await _.go(
        list,
        L.map(a => a+100),
        L.map(delay),
        _.each(log)
    )
}
test_fp().then(ret=> console.log(ret))
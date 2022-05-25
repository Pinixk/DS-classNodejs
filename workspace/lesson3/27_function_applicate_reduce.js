const fxjs = require('fxjs')
const _ = require('fxjs/Strict')
const L = require('fxjs/Lazy')
const C = require('fxjs/Concurrency')
const log = a => console.log(`${new Date()} : ${a}`);

const users = [
    {id:1, name:"고길동", age:22},
    {id:2, name:"희동이", age:25},
    {id:3, name:"둘리", age:31},
    {id:4, name:"도우너", age:27}
]

const f = (info, user) => {
    const group = user.age - user.age%10
    info.count[group] = (info.count[group] ??=0) + 1
    info.total[group] = (info.total[group] || 0) + user.age
    return info
}

const ret = _.reduce(f, {count:{}, total:{}}, users)
console.log(ret);
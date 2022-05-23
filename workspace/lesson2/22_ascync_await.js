const a = function(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log('a');
            resolve('a');
        },Math.random()*100)
    })
}
const b = function(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log('b');
            resolve('b');
        },Math.random()*100)
    })
}
const c = function(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log('c');
            resolve('c');
        },Math.random()*100)
    })
}

const main = async function(){
    await a()
    await b()
    await c()
}
main()
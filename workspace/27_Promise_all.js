const async = (message, ret) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(message);
            console.log(new Date());
            resolve(ret)
        },2000)
    })
}
const promises = [async('async 1',1),async('async 2',2)]

Promise.all(promises).then(data => {
    console.log(data);
})
const async = (message, ret) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(message);
            console.log(new Date());
            // resolve(ret)    // ret로 데이터를 넘기면 복수개가 됨 -> 배열로 처리
        },2000)
    })
}
const promises = [async('async 1',1),async('async 2',2)] // message, ret

Promise.all(promises).then(data => {
    console.log(data);
})
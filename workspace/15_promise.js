const condition = true;
// promis 객체 생성
const promise = new Promise((resolve, reject)=>{
    if(condition){
        resolve('success');
    } else {
        reject('fail');
    }
});

promise.then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('무조건');
});
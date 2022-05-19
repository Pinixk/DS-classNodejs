console.log('Hi');
setTimeout(()=>{
    console.log('async function1 compelete');
},5000)

setTimeout(()=>{
    console.log('async function2 compelete');
},5000)
console.log("Bye");

// 대기시간이 여유가 있으면 순서대로 출력
const a = (c = "job") => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve(c);
            // console.log(c);
        }, 100);
    });
}

a().then(ret => { 
    console.log(ret);
    return a('job2'); 
}).then(ret => {
    console.log(ret);
    return a('job3');
})
.then(ret=>{
    console.log(ret);
})
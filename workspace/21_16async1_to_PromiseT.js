const job_1 = ()=> {
  return new Promise((resolve, reject)=>{
    const b = Math.random()*100
    setTimeout(() => {
      console.log('job_1');
      // resolve(job_1)
    }, b);
  });
}
const job_2 = ()=> {
  return new Promise((resolve, reject)=>{
    const b = Math.random()*100
    setTimeout(() => {
      console.log('job_2');
      // resolve(job_2)
    }, b);
  });
}
const job_3 = ()=> {
  return new Promise((resolve, reject)=>{
    const b = Math.random()*100
    setTimeout(() => {
      console.log('job_3');
      // resolve(job_3)
    }, b);
  });
}

// job_1().then(ret => job_2()).then(ret => job_3()); // 매개변수가 있을 때
// job_1().then(job_2).then(job_3);                   // 매개변수가 없을 때

const main = async function(){
  await job_1()
  await job_2()
  await job_3()
}
main()
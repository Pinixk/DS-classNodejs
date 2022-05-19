const job_1 = ()=> {
  return new Promise((resolve, reject)=>{
    const b = Math.random()*100
    setTimeout(() => {
      console.log('job_1');
    }, b);
  });
}
const job_2 = ()=> {
  return new Promise((resolve, reject)=>{
    const b = Math.random()*100
    setTimeout(() => {
      console.log('job_2');
    }, b);
  });
}
const job_3 = ()=> {
  return new Promise((resolve, reject)=>{
    const b = Math.random()*100
    setTimeout(() => {
      console.log('job_3');
    }, b);
  });
}

job_1().then(ret => job_2()).then(ret => job_3());
job_1().then(job_2).then(job_3);

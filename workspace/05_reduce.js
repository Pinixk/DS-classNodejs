var total = 0;
var arr = new Array(1,2,3,4,5,6,7,8,9,10);

for (let i = 0; i < arr.length; i++) {
    total += arr[i];
}
console.log(total);

total = arr.reduce((acc,cur,idx)=>{    // acc=누적값, cur=현재값, idx=요소
    return acc += cur;                 // return = 결과값
},0);                                  // ,init = 초기값
console.log(total); 
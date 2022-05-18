const numbers = [1, 3, 5, 4];

let result1 = numbers.reduce((acc, cur) => {
    if(cur%2==1) acc++
    // else acc += 0;
    return acc;
  });

// let result2 = numbers.reduce((acc,cur)=> {
//     return acc += (cur % 2) ? 1 : 0
// })

// let result3 = numbers.reduce((acc, cur) => {
//     return (cur % 2) ? ++acc : acc
// },0)

// let result4 = numbers.reduce((acc,cur)=> {
//     return acc += (cur % 2)
// })
console.log(result1);
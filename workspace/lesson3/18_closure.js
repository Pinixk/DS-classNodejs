const text = (function(){
    let count = 0;
    // count의 변수가 closure됨, return으로 외부에서 접근을 허용함. 
    return {
        increase(){count++},
        decrease(){count--},
        getValue(){console.log(count)}
    }
})()
text.increase()
text.increase()
text.increase()
text.getValue()     // 3



const add = (function(){
    let counter = 0
    return function(){
        // counter += 1
        return ++counter;
    }
})()
console.log([add(),add(),add()]);   // [ 1, 2, 3 ]



function center(scale){
    var offset = Math.max(0, scale.bandwidth() - 1) / 2 // Adjust for 0.5px offset
    if(scale.round()) offset = Math.round(offset)
    return function(d) {
        return +scale(d) + offset
    }
}
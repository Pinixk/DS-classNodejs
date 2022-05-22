for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(j);
    }, 100);                    // hoisting되면서 closure(독립적인 값 유지)이 나타남
                                // closer를 제거하기 위해 즉시실행함수 적용
    (function(j){               // 즉시실행함수의 매개변수
        setTimeout(() => {
            console.log(j);
        }, 100);
    })(i)                       // j의 값을 i로 넣는다
}

// 즉시실행함수 
// (() => {
//     setTimeout(() => {
//         console.log(i);
//     }, 100);
// })()
// ((a,b)=>{})(a,b) //순서대로 매칭
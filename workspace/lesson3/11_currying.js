const non_currying = (a,b,c) => a+b+c
non_currying(1,2)
console.log('non_currying(1,2): ', non_currying(1,2));  // NaN, 일반함수는 연산이 되긴 함

// currying함수는 변수값이 다 갖춰서 있지 않으면 연산이 지연됨 //closer현상


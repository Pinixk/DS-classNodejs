function print(){
    // var 선언과 초기화가 동시에 실행(함수 scope)
    // let,const 선언과 초기화가 TDZ에 분리(블럭 scope)
    for (let i = 0; i<10; i++) {

    }
    return i;
}
console.log(print());
a();
b();    

function a(){
    console.log('a');
}

// 익명함수일 때 화살표 함수로 변경 가능
const b = ()=>{console.log('b');} // not initialized(변수는 할당 되었지만 초기화가 되지 않음)
var b = ()=>{console.log('b');} // not a function(함수 설정이 되지 않았음) 
// b() // 해결

// 화살표함수의 매개변수가 1개일 때 () 생략가능
// 화살표함수의 return||명령문 1개 일 때 {}, return; 생략가능
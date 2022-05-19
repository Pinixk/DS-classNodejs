const a = (c = "naver") => {                   // Promise객체는 3가지 상태{pending(promise), fullfilled(resolve), rejected(reject)}를 가진다.
    return new Promise((resolve, reject) => {  // 익명객체, 첫 문자가 대문자
                                               // 1,2,3 모두 에러를 강제로 발생시킴
        // throw new Error('throw error')      // 1번 js의 에러객체 생성 명령
        reject(new Error('reject new error')); // 2번 Promise의 에러객체 생성 명령
        // reject(`['reject']`);               // 3번 Promise로 에러발생
        setTimeout(()=>{
            console.log('fullfilled 상태');
            resolve(`${c}로 부터 받은 사랑`);
        },1000);
    });
}

a().then(ret => {   // 실행 결과
    console.log(ret);
    return a('kakao');
}).then(ret => {
    console.log(ret);
}).catch(function(e){   // 예외가 발생했을 때
    console.log(`${e}라는 에러가 발생`);
});


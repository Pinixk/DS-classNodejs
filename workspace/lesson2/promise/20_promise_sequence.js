const a = (c = "네이버") => {
    return new Promise((resolve, reject) => { // 익명객체
        setTimeout(() => {
            resolve(`${c}로 부터 받은 사랑`)
        }, 1000);
    });
}

a().then(ret => { // return
    console.log(ret);
    return a('카카오'); // 매개변수가 네이버에서 카카오로 바뀜
}).then(ret => {
    console.log(ret);
});
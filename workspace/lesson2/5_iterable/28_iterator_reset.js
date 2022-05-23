var lotto = new Set();
while (lotto.size<6) {  
    let ball = Math.floor(Math.random() * 45) + 1;
    lotto.add(ball)
}

console.log(lotto);
let it = lotto[Symbol.iterator]();
console.log(it.next())
console.log(it.next())
//it.next 다음의 값 부터 나옴
for (let i = 0; i < lotto.size; i++) { 
    console.log(it.next());
}

// iterator를 초기화 후 다시 출력
it = lotto[Symbol.iterator]();       
for (let i = 0; i < lotto.size; i++) {
    console.log(it.next());
}

// iterator 획득 없이 처음부터 데이터 출력 가능
for (const it of lotto) {
    console.log(it);
}
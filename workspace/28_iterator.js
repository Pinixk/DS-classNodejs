const a = ['apple', 'strawberry', 'grape', 'pear'];
console.log(Symbol.iterator in a);

const it = a[Symbol.iterator]()
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (let i = 0; i < a.length; i++) {      //it.next 다음의 값 부터 나옴
    console.log(it.next());
}

for (const item of a){console.log(item);} // a 요소를 출력
for(const item in a){console.log(item);}  // a 요소의 인덱스를 출력
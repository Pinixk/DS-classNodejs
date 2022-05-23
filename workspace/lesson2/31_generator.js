function* gen() {
    yield 10
    if (false) yield 20
    yield 30
    return 90
    yield 50
};

let it = gen();
console.log(it.next()); // 10
console.log(it.next()); // 30
console.log(it.next()); // 90, done: true
console.log(it.next()); // undefined

for (const it of gen()) {
    console.log(it);
};
console.log([...gen()]);
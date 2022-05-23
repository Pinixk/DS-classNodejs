function* gen(fuc,list){        // (매개변수, 로컬 변수)
    for(const item of list){
        yield fuc(item)
    }
};
const add = a => a+10;
const a = [1,2,3];
const customGenerator = gen(add,a)
//coroutine next()를 통해서 다음 단꼐로 넘어감
console.log(customGenerator.next());
console.log(customGenerator.next());
console.log(customGenerator.next());
console.log(customGenerator.next());
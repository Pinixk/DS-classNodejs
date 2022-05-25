function a(c,d){
    const b = [this.name, this.adjective, '아주 예쁘게',c,d].join('') // join은 원소를 string으로 반환
    return b
}
const obj = {name:'KBJ', adjective:'가 춤을 춥니다'}

console.log(a.apply(obj, ['하지만 혼자','외롭게 말이죠'])); 
// 첫번째 인자인 obj는 a()의 상위객체가 됨
// apply은 두번째 인자부터는 배열이 들어오면 그 자체를 두번째 인자로 인식함
console.log(a.call(obj, ['하지만 혼자','외롭게 말이죠']));
// 첫번째 인자인 obj는 a()의 상위객체가 됨
// call은 두번째 인자부터는 배열이 들어와도 각각을 인자로 인식함
// call을 사용할 땐 화살표함수 사용X, call 화살표함수에서의 this는 window를 가리킴
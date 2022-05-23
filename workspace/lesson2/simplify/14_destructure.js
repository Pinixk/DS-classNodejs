//swap
let a = 2;
let b = 5;
console.log(a,b);

let tmp = a;    // old
a = b;
b = tmp;
console.log(a,b);

[a,b] = [b,a];  // new
console.log(a,b);


// 배열의 요소 쉽게 담기
const d = () => [1,2,3,4]
const [x,y,z] = d();
console.log(x,y,z);


// 객체의 value 쉽게 담기
// const f = () => {return {'name':'KBJ','job':'Programer'}}
const f = () => ({"name":"KBJ","job":"Programer"}) // 문자 객체 리턴시 () 필수
const {name,job} = f();
console.log(name,job);

// 객체의 value 쉽게 담기 응용
const candyMachine =  {
    status : { name: 'node', count:5 },
    getCandy : function(){
        this.status.count--; 
        return this.status.count;
    }
}
// var getCandy = candyMachine.getCandy();
// var count = candyMachine.status.count;
var {getCandy,status:{count}} = candyMachine;
getCandy = getCandy.bind(candyMachine);
console.log(getCandy());
console.log(count);
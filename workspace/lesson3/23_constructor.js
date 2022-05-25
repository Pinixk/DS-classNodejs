function Person(){
    let age = 0;
    function up(){
        return ++age;
    }
    function down(){
        if(this.age<0) return --age;
        else return 0
    }
    return Object.freeze({up,down})         // up, dawn만 외부서 접근가능
    // return {up, dowm}                       // up, dawn만 외부서 접근가능
    // return Object.freeze({age, up,down})    // age, up, dawn만 외부서 접근가능
    // return {age, up,down}                   // age, up, dawn만 외부서 접근가능
}

const p = new Person()
console.log(p.age);     // undefined
console.log(p.up());    // 1
console.log(p.down());  // 0
console.log(p.down());  // 0
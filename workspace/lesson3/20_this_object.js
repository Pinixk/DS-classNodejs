function Person() {
    this.age = 0
    // setTimeout(function(){              //node(Timeout 객체)/browser(window)
    setTimeout(() => {                  //node,browser(Person객체), Person { age: 1 }, 1
        this.age++
        console.log(this, this.age);    // function일 때 this.age는 상위객체 age를 가리킴, NaN
    }, 1000)
}
var p = new Person();
function Person(){
    this.value = "KBJ"
    this.printThis = function(){console.log(this, this.value);}
    // this.printThis = () => console.log(this, this.value);
}

var p = new Person()
var print = p.printThis
p.printThis()   // Person객체, new로 생성된 객체의 .printThis 이기 때문
print()         // node모듈, Person의 printThis만들고와 변수로 할당했기 때문
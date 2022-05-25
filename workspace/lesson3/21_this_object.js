function add(c, d, fn) {
    a = 4; b = 7;
    console.log(fn(c+d));
    // return fn(c+d)
}

let user = {
    a: 2, b: 3,
    add() {
        console.log(this);                      // user객체
        add(this.a, this.b, function (total) {  // this.a=2, this.b=3 function(total) = fn(c+d)
            console.log(total);                 // 5
            console.log(this.a+"/"+this.b);     // 4/7, node모듈의 a,b
            console.log(this);                  // window 또는 node모듈
        })
    }
}
user.add()
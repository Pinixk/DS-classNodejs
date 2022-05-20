var lotto1 = new Set();
while (lotto1.size<6) {  
    let ball = Math.floor(Math.random() * 45) + 1;
    lotto1.add(ball)
}
console.log(lotto1);


var lotto2 = new Array();
while (lotto2.length<6) {
    let ball = Math.floor(Math.random() * 45) + 1;
    lotto2.push(ball)
}
console.log(lotto2);
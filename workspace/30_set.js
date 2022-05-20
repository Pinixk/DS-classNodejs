var setA = new Set([1,2,3,4]);
var setB = new Set([3,4,5,6]);

var intersection = new Set([...setA].filter(x => setB.has(x)));
console.log(intersection);
var difference = new Set([...setA].filter(x => !setB.has(x)));
console.log("difference :" + [...difference].toString());
var union = new Set([...setA,...setB])
console.log("union :" + [...union].toString());
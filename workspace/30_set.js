var setA = new Set([1,2,3,4]);
var setB = new Set([3,4,5,6]);

var intersection = new Set([...setA].filter(x => setB.has(x))); // 교집합
console.log(`intersection : ${[...intersection].toString()}`);

var difference = new Set([...setA].filter(x => !setB.has(x)));  // 차집합
console.log("difference :" + [...difference].toString());

var union = new Set([...setA,...setB])                          // 합집합
console.log("union :" + [...union].toString());
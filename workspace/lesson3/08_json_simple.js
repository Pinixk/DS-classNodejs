const obj = {
    "이름": "큰돌",
    "나이": 27,
    "나이2": undefined
}
var prop = ['이름', '나이', '나이2']
for (let i = 0; i < Object.keys(obj).length; i++) {
    console.log(obj[prop[i]]); 
}
for(let key of Object.keys(obj)){           // Array 형태는 of / Object이면 in
    console.log(`${key} : ${obj[key]}`);    // obj.key로 불러오면 undefined만 뜸
}
for(let item of Object.values(obj)){        // 큰돌, 27, undefined
    console.log(item);    
}
for(let entry of Object.entries(obj)){      // entry[0] key값 = 이름, 나이, 나이2 / entry[1] value값 = 큰돌, 27, undefined
    console.log(entry[0],entry[1]);    
}

// ex)
const _name = '이름'
console.log(obj[_name]);        // 큰돌
console.log(obj['이름']);       // 큰돌
console.log(obj['나이2']);      // undefined
console.log(Object.keys(obj));  // key값
const arr = [5,102,8,120,44];
const found = arr.find(function(el){ // 찾은 값 중에 첫번째 값
    return el > 10;
})
console.log(found);

const 조건 = e => e.height >= 200
const 친구들 = [
    {"name" : "박종선", "height" : 173},
    {"name" : "연제호", "height" : 175},
    {"name" : "윤성종", "height" : 180},
    {"name" : "최주원", "height" : 190}
]

const 키큰친구 = 친구들.find(조건)           // 값을 못 찾으면 undefined
console.log(키큰친구)
const 키큰친구인덱스 = 친구들.findIndex(조건) // 값을 못 찾으면 -1
const tallestFriend = 친구들.indexOf(조건) // findIndex와 동작은 비슷하나 성능이 별로다
console.log(키큰친구인덱스); 
console.log(tallestFriend);
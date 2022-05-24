const {map, filter, pipe, values, go} = require('fxjs')
const L = require('fxjs')

const 친구들 = [
    {"name" : "고길동", "do" : "회사원"},
    {"name" : "둘리", "do" : "개발자"},
    {"name" : "도우너", "do" : "은행원"},
    {"name" : "또치", "do" : "개발자"},
]

// 배열을 통한 함수 방식 - key와 value의 값이 변경되면 소스코드 수정해야 됨
const t = 친구들.map(el => el.do === "개발자"? el : null ).filter( el => el ) 

// Point-free 프로그래밍(fxjs를 통한 currying) - key와 value가 바뀌어도 소스코드 손 댈 필요없음
const prop = key => obj => obj[key]
const propEqual = value => key => obj => prop(key)(obj) === value
const t2 = go(
    친구들,
    L.filter(propEqual('개발자')('do')),    // object : 친구들, value : 개발자, key : do
    L.takeAll
)
console.log(t2);
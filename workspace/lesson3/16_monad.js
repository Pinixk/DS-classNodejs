const g = JSON.parse
const f = k => k.temp
const fg = x => new Promise((resolve, reject) => resolve(x)).then(g).then(f)    
const log = x => console.log(x);
// new Promise를 통해 Promise<Pending> 같은 타입으로 반환
// resolve로 unit값을 반환
// .then로 bind로 순수한 값을 도출
fg('{"temp":36.5}').catch(_ => 'JSON PARSE IS NOT WORKING').then(log) // 숫자로만 시작하지 않으면 변수명으로 _, $ 등도 지정 가능하다
// {"temp":36.5} -> json object화 -> temp값(36.5) 도출
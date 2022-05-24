const log = console.log
const users = [{name : '손흥민'},{name : '김민재'},{name : '황희찬'},{name : '이재성'},]
const getUserByName = function(name){ 
  return users.find(function(u){
    return u.name === name || Promise.reject("객체에 없습니다.")
  })
}
const g = getUserByName
const f = ({name}) => `${name}이가 춤을 춥니다.`
const fg = function(x){
  return new Promise(function(resolve, reject){
    return resolve(x)
  }).then(g).then(f)
}
fg('살라').catch(_ => _).then(log)
fg('손흥민').catch(_ => _).then(log)
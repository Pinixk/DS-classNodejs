const a = {
    'name': 'KBJ',
    'tall': 169,
}
console.log(a);
const ret = JSON.stringify(a, null, 3) // JSON.stringify(value, replacer, space)
console.log(ret);

const replacer = (key, value) => {
    return (typeof value === 'string' ? undefined : value)
}
const result = JSON.stringify(a, replacer, 3)
console.log(result);
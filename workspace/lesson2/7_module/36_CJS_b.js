exports.sayLove = name => `${name}아 사랑해`
exports.sayHi = name => {
    console.log(this.sayLove('MEVN'));
    return `${name} Hi~!`
}
exports.value = 'MEVN Bye~!'
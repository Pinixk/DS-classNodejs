const cook = { create : recipe => recipe.start() }
const pasta = { start : () => console.log("Started pasta")}
const steak = { start : () => console.log("Started steak")}

cook.create(pasta)
cook.create(steak)
// write your code below!
var name = "Joe"
var height = 74
var message = `${name} is ${height} inches tall`
module.exports = {name, height, message}

function say(greeting, firstName) {
  console.log(`${greeting}, ${firstName}!`)
}
say ("Hello", "John")

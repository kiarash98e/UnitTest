// logical code 

module.exports.hello = "hello world !!!"

module.exports.even = 12

module.exports.isGreat = true

module.exports.shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'milk'
  ]

  module.exports.sum = (a,b) => {
    if (a === 0 && b === 0) {
        return 0
    }
    return a + b
}

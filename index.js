const hello = "hello world !!!"

const even = 12

const isGreat = true

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ]

const sum = (a,b) => {
    if (isNaN(a) || isNaN(b)) {
        throw TypeError()
    }
    if (a === 0 && b === 0) {
        return 0
    }
    return a + b
}


export { hello, even, isGreat, shoppingList, sum }